import { jwtVerify, SignJWT } from "jose";

export type AdminSession = {
  email: string;
  role: string;
};

const SESSION_COOKIE_NAME = "jersey_admin_session";

export function getSessionCookieName() {
  return SESSION_COOKIE_NAME;
}

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET environment variable is required for admin authentication.");
  }

  return new TextEncoder().encode(secret);
}

export async function createSessionToken(session: AdminSession) {
  return new SignJWT(session)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecret());
}

export async function verifySessionToken(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, getJwtSecret());

    if (payload.role !== "admin" || typeof payload.email !== "string") {
      return null;
    }

    return {
      email: payload.email,
      role: String(payload.role)
    };
  } catch {
    return null;
  }
}
