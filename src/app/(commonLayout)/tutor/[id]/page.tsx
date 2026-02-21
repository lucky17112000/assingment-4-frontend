// "use client";
import { Button } from "@/components/ui/button";
import { getSingleTutor } from "@/service/tutor/user.services";
import React from "react";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  //   const as = "5cb5fc78-274c-4d1b-8371-5f150c37fbae";
  const id = (await params).id;
  const res = await getSingleTutor(id);

  // Simple hover card design with Tailwind
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        {/* Image Section */}
        <div className="relative">
          <img
            src={
              res?.result?.imageUrl ||
              "/images/photo-1554475901-4538ddfbccc2.avif"
            }
            alt="Tutor"
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>
        </div>
        {/* Content Section */}
        <div className="p-6">
          {/* Name */}
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
            {res?.result?.name}
          </h1>

          {/* Bio */}
          <p className="mt-3 text-gray-500 text-sm leading-relaxed italic">
            “{res?.result?.bio ?? res?.result?.description}”
          </p>

          {/* Divider */}
          <div className="my-5 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

          {/* Info Section */}
          <div className="space-y-3 text-sm">
            <p className="flex justify-between items-center">
              <span className="font-medium text-gray-400 uppercase tracking-wide text-xs">
                Availability
              </span>
              <span className="font-semibold text-gray-800">
                {res?.result?.availability}
              </span>
            </p>

            <p className="flex justify-between items-center">
              <span className="font-medium text-gray-400 uppercase tracking-wide text-xs">
                Experience
              </span>
              <span className="font-semibold text-gray-800">
                {res?.result?.experience}
              </span>
            </p>

            <p className="flex justify-between items-center">
              <span className="font-medium text-gray-400 uppercase tracking-wide text-xs">
                Hourly Rate
              </span>
              <span className="font-bold text-indigo-600 text-base">
                ${res?.result?.hourlyRate}
              </span>
            </p>

            <p className="flex justify-between items-center">
              <span className="font-medium text-gray-400 uppercase tracking-wide text-xs">
                Rating
              </span>
              <span className="font-semibold text-yellow-500">
                ⭐ {res?.result?.rating}
              </span>
            </p>

            <p className="flex justify-between items-center">
              <span className="font-medium text-gray-400 uppercase tracking-wide text-xs">
                Category
              </span>
              <span className="font-semibold text-gray-800">
                {res?.result?.category?.name}
              </span>
            </p>
          </div>

          {/* Button */}
          <button className="mt-6 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2.5 rounded-lg font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
