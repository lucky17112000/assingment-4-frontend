import TutorCard from "@/components/tutor/tutorrCard";
import { getAllTutors } from "@/service/tutor/user.services";
import React from "react";

const TutorPage = async () => {
  const res = await getAllTutors();
  console.log(res);

  // Adjust `res.data` to match your actual API response shape
  // e.g. if API returns plain array, use `res` directly instead of `res.data`
  const tutors = res?.data ?? res ?? [];

  return (
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
  );
};

export default TutorPage;
