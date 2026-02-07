import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const COOKIE_NAME = "theme";

export async function middleware(req: NextRequest) {
  const existing = req.cookies.get(COOKIE_NAME)?.value;

  // Only enforce theme selection on /store
  if (!existing) {
    // ⬇️ fetch templates from mock API
    const res = await fetch(new URL("/api/templates", req.url), {
      cache: "no-store",
    });

    if (!res.ok) {
      // fail-safe: allow request through if API fails
      return NextResponse.next();
    }

    const templates: Array<{ key: string }> = await res.json();

    if (!templates.length) {
      return NextResponse.next();
    }

    const picked = templates[Math.floor(Math.random() * templates.length)];

    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = "/store";

    const response = NextResponse.redirect(redirectUrl);

    response.cookies.set(COOKIE_NAME, picked.key, {
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 30,
    });

    response.headers.set("Cache-Control", "no-store");

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/store/:path*"],
};
