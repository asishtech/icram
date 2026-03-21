"use client";

import { FileText, BookOpen, Presentation, Monitor, Award, ExternalLink } from "lucide-react";

const presentationModes = [
  {
    icon: Presentation,
    title: "Oral Presentation",
    description:
      "Present your research findings in person through a structured talk in 10 minutes. Ideal for sharing detailed methodologies and engaging directly with the audience.",
  },
  {
    icon: FileText,
    title: "Poster Presentation",
    description:
      "Showcase your work through a visually engaging poster display during dedicated sessions. A great opportunity for one-on-one discussions with fellow researchers.",
  },
  {
    icon: Monitor,
    title: "Virtual Presentation",
    description:
      "Participate remotely via our hybrid conference platform. Present your research through a live video session with real-time interaction and global accessibility.",
  },
];

export default function CallForPapers() {
  return (
    <section id="call-for-papers" className="relative py-24 overflow-hidden" style={{ backgroundColor: "#f8fafc" }}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="cfp-grid"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#1e293b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cfp-grid)" />
        </svg>
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <p className="text-amber-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Share Your Research
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Call for Papers
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <div className="w-3 h-3 rotate-45 border-2 border-amber-400" />
            <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            We invite researchers, academicians, and industry professionals to submit original
            contributions to ICRAM 2026 across all conference themes.
          </p>
        </div>

        {/* Publication Partners */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Publication Partners
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                <BookOpen className="w-8 h-8 text-amber-400" />
              </div>
              <p className="text-gray-500 text-base font-medium mb-1">
                Will be updated soon
              </p>
              <p className="text-gray-400 text-sm">
                Details about publication partners and journals will be announced shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Submission Information */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Submission Information
              </h3>
            </div>
            <div className="text-black leading-relaxed space-y-4">
              <p>
                Authors are invited to submit original and unpublished research papers aligned with
                the conference themes of ICRAM 2026. Submissions should present novel findings,
                innovative methodologies, or significant advancements in the field of advanced
                materials research.
              </p>
              <p>
                All submitted papers will undergo a rigorous peer-review process by the scientific
                committee. Accepted papers will be presented at the conference through oral, poster,
                or virtual presentations, and selected papers may be recommended for publication in
                reputed journals.
              </p>
              <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-5 mt-6">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                  Submission Guidelines
                </h4>
                <ul className="space-y-2">
                  {[
                    "Abstracts should be concise, clearly stating the objective, methodology, results, and conclusions.",
                    "Full papers must follow the prescribed template and formatting guidelines.",
                    "All submissions must be original work and not under consideration elsewhere.",
                    "Authors will be notified of acceptance after the review process is completed.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Research Awards */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Research Awards
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center py-10 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <p className="text-gray-500 text-base font-medium mb-1">
                Details will be updated soon
              </p>
              <p className="text-gray-400 text-sm max-w-md text-center">
                Information about best paper awards, young researcher awards, and other recognitions
                will be announced shortly.
              </p>
            </div>
          </div>
        </div>

        {/* Presentation Modes */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Presentation Modes
            </h3>
            <p className="mt-2 text-gray-500 text-sm sm:text-base">
              ICRAM 2026 is a hybrid conference offering multiple ways to present your research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {presentationModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-200/60"
                >
                  {/* Icon */}
                  <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {mode.title}
                  </h4>

                  {/* Divider */}
                  <div className="w-10 h-[2px] bg-gradient-to-r from-amber-400 to-transparent mb-3" />

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {mode.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://forms.gle/fQdFAWxKxjysDNd98"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(200,169,81,0.35)] sm:text-base"
            style={{
              background: "linear-gradient(135deg, #c8a951, #e8d48b)",
            }}
          >
            <span className="relative z-10 flex items-center gap-2.5 text-gray-900">
              <FileText className="w-5 h-5" />
              Submit Your Abstract
              <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
            {/* Hover shimmer overlay */}
            <span
              className="absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/20 transition-transform duration-500 group-hover:translate-x-full"
              aria-hidden
            />
          </a>
          <p className="mt-4 text-sm text-gray-400">
            You will be redirected to the abstract submission form
          </p>
        </div>
      </div>
    </section>
  );
}
