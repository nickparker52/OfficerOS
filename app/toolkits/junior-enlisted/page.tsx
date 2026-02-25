export default function JuniorEnlistedToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Junior Enlisted</h1>
        <p className="mt-2 text-gray-600">
          A simple money plan for your first duty station: housing, savings, debt, and “avoid these traps.”
        </p>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Start Here</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Run Pay Calculator → download the budget sheet.</li>
          <li>If you’re in barracks: build emergency fund + crush high-interest debt first.</li>
          <li>If you’re off-post: keep rent + utilities under your BAH target.</li>
          <li>Automate savings on payday (even $50–$150/mo adds up fast early).</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Avoid These Traps</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Buying a car payment that eats your raise.</li>
          <li>Missing TSP match if you’re eligible (free money).</li>
          <li>“Lifestyle creep” after first steady checks.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          Interactive “Barracks vs apartment” decision tool + a starter savings builder.
        </p>
      </section>
    </main>
  );
}