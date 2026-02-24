// "use server";
import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./src/lib/auth-client";
import { getSession } from "./src/service/auth";
// import { router } from "better-auth/api";
// import { userService } from "./service/auth";

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for verify-email route
  if (pathname.startsWith("/verify-email")) {
    return NextResponse.next();
  }

  // Check for session token in cookies
  const sessionToken = request.cookies.get("better-auth.session_token");
  const data = await getSession();
  console.log("Session data in middleware:", data?.data?.user?.role);
  const myRole = data?.data?.user?.role ?? data?.data?.role ?? null;

  // console.log("Session token:", sessionToken);

  //* User is not authenticated at all
  if (!sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access if session exists
  // if (sessionToken) {
  //   return NextResponse.redirect(new URL("/dashboard", request.url));
  // }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*"], // Apply to all /dashboard routes
};
