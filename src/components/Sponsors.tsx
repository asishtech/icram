"use client";

import Image from "next/image";

interface Sponsor {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const sponsors: Sponsor[] = [
  {
    name: "ANRF",
    logo: "/anrf-logo.jpg",
    width: 400,
    height: 160,
  },
  {
    name: "BRNS",
    logo: "/brns-logo.png",
    width: 380,
    height: 160,
  },
  {
    name: "CSIR",
    logo: "/csir-logo.png",
    width: 380,
    height: 160,
  },
  {
    name: "Thermo Fisher Scientific",
    logo: "/images/image30.png",
    width: 400,
    height: 160,
  },
  {
    name: "BioLogic",
    logo: "/biologic-logo.png",
    width: 400,
    height: 160,
  },
  {
    name: "Zeiss",
    logo: "/zeiss-logo.png",
    width: 380,
    height: 160,
  },
  {
    name: "SRL",
    logo: "/srl-logo.png",
    width: 380,
    height: 160,
  },
  {
    name: "Metrohm",
    logo: "/metrohm-logo.jpeg",
    width: 380,
    height: 160,
  },
  {
    name: "Malvern Panalytical",
    logo: "/malvern-logo.png",
    width: 380,
    height: 160,
  },
  {
    name: "Sinsil International",
    logo: "/sinsil-full-logo.webp",
    width: 400,
    height: 160,
  },
  {
    name: "Biogenuix",
    logo: "/biogenuix-logo.png",
    width: 380,
    height: 160,
  },
  {
    name: "TCI",
    logo: "/TCI.png",
    width: 380,
    height: 160,
  },
  {
    name: "Aditya Scientific",
    logo: "/images/image31.png",
    width: 380,
    height: 160,
  },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative pt-2 pb-16 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="sponsors-pattern"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0v48M0 24h48"
                stroke="#1e293b"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sponsors-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Our Sponsors
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
            A big THANK YOU to our amazing sponsors for the generous support.
          </p>
        </div>

        {/* Sponsors grid */}
        <div className="flex flex-col gap-8 items-center w-full max-w-5xl mx-auto">
          {/* First row - 3 logos (smaller) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            {sponsors.slice(0, 3).map((sponsor, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-100/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-200 w-full h-44 flex items-center justify-center"
              >
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full flex items-center justify-center p-1">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second row - 5 logos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {sponsors.slice(3, 8).map((sponsor, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-100/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-200 w-full h-44 flex items-center justify-center"
              >
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full flex items-center justify-center p-1">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Third row - 5 logos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
            {sponsors.slice(8, 13).map((sponsor, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-100/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-amber-200 w-full h-44 flex items-center justify-center"
              >
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative w-full h-full flex items-center justify-center p-1">
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={sponsor.width}
                    height={sponsor.height}
                    className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
