import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logoutAdmin } from "../actions";
import { getSessionCookieName, verifySessionToken } from "@/lib/session";

export const dynamic = "force-dynamic";

async function getAdminSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(getSessionCookieName())?.value;

  if (!token) {
    redirect("/admin/login");
  }

  const session = await verifySessionToken(token);

  if (!session) {
    redirect("/admin/login");
  }

  return session;
}

const cards = [
  { label: "Products", value: "Coming soon" },
  { label: "Requests", value: "Coming soon" },
  { label: "Categories", value: "Coming soon" },
  { label: "CMS pages", value: "Coming soon" }
];

export default async function AdminDashboardPage() {
  const session = await getAdminSession();

  return (
    <main className="min-h-screen bg-gray-50 text-ink">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-sm font-semibold text-gray-500">Admin CMS</p>
            <h1 className="text-xl font-bold">Jersey Request Catalog</h1>
          </div>
          <form action={logoutAdmin}>
            <button className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold hover:border-gray-900">
              Logout
            </button>
          </form>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="mb-4 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700">
            Protected dashboard
          </p>
          <h2 className="text-3xl font-bold tracking-tight">Welcome, {session.email}</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            This is the first protected admin dashboard. Product management, customer requests, media library and settings will be added in the next steps.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div key={card.label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-gray-500">{card.label}</p>
              <p className="mt-3 text-xl font-bold">{card.value}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
