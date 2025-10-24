import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Handle subdomain routing and protected routes
export function middleware(req: NextRequest) {
  const hostname = req.headers.get("host") || "";
  const pathname = req.nextUrl.pathname;

  // If visiting app.refpool.xyz root, redirect to /app
  if (hostname.startsWith("app.") && pathname === "/") {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  // If visiting app.refpool.xyz and not authenticated, redirect to login
  if (hostname.startsWith("app.") && pathname.startsWith("/app")) {
    // Check for session token
    const token = req.cookies.get("next-auth.session-token")?.value ||
                  req.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!token && pathname !== "/app/login" && pathname !== "/auth/login") {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

