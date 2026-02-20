"use server";

// Using process.env directly to avoid z.url() crash with localhost URLs
const AUTH_URL = process.env.AUTH_URL ?? "http://localhost:4000";

export const signUp = async (value: any) => {
  try {
    const url = `${AUTH_URL}/api/auth/sign-up/email`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // better-auth requires Origin header — not sent automatically in server actions
        Origin: process.env.FRONTEND_API ?? "http://localhost:3000",
      },
      body: JSON.stringify({
        name: value.name,
        email: value.email,
        password: value.password,
        role: value.role,
      }),
    });

    // Guard: if server returned HTML (error page), return error object instead of crashing
    // crashing off korar jonnno, jate kore frontend e error ta handle kora jay instead of breaking the whole app
    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      const text = await response.text();
      console.error("Non-JSON response body:", text.slice(0, 300));
      return {
        error: `Server returned ${response.status} — check if backend is running on ${AUTH_URL}`,
      };
    }

    const data = await response.json();
    console.log("Sign up response:", data);
    return data;
  } catch (error) {
    console.error("Error signing up:", error);
    return { error: "Could not connect to backend. Is it running?" };
  }
};
