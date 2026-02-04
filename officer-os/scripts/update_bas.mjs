import fs from "node:fs";
import path from "node:path";

const URL = "https://www.dfas.mil/MilitaryMembers/payentitlements/Pay-Tables/bas/";

async function fetchHtml(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
    },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status} for ${url}`);
  return await res.text();
}

function strip(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\u00A0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parseLatest(text) {
  // Example appears like: "January 1, 2026 $328.48 $476.95 $953.90"
  const re = /January\s+1,\s+(\d{4})\s+\$?(\d{1,3}\.\d{2})\s+\$?(\d{1,3}\.\d{2})\s+\$?(\d{1,4}\.\d{2})/i;
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
  const html = await fetchHtml(URL);
  const text = strip(html);
  const latest = parseLatest(text);
  if (!latest) throw new Error("Could not parse BAS table.");

  const out = {
    source: URL,
    generatedAt: new Date().toISOString(),
    latest,
  };

  const outDir = path.join(process.cwd(), "data", "bas");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, `bas.json`);
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2), "utf8");
  console.log(`✅ Wrote ${outPath}`);
  console.log("Latest BAS:", latest);
}

main().catch(e => { console.error("❌", e); process.exit(1); });
