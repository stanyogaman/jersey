const placeholderProducts = [
  "Basketball Style Jersey",
  "Football Style Jersey",
  "Baseball Style Shirt",
  "Hockey Style Jersey",
  "Fanwear Hoodie",
  "Custom Request Item"
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-6xl px-6 py-12">
        <a href="/" className="text-sm font-semibold text-gray-500 hover:text-black">
          ← Back to home
        </a>
        <div className="mt-8">
          <p className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Catalog placeholder
          </p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Browse jersey and fanwear styles</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            This catalog will soon display products from the admin CMS. For now, this placeholder confirms the route works correctly on Railway.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProducts.map((title) => (
            <div key={title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-40 items-center justify-center rounded-2xl bg-gray-100 text-sm font-semibold text-gray-500">
                Image coming soon
              </div>
              <h2 className="mt-5 text-lg font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Availability, size and final price will be confirmed manually before payment.
              </p>
              <a
                href="/request"
                className="mt-5 inline-flex rounded-full bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800"
              >
                Send Request
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
