import { NextRequest, NextResponse } from "next/server";
import { userService } from "./service/auth";

export async function proxy(request: NextRequest) {
  try {
    // ✅ Server-side এ session get করার সঠিক পদ্ধতি
    const { data } = await userService.getSession();
    console.log("Session data in proxy:", data);
    // console.log("User Role from proxy:", (data?.user as any)?.role);

    // Role based redirect করতে চাইলে
    // if (data?.user?.role === "Admin") {
    //   return NextResponse.redirect(new URL("/admin", request.url));
    // }
    let isAuthenticated = false;
    if (data) {
      isAuthenticated = true;
    }
    // if (!isAuthenticated) {
    //   return NextResponse.redirect(new URL("/login", request.url));
    // }

    return NextResponse.next();
  } catch (error) {
    console.error("Proxy error:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/dashboard"],
};
