"use client";

import { BookOpen } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-12 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="about-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#1e293b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            About the Conference
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
        </div>

        {/* Content card */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About the Conference
            </h3>
          </div>

          <div className="prose prose-gray max-w-none">
            <p className="text-black leading-relaxed mb-5 text-justify">
              Innovations in advanced materials research are crucial for modern
              scientific and technological development. The unique physical,
              chemical, and biological properties of materials play a vital role in
              improving the performance and efficiency of technologies used in
              industrial, medical, and environmental applications. Conferences
              provide an opportunity for researchers to present their latest
              findings, innovations, experimental results, and encourage technology
              transfer from laboratories to industries, thereby accelerating
              innovation, publication, and product development.
            </p>
            <p className="text-black leading-relaxed text-justify">
              ICRAM 26, the first International Conference on Recent Innovations in
              Advanced Materials, aims to provide a strong platform for exchanging
              scientific knowledge, discussing breakthroughs, exploring new
              developments, and fostering collaborations among national and
              international researchers, academicians, and industry professionals in
              the field of advanced materials. Research scholars, postdoctoral
              researchers, faculty members, and industrialists from around the world
              will present the latest advancements in their work, offering the
              scientific community a vibrant forum to recognize, harness, and
              celebrate the spirit of research and innovation. The conference
              particularly seeks to inspire young researchers and emerging
              scientists, encouraging cross-disciplinary engagement and the sharing
              of ideas across diverse areas of materials research. The technical sessions of the conference feature plenary, keynote, and
              invited lectures, along with oral and poster presentations delivered by
              eminent professors, scientists and scholars from across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
