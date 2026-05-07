export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-ink">
      <section className="mx-auto max-w-3xl px-6 py-12">
        <a href="/" className="text-sm font-semibold text-gray-500 hover:text-black">
          ← Back to home
        </a>
        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Contact placeholder
          </p>
          <h1 className="text-4xl font-bold tracking-tight">Contact us</h1>
          <p className="mt-5 leading-7 text-gray-600">
            Contact settings will be managed from the admin panel in a later step. This page confirms the route works correctly on Railway.
          </p>

          <div className="mt-8 rounded-2xl bg-gray-50 p-6">
            <h2 className="text-xl font-bold">Coming next</h2>
            <p className="mt-3 leading-7 text-gray-600">
              WhatsApp, Telegram, email, social links and business contact details will be editable from the CMS settings page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
