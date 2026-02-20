// export const getAllTutors = async () => {
//     try{}catch
// "use server";

import { env } from "@/env";

// }
// import { env } from "@/env";
const API_URL = env.API_URL;
export const getAllTutors = async () => {
  try {
    const response = await fetch(`${API_URL}/tutors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 }, // Revalidate every 10 seconds
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching tutors:", error);
    throw error;
  }
};
