import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const AUTH_ROUTES = ["/login", "/register", "/forgot-password"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;

  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  // Root: redirect based on auth state
  if (pathname === "/") {
    const dest = token ? "/dashboard" : "/login";
    return NextResponse.redirect(new URL(dest, request.url));
  }

  // Authenticated user on auth pages → send to dashboard
  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Unauthenticated user on protected pages → send to login
  if (!isAuthRoute && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
