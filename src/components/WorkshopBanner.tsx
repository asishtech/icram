"use client";

import { Sparkles } from "lucide-react";

export default function WorkshopBanner() {
  return (
    <div
      className="relative w-full overflow-hidden py-3 sm:py-4 md:py-5 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #0a1628 0%, #0f2240 30%, #1a3a6b 60%, #0f2240 100%)",
      }}
    >
      {/* Animated gradient overlay for extra shine */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)",
          animation: "shimmerOverlay 3s infinite",
        }}
      />

      {/* Clickable sliding container */}
      <a
        href="#registration"
        className="block cursor-pointer hover:opacity-90 transition-opacity"
        aria-label="Go to registration for free workshop"
      >
        <div className="relative flex items-center whitespace-nowrap">
          {/* First track - continuously scrolling */}
          <div className="inline-flex items-center animate-marquee-continuous">
            {[...Array(15)].map((_, i) => (
              <div key={`track1-${i}`} className="inline-flex items-center mx-6 sm:mx-8 md:mx-10 lg:mx-12">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#d4af37] mr-2 sm:mr-3 flex-shrink-0" />
                <span
                  className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-wide"
                  style={{
                    background: "linear-gradient(135deg, #e8d48b 0%, #d4af37 50%, #c8a951 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(212,175,55,0.3)",
                  }}
                >
                  🎉 Pre-Conference Workshop on 7th July (Offline) 🎉
                </span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#d4af37] ml-2 sm:ml-3 flex-shrink-0" />
              </div>
            ))}
          </div>

          {/* Second track - duplicate for seamless loop */}
          <div className="inline-flex items-center animate-marquee-continuous" aria-hidden="true">
            {[...Array(15)].map((_, i) => (
              <div key={`track2-${i}`} className="inline-flex items-center mx-6 sm:mx-8 md:mx-10 lg:mx-12">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#d4af37] mr-2 sm:mr-3 flex-shrink-0" />
                <span
                  className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-wide"
                  style={{
                    background: "linear-gradient(135deg, #e8d48b 0%, #d4af37 50%, #c8a951 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(212,175,55,0.3)",
                  }}
                >
                  🎉 Pre-Conference Workshop on 7th July (Offline) 🎉
                </span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#d4af37] ml-2 sm:ml-3 flex-shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </a>

      {/* Pulsing glow effect on top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px] sm:h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-pulse" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] sm:h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent animate-pulse" />
    </div>
  );
}
