"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, MessageSquare } from "lucide-react";

export default function ConferencePage() {
  return (
    <main>
      <Navbar />
      <section className="relative py-32 bg-white overflow-hidden">
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
          {/* About the Conference Section */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              About the Conference
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          </div>

          {/* About Content Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12 mb-12">
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

          {/* Welcome Message Section */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Welcome to ICRAM&apos;26
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          </div>

          {/* Welcome Message Content */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Welcome Message
              </h3>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-black leading-relaxed text-justify mb-4">
                Dear Materials Science Enthusiasts,
              </p>
              <p className="text-black leading-relaxed text-justify mb-4">
                Greetings and welcome to the Department of Chemistry at VIT-AP University, Andhra Pradesh, India.
              </p>
              <p className="text-black leading-relaxed text-justify mb-4">
                We are delighted to invite you to participate in the <strong>First International Conference on Recent Innovations in Advanced Materials (ICRAM&apos;26)</strong> to be held at <strong>VIT-AP University, Andhra Pradesh, India</strong>, from <strong>July 8-10, 2026</strong>.
              </p>
              <p className="text-black leading-relaxed text-justify mb-4">
                ICRAM&apos;26 aims to bring together scientists, researchers, academicians, and industry experts from across the globe to share their latest research findings and innovations in the field of advanced materials. The conference will provide an excellent platform for exchanging ideas, fostering interdisciplinary collaborations, and discussing emerging trends that are shaping the future of materials science and technology.
              </p>
              <p className="text-black leading-relaxed text-justify mb-4">
                The conference will feature plenary lectures, keynote lectures, invited talks, and other technical sessions covering a wide range of themes including <strong>Materials Design, Synthesis, and Properties; Energy and Sustainable Materials; High Performance and Functional Materials; Nanomaterials and Nanotechnology; Soft and Biomaterials; and Computational and Data-Driven Materials Design.</strong>
              </p>
              <p className="text-black leading-relaxed text-justify mb-4">
                We warmly welcome researchers, academicians, industry professionals, and students to contribute their work and engage in meaningful scientific discussions. ICRAM&apos;26 promises to be a valuable opportunity to enhance scientific knowledge, build professional networks, and explore collaborative research opportunities.
              </p>
              <p className="text-black leading-relaxed text-justify mb-8">
                We look forward to your active participation and to welcoming you to <strong>VIT-AP University</strong> for an inspiring and enriching conference experience.
              </p>
              <p className="text-black leading-relaxed text-justify">
                Warm regards,<br />
                Organizing Committee<br />
                ICRAM&apos;26
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
