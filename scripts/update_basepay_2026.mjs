import fs from "node:fs";
import path from "node:path";
import { fetchHtmlWithFallback } from "./lib/fetchHtml.mjs";

const YEAR = 2026;

// DFAS pages (authoritative)
const URLS = {
  CO: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Basic-Pay/CO/",
  CO_FE: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Basic-Pay/CO_FE/",
  WO: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Basic-Pay/WO/",
  EM: "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Basic-Pay/EM/",
};

const HEADERS = [
  "2 or less","Over 2","Over 3","Over 4","Over 6","Over 8","Over 10","Over 12","Over 14","Over 16","Over 18",
  "Over 20","Over 22","Over 24","Over 26","Over 28","Over 30","Over 32","Over 34","Over 36","Over 38","Over 40"
];
const BREAKS = [2,3,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40];

const GRADES = {
  CO:    ["O-1","O-2","O-3","O-4","O-5","O-6","O-7","O-8","O-9","O-10"],
  CO_FE: ["O-1E","O-2E","O-3E"],
  WO:    ["W-1","W-2","W-3","W-4","W-5"],
  EM:    ["E-1","E-2","E-3","E-4","E-5","E-6","E-7","E-8","E-9"],
};

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/(p|tr|div|h\d)>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\u00A0/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{2,}/g, "\n")
    .trim();
}

function moneyTokens(s) {
  return s.match(/\d{1,3}(?:,\d{3})*\.\d{2}/g) || [];
}
function toNum(tok) {
  const n = Number(tok.replace(/,/g, ""));
  return Number.isFinite(n) ? n : null;
}
function normalizeTo22(nums) {
  const out = new Array(22).fill(null);
  for (let i = 0; i < Math.min(22, nums.length); i++) out[i] = nums[i];
  return out;
}

async function fetchHtml(url) {
  // Try DFAS first (url), then fall back to the matching MilitaryPay mirror
  // so CI doesn't die when DFAS blocks GitHub runners (403).
  const fallback = url
    .replace("https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/Basic-Pay/", "https://militarypay.defense.gov/Pay/Pay-Tables/Basic-Pay/");

  const { html, sourceUrl } = await fetchHtmlWithFallback([url, fallback]);
  if (sourceUrl !== url) {
    console.warn(`↪️  Fallback used for ${url} -> ${sourceUrl}`);
  }
  return html;
}


function parseGradeRow(text, grade) {
  // Find grade label and read the money values after it.
  // DFAS uses "O-1 (Note ...)" etc, so we allow notes between grade and numbers.
  const idx = text.toUpperCase().indexOf(grade.toUpperCase());
  if (idx === -1) return normalizeTo22([]);

  const window = text.slice(idx, idx + 8000);
  const nums = moneyTokens(window).map(toNum).filter(x => typeof x === "number");
  // take first 22 numbers after the grade
  return normalizeTo22(nums.slice(0, 22));
}

function sanity(table) {
  return Object.values(table).some(arr => arr.some(v => typeof v === "number"));
}

async function main() {
  const out = {
    year: YEAR,
    headers: HEADERS,
    breaks: BREAKS,
    sources: URLS,
    generatedAt: new Date().toISOString(),
    tables: {},
  };

  for (const [key, url] of Object.entries(URLS)) {
    const html = await fetchHtml(url);
    const text = stripHtml(html);

    const table = {};
    for (const g of GRADES[key]) table[g] = parseGradeRow(text, g);

    if (!sanity(table)) {
      console.warn(`⚠️ ${key}: parsed 0 numeric values. (Could be a blocked fetch, layout change, or non-table content.)`);

    } else {
      const sample = GRADES[key].find(g => table[g].some(v => typeof v === "number"));
      console.log(`✅ ${key} sample ${sample}:`, table[sample].slice(0, 6));
    }

    out.tables[key] = table;
  }

  const outDir = path.join(process.cwd(), "data", "basepay");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `${YEAR}.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");
  console.log(`✅ Wrote ${outPath}`);
}

main().catch(e => { console.error("❌", e); process.exit(1); });
