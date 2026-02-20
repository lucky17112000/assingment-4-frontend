import Image from "next/image";
import { Star } from "lucide-react";

type TutorCardProps = {
  image: string;
  name: string;
  bio: string;
  rating: number; // e.g. 4.5
  hourlyRate: number; // e.g. 25
};

// First image from /public/images used as fallback
const DEFAULT_IMAGE = "/images/istockphoto-2247792230-2048x2048.webp";

export default function TutorCard({
  image,
  name,
  bio,
  rating,
  hourlyRate,
}: TutorCardProps) {
  // Clamp rating between 0–5
  const clampedRating = Math.min(5, Math.max(0, rating));
  const fullStars = Math.floor(clampedRating);
  const halfStar = clampedRating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl transition-shadow duration-300 w-72">
      {/* Image area */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image && image.trim() !== "" ? image : DEFAULT_IMAGE}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hourly rate badge */}
        <div className="absolute top-3 right-3 bg-indigo-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow">
          ${hourlyRate}/hr
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5">
        {/* Name */}
        <h3 className="text-xl font-bold text-zinc-800 dark:text-white truncate">
          {name}
        </h3>

        {/* Bio */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed">
          {bio}
        </p>

        {/* Divider */}
        <div className="border-t border-zinc-100 dark:border-zinc-700" />

        {/* Rating row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {/* Full stars */}
            {Array.from({ length: fullStars }).map((_, i) => (
              <Star
                key={`full-${i}`}
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
            {/* Half star */}
            {halfStar && (
              <span className="relative inline-block w-4 h-4">
                <Star
                  size={16}
                  className="text-zinc-300 fill-zinc-300 absolute inset-0"
                />
                <span className="absolute inset-0 overflow-hidden w-1/2">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                </span>
              </span>
            )}
            {/* Empty stars */}
            {Array.from({ length: emptyStars }).map((_, i) => (
              <Star
                key={`empty-${i}`}
                size={16}
                className="text-zinc-300 fill-zinc-300"
              />
            ))}
            <span className="ml-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
              {clampedRating.toFixed(1)}
            </span>
          </div>

          {/* CTA button */}
          <button className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline transition">
            View Detailes →
          </button>
        </div>
      </div>
    </div>
  );
}
