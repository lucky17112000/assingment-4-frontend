// export const getUser = async () => {
//   const res = await getUser();
// };

"use server";

import { getCategories } from "@/service/admin";
import { cancelBooking, completeBooking } from "@/service/booking";

export const getc = async () => {
  return await getCategories();
};

export const cancelSt = async (id: string) => {
  return await cancelBooking(id);
};

export const completeSt = async (id: string) => {
  return await completeBooking(id);
};
