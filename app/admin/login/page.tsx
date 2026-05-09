import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12 text-ink">
      <section className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <a href="/" className="text-sm font-semibold text-gray-500 hover:text-black">
          ← Back to website
        </a>
        <div className="mt-8">
          <p className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Admin CMS
          </p>
          <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>
          <p className="mt-3 leading-7 text-gray-600">
            Access the private dashboard to manage products, requests, settings and content.
          </p>
        </div>
        <LoginForm />
      </section>
    </main>
  );
}
