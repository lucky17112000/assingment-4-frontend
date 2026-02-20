"use client";

import React from "react";

// Generate deterministic pseudo-random values based on index to avoid hydration mismatch
const getParticlePosition = (index: number) => {
  const positions = [
    { left: 10, top: 20, delay: 0.5, duration: 8 },
    { left: 85, top: 15, delay: 1.2, duration: 10 },
    { left: 25, top: 75, delay: 2.1, duration: 7 },
    { left: 70, top: 60, delay: 0.8, duration: 9 },
    { left: 45, top: 30, delay: 1.8, duration: 11 },
    { left: 90, top: 80, delay: 0.3, duration: 8.5 },
    { left: 15, top: 50, delay: 2.5, duration: 9.5 },
    { left: 60, top: 25, delay: 1.5, duration: 10.5 },
    { left: 35, top: 85, delay: 0.7, duration: 7.5 },
    { left: 80, top: 40, delay: 2.2, duration: 12 },
    { left: 20, top: 65, delay: 1.1, duration: 8.8 },
    { left: 95, top: 35, delay: 0.4, duration: 9.2 },
    { left: 50, top: 90, delay: 1.9, duration: 11.5 },
    { left: 5, top: 45, delay: 0.6, duration: 7.8 },
    { left: 75, top: 10, delay: 2.3, duration: 10.2 },
    { left: 40, top: 70, delay: 1.4, duration: 8.3 },
    { left: 65, top: 55, delay: 0.9, duration: 9.8 },
    { left: 30, top: 95, delay: 2.0, duration: 11.2 },
    { left: 55, top: 5, delay: 1.3, duration: 7.2 },
    { left: 12, top: 88, delay: 0.2, duration: 10.8 },
  ];
  return positions[index % positions.length];
};

const StartText = () => {
  return (
    <div className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-purple-50 to-blue-50 dark:from-slate-950 dark:via-purple-950 dark:to-blue-950 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 dark:bg-yellow-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-40 w-72 h-72 bg-pink-300 dark:bg-pink-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-blob animation-delay-6000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 space-y-8">
        {/* Decorative Top Line */}
        <div className="flex items-center justify-center gap-4 animate-fade-in-down">
          <div className="h-1 w-16 bg-linear-to-r from-transparent via-purple-500 to-purple-500 rounded-full animate-shimmer"></div>
          <div className="flex gap-2">
            <span className="inline-block w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
            <span className="inline-block w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-200"></span>
            <span className="inline-block w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-400"></span>
          </div>
          <div className="h-1 w-16 bg-linear-to-r from-purple-500 to-transparent rounded-full animate-shimmer animation-delay-1000"></div>
        </div>

        {/* Welcome Text with Multiple Animations */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-wide">
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-300 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              W
            </span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-350 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              e
            </span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-400 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              l
            </span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-450 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              c
            </span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-500 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              o
            </span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-550 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              m
            </span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-600 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              e
            </span>
            <span className="inline-block mx-2"></span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-650 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              t
            </span>
            <span className="inline-block opacity-0 animate-slide-in-left animation-delay-700 animate-fill-forwards bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              o
            </span>
          </h2>

          {/* Main Title - Tutor House */}
          <h1 className="relative">
            <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-tight">
              {/* Multi-layer gradient text effect */}
              <span className="relative inline-block animate-scale-in opacity-0 animation-delay-1000 animate-fill-forwards">
                <span className="absolute inset-0 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent blur-2xl opacity-50 animate-pulse"></span>
                <span className="relative bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300%">
                  Tutor House
                </span>
              </span>
            </span>

            {/* Glowing underline */}
            <div className="mt-4 flex justify-center animate-fade-in opacity-0 animation-delay-1500 animate-fill-forwards">
              <div className="h-2 w-64 bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full animate-pulse-glow shadow-2xl"></div>
            </div>
          </h1>

          {/* Subtitle with typing effect look */}
          <p className="text-lg md:text-2xl text-muted-foreground font-medium tracking-wide animate-fade-in-up opacity-0 animation-delay-2000 animate-fill-forwards">
            <span className="inline-block animate-color-shift">
              Your Journey to Excellence Starts Here
            </span>
            <span className="inline-block ml-2 animate-blink text-purple-600">
              ✨
            </span>
          </p>
        </div>

        {/* Decorative Bottom Elements */}
        <div className="flex items-center justify-center gap-8 animate-fade-in-up opacity-0 animation-delay-2500 animate-fill-forwards">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-linear-to-r from-purple-600 to-pink-600 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
          <div className="px-6 py-2 rounded-full border-2 border-purple-500/30 backdrop-blur-sm animate-border-glow">
            <span className="text-sm font-semibold bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Premium Learning Experience
            </span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-linear-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => {
            const particle = getParticlePosition(i);
            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-purple-500/30 rounded-full animate-float-particle"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StartText;
