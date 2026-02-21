// Using process.env directly to avoid z.url() crash with localhost URLs
const API_URL = process.env.API_URL ?? "http://localhost:4000/";

export const getAllTutors = async () => {
  try {
    // ✅ Don't add /api again, it's already in API_URL
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
    console.log("getAllTutors response:", data); // ✅ Debug log
    return data;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    return { error: "Could not connect to backend." };
  }
};

export const getSingleTutor = async (id: string) => {
  try {
    const url = `${API_URL}/api/tutors/${id}`;
    console.log("🔍 Fetching single tutor from URL:", url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // Revalidate every 10 seconds
    });

    console.log("📡 Response status:", response.status);
    console.log("📡 Response URL:", response.url);

    const contentType = response.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      const text = await response.text();
      console.error("❌ Non-JSON response:", text.slice(0, 300));
      return {
        error: `Server returned ${response.status}. Backend running?`,
      };
    }
    const data = await response.json();
    console.log("✅ Single tutor data received:", data);
    return data;
  } catch (error) {
    console.error("❌ Error fetching single tutor:", error);
    return { error: "Could not connect to backend." };
  }
};
