"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";

export function CarouselSpacing() {
  // MODIFIED: add your own image paths here inside the array (place images in the /public folder)
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
  ];

  return (
    // MODIFIED: w-full with no max-w so it stretches full width left to right
    <Carousel
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false, // MODIFIED: don't stop when user clicks
          stopOnMouseEnter: false, // MODIFIED: don't pause on hover
        }),
      ]}
      className="w-full  py-10"
    >
      <CarouselContent className="-ml-1">
        {/* MODIFIED: maps over images array instead of numbers */}
        {images.map((src, index) => (
          // MODIFIED: basis-1/5 shows 5 cards at a time so the remaining 5 can slide in
          <CarouselItem key={index} className="basis-1/5 pl-1">
            <div className="p-1">
              <Card>
                {/* MODIFIED: replaced number with image */}
                <CardContent className="flex min-h-[200px] items-center justify-center p-0 overflow-hidden">
                  <img
                    src={src}
                    alt={`slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
