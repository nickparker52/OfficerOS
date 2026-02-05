import basepay2026 from "../../data/basepay/2026.json";

export type PayGrade =
  | "O-1" | "O-2" | "O-3" | "O-4" | "O-5" | "O-6" | "O-7" | "O-8" | "O-9" | "O-10"
  | "W-1" | "W-2" | "W-3" | "W-4" | "W-5"
  | "E-1" | "E-2" | "E-3" | "E-4" | "E-5" | "E-6" | "E-7" | "E-8" | "E-9"
  | "O1E" | "O2E" | "O3E"  // legacy UI values (we map these)
  | "O-1E" | "O-2E" | "O-3E";

type BasePayData = typeof basepay2026;

function normalizeGrade(g: PayGrade): keyof BasePayData["tables"]["CO"] | keyof BasePayData["tables"]["CO_FE"] | keyof BasePayData["tables"]["WO"] | keyof BasePayData["tables"]["EM"] {
  if (g === "O1E") return "O-1E";
  if (g === "O2E") return "O-2E";
  if (g === "O3E") return "O-3E";
  return g as any;
}

function tableKeyForGrade(g: string): keyof BasePayData["tables"] {
  if (g.startsWith("E-")) return "EM";
  if (g.startsWith("W-")) return "WO";
  if (g.endsWith("E")) return "CO_FE";
  return "CO";
}

// Pick column index based on DFAS “2 or less / Over 2 / Over 3 / ...” scheme
function columnIndexForYos(yos: number, breaks: number[]): number {
  if (!Number.isFinite(yos) || yos < 0) return 0;

  // index 0 corresponds to "2 or less"
  if (yos <= 2) return 0;

  // for yos > 2, find the largest break < yos
  // breaks: [2,3,4,6,...,40] correspond to "Over X"
  let idx = 0;
  for (let i = 0; i < breaks.length; i++) {
    if (yos > breaks[i]) idx = i + 1; // +1 because col 1 is "Over 2"
  }
  // cap within headers length
  return Math.min(idx, (basepay2026.headers.length - 1));
}

export function getBasePay(params: { year: 2026; grade: PayGrade; yos: number }): number {
  const g = normalizeGrade(params.grade);
  const key = tableKeyForGrade(g);
  const data = basepay2026 as BasePayData;

  const col = columnIndexForYos(params.yos, data.breaks);
  const row = (data.tables as any)[key]?.[g] as (number | null)[] | undefined;

  if (!row) return 0;

  const v = row[col];
  return typeof v === "number" ? v : 0;
}
