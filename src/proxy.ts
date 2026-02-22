// "use server";
import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";
import { userService } from "./service/auth";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for verify-email route
  if (pathname.startsWith("/verify-email")) {
    return NextResponse.next();
  }

  // Check for session token in cookies
  const sessionToken = request.cookies.get("better-auth.session_token");
  // const data = await userService.getSession();
  // console.log("Session data in middleware:", data);

  // console.log("Session token:", sessionToken);

  //* User is not authenticated at all
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access if session exists
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"], // Apply to all /dashboard routes
};
