export default function JustMarriedToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Just Married</h1>
        <p className="mt-2 text-gray-600">
          What changes immediately: BAH, healthcare, budgeting together, and the biggest admin steps.
        </p>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">First Week Checklist</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Update DEERS + personnel records (this drives benefits).</li>
          <li>Verify BAH “with dependents” status in your pay system.</li>
          <li>Pick your healthcare setup (Tricare options depending on branch/status).</li>
          <li>Create a shared “household baseline” budget (rent, groceries, car, insurance).</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Money Setup That Prevents Fights</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>One shared bills account + two personal “fun money” buckets (even small).</li>
          <li>Agree on savings goals (emergency fund, travel, down payment).</li>
          <li>Use the OfficerOS budget export as the “source of truth.”</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          Dual-military scenarios, filing status tradeoffs, and a “combined pay” mode.
        </p>
      </section>
    </main>
  );
}