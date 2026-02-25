export default function FirstPCSToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">First PCS</h1>
        <p className="mt-2 text-gray-600">
          Moving money made simple: the big entitlements, what to plan for, and how to avoid getting burned.
        </p>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">PCS Money Basics</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>DLA (Dislocation Allowance): what it’s for and when you might get it.</li>
          <li>Per diem + travel days: plan cashflow so you’re not floating expenses.</li>
          <li>HHG vs PPM (partial DITY): know what you’re signing up for.</li>
          <li>BAH changes with duty station—use OfficerOS to preview the new ZIP.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Housing Decision Framework</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Target: rent + utilities ≤ your BAH (or slightly under if possible).</li>
          <li>Don’t forget: parking, commute, deposits, furniture, and setup fees.</li>
          <li>If buying: run a “break-even” horizon vs your time-on-station.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          A PCS checklist + a simple PPM estimator + “BAH vs rent” comparison tool.
        </p>
      </section>
    </main>
  );
}