import Link from "next/link";

export default function BudgetPlannerToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Budget Planner</h1>
        <p className="mt-2 text-gray-600">
          Build a clean monthly plan using your Base Pay, BAH, and BAS. Export your sheet in one click.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pay"
            className="rounded-2xl border bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 transition"
          >
            Go to Pay Calculator
          </Link>
          <Link
            href="/toolkits"
            className="rounded-2xl border bg-gray-50 px-4 py-2 text-sm font-medium hover:bg-gray-100 transition"
          >
            Back to Toolkits
          </Link>
        </div>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">How to Use It</h2>
        <ol className="mt-3 list-decimal pl-5 text-gray-700 space-y-2">
          <li>Enter your pay details in the Pay Calculator.</li>
          <li>Click “Download Budget Sheet (.xlsx)”.</li>
          <li>Only edit the blue cells—everything else updates automatically.</li>
          <li>Use the “Start Here” targets to set housing/food/savings baselines.</li>
        </ol>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          A dashboard view inside OfficerOS (so you can budget without Excel) + paycheck split planning.
        </p>
      </section>
    </main>
  );
}