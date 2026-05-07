const featureCards = [
  {
    title: "Browse styles",
    text: "Explore sports-inspired jersey and fanwear styles organized by type, fit and category."
  },
  {
    title: "Send a request",
    text: "Choose a style, size and preferred fit, then send your request for manual confirmation."
  },
  {
    title: "Confirm before payment",
    text: "Availability, delivery time, specifications and final price are confirmed before payment."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="text-lg font-bold tracking-tight">
            Jersey Request Catalog
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="/catalog" className="hover:text-black">
              Catalog
            </a>
            <a href="/size-guide" className="hover:text-black">
              Size Guide
            </a>
            <a href="/request" className="hover:text-black">
              Request
            </a>
            <a href="/contact" className="hover:text-black">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Independent sportswear request catalog
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Find your next jersey style without guessing the size.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Browse sports-inspired basketball, football, baseball and hockey styles. Send a custom request with your size and preferred fit, and our manager will confirm availability, delivery and final price before payment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/catalog"
              className="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Browse Catalog
            </a>
            <a
              href="/request"
              className="rounded-full border border-gray-300 px-6 py-3 text-center text-sm font-semibold text-gray-900 transition hover:border-gray-900"
            >
              Send Custom Request
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-panel p-6 shadow-sm ring-1 ring-gray-200">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              How it works
            </p>
            <div className="mt-6 space-y-5">
              {featureCards.map((card, index) => (
                <div key={card.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-950">{card.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">{card.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-2xl font-bold tracking-tight">Built for request-based sales</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            This website will grow into a full catalog with admin CMS, product management, SEO settings, Cloudflare R2 image uploads, customer request CRM and an AI Jersey Fit Assistant.
          </p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jersey Request Catalog. All rights reserved.</p>
        <p>Availability, sizing, delivery and final price are confirmed manually before payment.</p>
      </footer>
    </main>
  );
}
