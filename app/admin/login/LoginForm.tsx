"use client";

import { useActionState } from "react";
import { loginAdmin, type LoginState } from "../actions";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAdmin, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
          placeholder="admin@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="text-sm font-semibold text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-900"
          placeholder="Your password"
        />
      </div>

      {state.error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {state.error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {pending ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
