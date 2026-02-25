export default function StudentLoansToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Student Loans</h1>
        <p className="mt-2 text-gray-600">
          Understand your options: PSLF, repayment plans, and payoff vs invest.
        </p>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">First Pass Checklist</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>List your loans (balance, rate, federal vs private).</li>
          <li>If eligible, learn the basics of PSLF (don’t guess).</li>
          <li>High-interest private loans often deserve priority payoff.</li>
          <li>Use OfficerOS budget export to pick a monthly payment you can sustain.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Payoff vs Invest (simple)</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>If loan rate is very high: payoff tends to win.</li>
          <li>If loan rate is low and you’re investing long-term: investing may win.</li>
          <li>Behavior matters: pick the option you’ll actually stick with.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          A mini-calculator: compare “extra $X/month to loans” vs “invest $X/month” over time.
        </p>
      </section>
    </main>
  );
}