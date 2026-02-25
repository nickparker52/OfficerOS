export default function DeploymentToolkit() {
  return (
    <main className="mx-auto max-w-5xl p-10 space-y-8">
      <header>
        <h1 className="text-3xl font-semibold">Deployment</h1>
        <p className="mt-2 text-gray-600">
          Set your finances up before you go: autopay, savings plan, SCRA, and “what to do with extra income.”
        </p>
      </header>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Pre-Deployment Money Setup</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Turn on autopay for rent, utilities, credit cards, and loans.</li>
          <li>Increase automated savings (deployment is a chance to build a cushion).</li>
          <li>Freeze unnecessary subscriptions so you don’t bleed money.</li>
          <li>Download your OfficerOS budget sheet and set a “deployment savings target.”</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">SCRA (Quick Practical Use)</h2>
        <ul className="mt-3 list-disc pl-5 text-gray-700 space-y-2">
          <li>Check eligibility and request interest-rate reductions where applicable.</li>
          <li>Keep copies of orders and confirmation emails in one folder.</li>
          <li>Don’t assume it’s automatic—many lenders require a request.</li>
        </ul>
      </section>

      <section className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold">Coming Next</h2>
        <p className="mt-2 text-gray-600">
          A deployment-specific budget mode + “extra income allocator” sliders.
        </p>
      </section>
    </main>
  );
}