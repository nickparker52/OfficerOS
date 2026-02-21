import withRates from "@/data/bah/normalized/2026.with.json";
import withoutRates from "@/data/bah/normalized/2026.without.json";
import zipMha from "@/data/bah/normalized/2026.zipmha.json";

type PayGrade =
  | "O-1" | "O-2" | "O-3" | "O-4" | "O-5" | "O-6" | "O-7" | "O-8" | "O-9" | "O-10"
  | "W-1" | "W-2" | "W-3" | "W-4" | "W-5"
  | "E-1" | "E-2" | "E-3" | "E-4" | "E-5" | "E-6" | "E-7" | "E-8" | "E-9"
  | "O-1E" | "O-2E" | "O-3E";

function normalizeZip(input: string): string | null {
  const z = (input ?? "").trim();
  const m = z.match(/^(\d{5})(?:-\d{4})?$/);
  return m ? m[1] : null;
}

function zipToMha(zipInput: string): string | null {
  const zip = normalizeZip(zipInput);
  if (!zip) return null;

  // zipMha.json = { year, generatedAt, zipToMha: { "02139": "MA120", ... } }
  const mha = (zipMha as any)?.zipToMha?.[zip];
  return typeof mha === "string" ? mha : null;
}

export function getBahRate(
  zip: string,
  grade: PayGrade,
  withDependents: boolean
): number | null {
  const mha = zipToMha(zip);
  console.log("ZIPMHA loaded keys:", Object.keys((zipMha as any)?.zipToMha ?? {}).length);
  if (!mha) return null;

  const dataset: any = withDependents ? withRates : withoutRates;
  const record = dataset?.ratesByMha?.[mha];
  if (!record) return null;

  const rate = record?.rates?.[grade];
  return typeof rate === "number" ? rate : null;
}