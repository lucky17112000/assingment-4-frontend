"use server";

import { env } from "@/env";
import { authClient } from "@/lib/auth-client";
import { router } from "better-auth/api";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
// import { de } from "zod/locales";

// Using process.env directly to avoid z.url() crash with localhost URLs
const AUTH_URL = env.AUTH_URL;

// export const signUp = async (value: any) => {
//   try {
//     const url = `${AUTH_URL}/api/auth/sign-up/email`;
//     console.log("url", url);

//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         // better-auth requires Origin header — not sent automatically in server actions
//         Origin: env.FRONTEND_API ?? "http://localhost:3000",
//       },
//       body: JSON.stringify({
//         name: value.name,
//         email: value.email,
//         password: value.password,
//         role: value.role,
//       }),
//     });

//     // Guard: if server returned HTML (error page), return error object instead of crashing
//     // crashing off korar jonnno, jate kore frontend e error ta handle kora jay instead of breaking the whole app
//     const contentType = response.headers.get("content-type");
//     if (!contentType?.includes("application/json")) {
//       const text = await response.text();
//       console.error("Non-JSON response body:", text.slice(0, 300));
//       return {
//         error: `Server returned ${response.status} — check if backend is running on ${AUTH_URL}`,
//       };
//     }

//     const data = await response.json();
//     // if(response.ok){
//     //   router
//     // }
//     if (!response.ok) {
//       return {
//         error: data?.message ?? data?.error ?? "Invalid email or password.",
//       };
//     }
//     console.log("Sign up response:", data);

//     // better-auth sets the session via Set-Cookie on the response
//     // Since this is a server action, we must manually forward the cookies to the browser
//     const storeCookies = await cookies();
//     //set-cookier moddo diebackend data patacce
//     const setCookieHeader = response.headers.get("set-cookie");
//     if (setCookieHeader) {
//       // Parse and forward each cookie from backend to browser
//       //Set-Cookie: accessToken=abc123; Path=/, refreshToken=xyz789; Path=/ eifromate e data asce tai split kore cookie gula ke alada kore set kora hocche
//       setCookieHeader.split(",").forEach((cookie) => {
//         const [nameValue] = cookie.split(";");
//         const [name, value] = nameValue.trim().split("=");
//         if (name && value) storeCookies.set(name.trim(), value.trim());
//       });
//     }
//     // Also set token directly if present in response body
//     if (data?.token) {
//       storeCookies.set("token", data.token, { httpOnly: true, path: "/" });
//     }

//     return data;
//   } catch (error) {
//     console.error("Error signing up:", error);
//     return { error: "Could not connect to backend. Is it running?" };
//   }
// };

// export const signIn = async (value: any) => {
//   try {
//     const url = `${AUTH_URL}/api/auth/sign-in/email`;
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",

//         // better-auth requires Origin header — not sent automatically in server actions
//         Origin: env.FRONTEND_API ?? "http://localhost:3000",
//       },
//       credentials: "include",
//       body: JSON.stringify({
//         email: value.email,
//         password: value.password,
//       }),
//     });
//     // Guard: if server returned HTML (error page), return error object instead of crashing
//     // crashing off korar jonnno, jate kore frontend e error ta handle kora jay instead of breaking the whole app
//     const contentType = response.headers.get("content-type");
//     if (!contentType?.includes("application/json")) {
//       const text = await response.text();
//       console.error("Non-JSON response body:", text.slice(0, 300));
//       return {
//         error: `Server returned ${response.status} — check if backend is running on ${AUTH_URL}`,
//       };
//     }
//     const data = await response.json();

//     // If backend returned an error status (401 wrong password, 404 not found, etc)
//     // return the error message directly so the UI can display it
//     if (!response.ok) {
//       return {
//         error: data?.message ?? data?.error ?? "Invalid email or password.",
//       };
//     }

//     const storeCookies = await cookies();

//     // Forward Set-Cookie headers from backend to browser
//     const setCookieHeader = response.headers.get("set-cookie");
//     if (setCookieHeader) {
//       setCookieHeader.split(",").forEach((cookie) => {
//         const [nameValue] = cookie.split(";");
//         const [name, value] = nameValue.trim().split("=");
//         if (name && value) storeCookies.set(name.trim(), value.trim());
//       });
//     }
//     // Also set token directly if present in response body
//     if (data?.token) {
//       storeCookies.set("token", data.token, { httpOnly: true, path: "/" });
//     }

//     return data;
//   } catch (error) {
//     console.error("Error signing in:", error);
//     return { error: "Could not connect to backend. Is it running?" };
//   }
// };
// //handle it by better auth er social sign in method die, jeta amra auth-client.ts e export korechi

// export const getUser = async () => {};

export async function getSession() {
  try {
    // const session = await authClient.getSession();//for test database connect or not
    //this is server component for this resaon i have to send cookie manually like below
    const cookieStore = await cookies();
    console.log("Cookies in getSession:", cookieStore.getAll()); //check all cookies coming from browser
    //we can  catch specific cookie by name also
    //we can also set cookie manually but not served component
    // console.log(cookieStore.get("better-auth.session_token"))

    const res = await fetch(`${AUTH_URL}/get-session`, {
      headers: {
        Cookie: cookieStore.toString(), //send all cookies
      },
      cache: "no-store", //disable nextjs cache for fetch
    });
    // console.log("Session data:", await res.json());
    const session = await res.json();
    if (session === null) {
      return { data: null, error: { message: "No active session" } };
    }
    // console.log("Session data:", session);
    return { data: session, error: null };
  } catch (error) {
    console.error("Error fetching session:", error);
    return { data: null, error: { message: "Error fetching session" } };
  }
}
