"use client";

import { useState } from "react";
import { FileText, BookOpen, Presentation, Monitor, Award, ExternalLink } from "lucide-react";

const tabs = [
  { id: "abstract", label: "Abstract" },
  { id: "fullpaper", label: "Full Paper" },
  { id: "oral", label: "Oral" },
  { id: "poster", label: "Poster" },
  { id: "virtual", label: "Virtual" },
];

export default function CallForPapers() {
  const [activeTab, setActiveTab] = useState("abstract");
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

        {/* Tabs */}
        <div className="mb-10">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg shadow-gray-100/60 overflow-hidden">
            {/* Tab Headers */}
            <div className="flex flex-wrap border-b border-gray-200 bg-gray-50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 min-w-[120px] px-6 py-4 text-sm sm:text-base font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-white text-amber-600 border-b-2 border-amber-500"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8 sm:p-10">
              {/* Abstract Tab */}
              {activeTab === "abstract" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Abstract Submission
                    </h3>
                  </div>

                  <div className="space-y-4 text-black leading-relaxed">
                    <p>Submit your abstract now and be part of ICRAM&apos;26!</p>

                    <div className="flex flex-col gap-4 mt-6">
                      <a
                        href="https://forms.gle/fQdFAWxKxjysDNd98"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-gray-900 font-semibold rounded-lg hover:shadow-lg transition-all duration-200 w-fit"
                      >
                        <FileText className="w-5 h-5" />
                        Submit Your Abstract
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <a
                        href="https://docs.google.com/document/d/1_GwPu-Hc-ji3VRrXvukxUv3t697LFGAJ/edit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-400 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-200 w-fit"
                      >
                        <BookOpen className="w-5 h-5" />
                        Template for Abstract
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Full Paper Tab */}
              {activeTab === "fullpaper" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Full Paper Submission
                    </h3>
                  </div>

                  <div className="space-y-4 text-black leading-relaxed">
                    <p>
                      All submitted papers will be reviewed by the guest editorial team, and shortlisted papers will have the opportunity to undergo the standard review process of selected journals as part of the special issue.
                    </p>

                    <div className="bg-amber-50/80 border border-amber-200/60 rounded-xl p-6 mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">
                        Publication Partners
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                        {/* Nanotechnology Journal */}
                        <div className="flex flex-col items-center gap-4">
                          <a
                            href="https://iopscience.iop.org/journal/0957-4484"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <img
                              src="/images/publishers/nanotechnology.png"
                              alt="Nanotechnology Journal"
                              className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </a>
                          <a
                            href="https://iopscience.iop.org/journal/0957-4484"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-300 text-amber-700 text-xs font-medium rounded-lg hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
                          >
                            Visit Journal
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* Journal of The Electrochemical Society */}
                        <div className="flex flex-col items-center gap-4">
                          <a
                            href="https://iopscience.iop.org/journal/1945-7111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <img
                              src="/images/publishers/jes.png"
                              alt="Journal of The Electrochemical Society"
                              className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </a>
                          <a
                            href="https://iopscience.iop.org/journal/1945-7111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-300 text-amber-700 text-xs font-medium rounded-lg hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
                          >
                            Visit Journal
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>

                        {/* Nano Express */}
                        <div className="flex flex-col items-center gap-4">
                          <a
                            href="https://iopscience.iop.org/journal/2632-959X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                          >
                            <img
                              src="/images/publishers/nano-express.png"
                              alt="Nano Express"
                              className="h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                          </a>
                          <a
                            href="https://iopscience.iop.org/journal/2632-959X"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-amber-300 text-amber-700 text-xs font-medium rounded-lg hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
                          >
                            Visit Journal
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic text-center mt-4">
                        More will be updated...
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        Submission Guidelines
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2.5 text-gray-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>Full papers must follow prescribed format of the respective journals.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-gray-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>All submissions must be novel and original work, and not under consideration elsewhere.</span>
                        </li>
                        <li className="flex items-start gap-2.5 text-gray-700">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>Authors will be notified the status after preliminary review process.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Oral Tab */}
              {activeTab === "oral" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                      <Presentation className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Oral Presentation
                    </h3>
                  </div>

                  <div className="space-y-4 text-black leading-relaxed">
                    <p>
                      Present your research findings in person through a structured talk in 10 minutes. Ideal for sharing detailed methodologies and engaging directly with the audience.
                    </p>
                  </div>
                </div>
              )}

              {/* Poster Tab */}
              {activeTab === "poster" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Poster Presentation
                    </h3>
                  </div>

                  <div className="space-y-4 text-black leading-relaxed">
                    <p>
                      Showcase your work through a visually engaging poster display during dedicated sessions. A great opportunity for one-on-one discussions with fellow researchers.
                    </p>

                    <div className="mt-6">
                      <a
                        href="https://docs.google.com/presentation/d/1GkayAVAQVnUlYvWZNacUxhayl3uUNU5Z/edit?slide=id.p1#slide=id.p1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-amber-400 text-amber-700 font-semibold rounded-lg hover:bg-amber-50 transition-all duration-200 w-fit"
                      >
                        <BookOpen className="w-5 h-5" />
                        Template for Poster
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Virtual Tab */}
              {activeTab === "virtual" && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                      <Monitor className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      Virtual Presentation
                    </h3>
                  </div>

                  <div className="space-y-4 text-black leading-relaxed">
                    <p>
                      Participate remotely via our hybrid conference platform. Present your research through a live video session with real-time interaction and global accessibility.
                    </p>
                    <p className="text-gray-600 italic">
                      Google meet link will be shared
                    </p>
                  </div>
                </div>
              )}
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
      </div>
    </section>
  );
}
