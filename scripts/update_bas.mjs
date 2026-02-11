import fs from "node:fs";
import path from "node:path";
import { fetchHtmlWithFallback } from "./lib/fetchHtml.mjs";

// Multiple sources because DFAS blocks GitHub Actions runners
const BAS_SOURCES = [
  "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/bas/",
  "https://militarypay.defense.gov/Pay/Pay-Tables/BAS/",
  "https://www.navycs.com/charts/2026-bas-rates.html"
];

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseLatest(text) {
  // Works for DFAS / MilitaryPay / NavyCS formats
  // Example: "January 1, 2026 $328.48 $476.95 $953.90"
  const re =
    /January\s+1,\s+(\d{4})\s+\$?(\d{1,3}\.\d{2})\s+\$?(\d{1,3}\.\d{2})\s+\$?(\d{1,4}\.\d{2})/i;

  const m = text.match(re);
  if (!m) return null;

  return {
    year: Number(m[1]),
    officers: Number(m[2]),
    enlisted: Number(m[3]),
    basII: Number(m[4]),
  };
}

async function main() {
  const { html, sourceUrl } = await fetchHtmlWithFallback(BAS_SOURCES);
  console.log(`BAS source used: ${sourceUrl}`);

  const text = strip(html);
  const latest = parseLatest(text);

  if (!latest) {
    console.warn("⚠️ Could not parse BAS table — source may be blocked or layout changed");
    return;
  }

  const out = {
    source: sourceUrl,
    generatedAt: new Date().toISOString(),
    latest,
  };

  const outDir = path.join(process.cwd(), "data", "bas");
  fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, "bas.json");
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");

  console.log(`✅ Wrote ${outPath}`);
  console.log("Latest BAS:", latest);
}

main().catch(e => {
  console.error("❌", e);
  process.exit(1);
});
