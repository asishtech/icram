"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const target = new Date("2026-07-08T00:00:00+05:30").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // This is a hydration fix - set mounted and initial time after hydration
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #0f2240 40%, #1a3a6b 100%)",
      }}
    >
      {/* ---------- video background ---------- */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        >
          <source src="/videos/atoms.mov" type="video/mp4" />
        </video>
        {/* Gradient overlay to blend video with background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(10,22,40,0.7) 0%, rgba(15,34,64,0.6) 40%, rgba(26,58,107,0.5) 100%)",
          }}
        />
      </div>

      {/* radial glow decorations */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(200,169,81,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-60 -right-60 h-[700px] w-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(26,58,107,0.2) 0%, transparent 70%)",
        }}
      />

      {/* ---------- content ---------- */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-24 text-center">
        {/* VIT-AP University branding */}
        <p
          className={`mb-2 text-sm font-extrabold uppercase tracking-[0.25em] text-gray-300 transition-all duration-700 ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
        >
          VIT-AP University, Amaravati
        </p>

        {/* Partner logos text */}
        <p
          className={`mb-6 max-w-2xl text-xs leading-relaxed tracking-wide text-gray-300 font-bold transition-all delay-100 duration-700 sm:text-sm ${mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
        >
          In Association with ICF-UNAM, Mexico &amp; Cheng Shiu University, Taiwan
        </p>

        {/* Conference title */}
        <h2
          className={`mb-3 max-w-4xl text-xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-4xl transition-all delay-200 duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          style={{
            background: "linear-gradient(135deg, #F39C42 0%, #E8A851 20%, #D4B464 40%, #A4C9D9 70%, #7BC5E8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 40px rgba(243,156,66,0.3)",
            letterSpacing: "0.02em",
          }}
        >
          <span className="block sm:inline">First International Conference on</span>
          <br className="hidden sm:block" />
          <span className="block sm:inline font-extrabold">
            Recent Innovations in Advanced Materials
          </span>
        </h2>

        {/* Main ICRAM logo */}
        <h1
          className={`mb-3 transition-all delay-300 duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
        >
          <img
            src="/images/icram-logo-new.png"
            alt="ICRAM '26 - International Conference on Recent Innovations in Advanced Materials"
            className="h-24 w-auto sm:h-32 md:h-40 lg:h-48 object-contain"
          />
        </h1>

        {/* Tagline */}
        <p
          className={`mb-6 text-lg font-bold leading-tight sm:text-xl md:text-2xl transition-all delay-[350ms] duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          style={{
            background: "linear-gradient(135deg, #F39C42 0%, #E8A851 20%, #D4B464 40%, #A4C9D9 70%, #7BC5E8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "0 0 40px rgba(243,156,66,0.3)",
            letterSpacing: "0.02em",
            marginLeft: "1%",
          }}
        >
          Innovate Materials, Transform the Future
        </p>

        {/* Date & Venue */}
        <div
          className={`mb-6 flex flex-col items-center gap-1 transition-all delay-[400ms] duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
        >
          <span className="text-sm font-semibold tracking-widest text-accent-light sm:text-base">
            July 8&ndash;10, 2026 &nbsp;|&nbsp; Hybrid Mode
          </span>
          <span className="text-xs leading-relaxed tracking-wide text-gray-300 font-bold sm:text-sm">
            VIT-AP University, Amaravati, Andhra Pradesh, India
          </span>
        </div>

        {/* ---------- countdown timer ---------- */}
        <div
          className={`mb-8 flex flex-wrap justify-center gap-3 sm:gap-5 transition-all delay-500 duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
        >
          {(
            [
              ["days", timeLeft.days],
              ["hours", timeLeft.hours],
              ["minutes", timeLeft.minutes],
              ["seconds", timeLeft.seconds],
            ] as const
          ).map(([label, value]) => (
            <div
              key={label}
              className="glass countdown-box flex h-20 w-20 flex-col items-center justify-center rounded-xl sm:h-24 sm:w-24"
            >
              <span
                className="text-2xl font-bold tabular-nums text-white sm:text-3xl"
                suppressHydrationWarning
              >
                {String(value).padStart(2, "0")}
              </span>
              <span className="mt-0.5 text-[10px] uppercase tracking-widest text-gold/70 sm:text-xs">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ---------- CTA buttons ---------- */}
        <div
          className={`flex flex-wrap justify-center gap-4 transition-all delay-[600ms] duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
        >
          <a
            href="#registration"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wider text-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,169,81,0.4)] sm:px-10 sm:py-3.5 sm:text-base"
            style={{
              background: "linear-gradient(135deg, #c8a951, #e8d48b)",
            }}
          >
            <span className="relative z-10">Register Now</span>
            {/* hover shimmer overlay */}
            <span
              className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
              aria-hidden
            />
          </a>

          <a
            href="https://forms.gle/fQdFAWxKxjysDNd98"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border-2 border-gold/60 px-8 py-3 text-sm font-bold uppercase tracking-wider text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,169,81,0.2)] sm:px-10 sm:py-3.5 sm:text-base"
          >
            Submit Abstract
          </a>
        </div>
      </div>

      {/* ---------- scroll-down indicator ---------- */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-all delay-700 duration-700 ${mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
          Scroll Down
        </span>
        <ChevronDown className="h-5 w-5 animate-bounce text-gold/60" />
      </div>
    </section>
  );
}
