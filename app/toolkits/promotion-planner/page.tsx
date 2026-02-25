export default function PromotionPlannerToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Promotion Pay Planner</h1>
        <p className="mt-2 text-gray-600">
          Use promotions as a cheat code: plan the raise before it hits your account.
        </p>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">The Rule</h2>
        <p className="mt-2 text-gray-700">
          Decide where the raise goes <span className="font-medium">before</span> you feel richer.
          A clean default: split it between savings/investing, debt payoff, and quality-of-life.
        </p>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Suggested Split (default)</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>50% to savings/investing (TSP/Roth IRA/emergency fund)</li>
          <li>30% to debt payoff (if any)</li>
          <li>20% to lifestyle upgrades (guilt-free)</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          A “current vs promoted” compare view that uses your Pay Calculator + BAH ZIP to show the delta.
        </p>
      </section>
    </main>
  );
}