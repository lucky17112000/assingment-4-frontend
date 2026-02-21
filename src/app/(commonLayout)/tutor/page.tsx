import PaginationControles from "@/components/shared/pagination/paginationControles";
import TutorCard from "@/components/tutor/tutorrCard";
import { getAllTutors } from "@/service/tutor/user.services";
import React from "react";

const TutorPage = async () => {
  const res = await getAllTutors();
  // console.log(res);

  // Adjust `res.data` to match your actual API response shape
  // e.g. if API returns plain array, use `res` directly instead of `res.data`
  const tutors = res?.data ?? res ?? [];

  // console.log(res.pagination);
  const pagination = res?.pagination ?? { page: 1, totalPages: 1 };
  // console.log(pagination);

  return (
    <div className="min-h-screen pb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {tutors.map((tutor: any) => (
          <TutorCard
            key={tutor._id ?? tutor.id}
            image={tutor.image ?? tutor.photo ?? tutor.profileImage ?? ""}
            name={tutor.name}
            bio={tutor.bio ?? tutor.description ?? ""}
            rating={tutor.rating ?? 0}
            hourlyRate={tutor.hourlyRate ?? tutor.rate ?? 0}
          />
        ))}
      </div>

      {/* Fixed pagination at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-t border-zinc-200 dark:border-zinc-800 py-3">
        <PaginationControles meta={pagination} />
      </div>
    </div>
  );
};

export default TutorPage;
