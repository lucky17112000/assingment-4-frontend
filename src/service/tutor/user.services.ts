// Using process.env directly to avoid z.url() crash with localhost URLs
const API_URL = process.env.API_URL ?? "http://localhost:4000";

export const getAllTutors = async () => {
  try {
    const response = await fetch(`${API_URL}/api/tutors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // Revalidate every 10 seconds
    });

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      const text = await response.text();
      console.error("Non-JSON response:", text.slice(0, 300));
      return {
        error: `Server returned ${response.status}. Is backend running on ${API_URL}?`,
      };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    return { error: "Could not connect to backend." };
  }
};
