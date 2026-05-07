export default function RequestPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <a href="/" className="text-sm font-semibold text-gray-500 hover:text-black">
          ← Back to home
        </a>
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Request form placeholder
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Send a custom request</h1>
          <p className="mt-5 leading-7 text-gray-600">
            The full request form will be connected to the MySQL database in the next development steps. Customers will be able to choose a style, size, fit and contact method.
          </p>

          <div className="mt-8 grid gap-4">
            <input className="rounded-2xl border border-gray-300 px-4 py-3" placeholder="Your name" disabled />
            <input className="rounded-2xl border border-gray-300 px-4 py-3" placeholder="Preferred jersey style" disabled />
            <input className="rounded-2xl border border-gray-300 px-4 py-3" placeholder="Preferred size" disabled />
            <textarea className="min-h-28 rounded-2xl border border-gray-300 px-4 py-3" placeholder="Message" disabled />
            <button className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white opacity-60" disabled>
              Coming Soon
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
