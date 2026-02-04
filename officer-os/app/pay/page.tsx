"use client";

import { useMemo, useState } from "react";
import { getBasePay } from "../../lib/pay/basepay";




type PayGrade =
  | "O-1" | "O-2" | "O-3" | "O-4" | "O-5" | "O-6" | "O-7" | "O-8" | "O-9" | "O-10"
  | "W-1" | "W-2" | "W-3" | "W-4" | "W-5"
  | "E-1" | "E-2" | "E-3" | "E-4" | "E-5" | "E-6" | "E-7" | "E-8" | "E-9"
  | "O1E" | "O2E" | "O3E";

const YEARS = [2026, 2025] as const;

function isEnlisted(g: PayGrade) { return g.startsWith("E"); }

export default function PayPage() {
  const [year, setYear] = useState<(typeof YEARS)[number]>(2026);
  const [grade, setGrade] = useState<PayGrade>("O-1");
  const [yos, setYos] = useState<number>(0);
  const [zip, setZip] = useState<string>("");
  const [dependents, setDependents] = useState<boolean>(false);

  const bas = useMemo(() => {
    if (year === 2026) return isEnlisted(grade) ? 476.95 : 328.48;
    if (year === 2025) return isEnlisted(grade) ? 465.77 : 320.78;
    return 0;
  }, [year, grade]);

  const basePay = getBasePay({ year, grade, yos });
 // TODO: DFAS table
  const bah = 0;     // TODO: DTMO table

  const total = basePay + bah + bas;

  const parts = useMemo(() => {
    const p = [
      { label: "Base Pay", value: basePay },
      { label: "BAH", value: bah },
      { label: "BAS", value: bas },
    ];
    const sum = p.reduce((a, x) => a + x.value, 0);
    return { p, sum };
  }, [basePay, bah, bas]);

  return (
    <main className="mx-auto max-w-5xl p-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Pay Calculator</h1>
        <p className="text-sm text-gray-600">
          Monthly pay components (Base Pay + BAH + BAS). Next step: wire official DFAS + DTMO tables.
        </p>
      </header>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Inputs</h2>

          <div className="mt-4 grid gap-4">
            <div>
              <label className="block text-sm font-medium">Year</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2"
                value={year}
                onChange={(e) => setYear(Number(e.target.value) as any)}
              >
                {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Pay Grade</label>
              <select className="mt-1 w-full rounded-xl border px-3 py-2"
                value={grade}
                onChange={(e) => setGrade(e.target.value as PayGrade)}
              >
                {[
                  "O-1","O-2","O-3","O-4","O-5","O-6","O-7","O-8","O-9","O-10",
                  "O1E","O2E","O3E",
                  "W-1","W-2","W-3","W-4","W-5",
                  "E-1","E-2","E-3","E-4","E-5","E-6","E-7","E-8","E-9",
                ].map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Years of Service (YOS)</label>
              <input className="mt-1 w-full rounded-xl border px-3 py-2"
                type="number" min={0} max={40}
                value={yos}
                onChange={(e) => setYos(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Duty ZIP (for BAH)</label>
              <input className="mt-1 w-full rounded-xl border px-3 py-2"
                placeholder="02139"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />
            </div>

            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={dependents} onChange={(e) => setDependents(e.target.checked)} />
              With dependents
            </label>
          </div>
        </section>

        <section className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Results</h2>

          <div className="mt-4 rounded-2xl bg-gray-50 p-4">
            <div className="text-sm text-gray-600">Estimated monthly total</div>
            <div className="text-3xl font-semibold">{total > 0 ? `$${total.toFixed(2)}` : "—"}</div>
            <p className="mt-2 text-xs text-gray-500">Taxes not included.</p>
          </div>

          <div className="mt-5 space-y-3">
            {parts.p.map((x) => {
              const pct = parts.sum > 0 ? (x.value / parts.sum) * 100 : 0;
              return (
                <div key={x.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span>{x.label}</span>
                    <span className="font-medium">{x.value > 0 ? `$${x.value.toFixed(2)}` : "—"}</span>
                  </div>
                  <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div className="h-full bg-black/70" style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
