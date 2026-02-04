export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-10">
      <h1 className="text-3xl font-semibold">Officer OS</h1>
      <p className="mt-4 text-gray-600">
        Military pay and benefits tools — accurate, visual, and simple.
      </p>

      <a className="mt-6 inline-block rounded-lg bg-black px-4 py-2 text-white" href="/pay">
        Go to Pay Calculator →
      </a>
    </main>
  );
}
