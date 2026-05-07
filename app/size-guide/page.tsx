export default function SizeGuidePage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-4xl px-6 py-12">
        <a href="/" className="text-sm font-semibold text-gray-500 hover:text-black">
          ← Back to home
        </a>
        <div className="mt-8">
          <p className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Size guide placeholder
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Jersey size guide</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            The full AI Jersey Fit Assistant will be added later. For now, this page confirms the route works and gives customers a simple sizing disclaimer.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-8">
          <h2 className="text-2xl font-bold">Important sizing note</h2>
          <p className="mt-4 leading-7 text-gray-600">
            Size recommendations are approximate. Final size should be confirmed with the seller before payment because sizing can vary between styles and suppliers.
          </p>
        </div>
      </section>
    </main>
  );
}
