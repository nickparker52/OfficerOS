export default function RetirementTSPToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">TSP & Retirement</h1>
        <p className="mt-2 text-gray-600">
          A practical guide to contributions, Roth vs Traditional, and how to turn raises into wealth.
        </p>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Simple Starter Strategy</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Start with a contribution rate you can sustain (example: 5–10%).</li>
          <li>Increase after promotions/raises before lifestyle grows.</li>
          <li>Use the budget sheet to “lock in” TSP as a planned line item.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Roth vs Traditional (plain English)</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Roth: pay taxes now, withdraw later tax-free (often good when income is lower).</li>
          <li>Traditional: reduce taxable income now, pay taxes later.</li>
          <li>If you’re unsure: choose one and stay consistent—rate matters most early.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          Interactive projections: “If I increase TSP by 1% each promotion, where do I land?”
        </p>
      </section>
    </main>
  );
}