"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function BrochurePage() {
  const [pdfLoaded, setPdfLoaded] = useState(false);

  // Preload PDF when component mounts for faster loading
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/ICRAM26-Brochure.pdf';
    link.as = 'document';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    // Reset loading state when component mounts
    setPdfLoaded(false);

    // Set a maximum timeout to hide loading animation
    const maxLoadTimeout = setTimeout(() => {
      setPdfLoaded(true);
    }, 4000); // Maximum 4 seconds loading time to ensure PDF renders

    return () => clearTimeout(maxLoadTimeout);
  }, []);

  return (
    <main>
      <Navbar />
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="brochure-grid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="#1e293b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#brochure-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Conference Brochure
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          </div>

          {/* Brochure Content */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 overflow-hidden">
            {/* Header Section */}
            <div className="px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      ICRAM&apos;26 Brochure
                    </h3>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                  <a
                    href="/ICRAM26-Brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:shadow flex-1 sm:flex-initial text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span className="hidden sm:inline">Open in New Tab</span>
                    <span className="sm:hidden">Open</span>
                  </a>
                  <a
                    href="/ICRAM26-Brochure.pdf"
                    download="ICRAM26-Brochure.pdf"
                    className="inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-medium rounded-lg shadow-md shadow-amber-200/40 hover:shadow-lg hover:scale-105 transition-all duration-200 flex-1 sm:flex-initial text-sm"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    <span>Download</span>
                  </a>
                </div>
              </div>
            </div>

            {/* PDF Viewer Container */}
            <div className="relative bg-white">
              {/* Loading Overlay */}
              {!pdfLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white z-10 min-h-[500px] animate-fadeIn">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 border-4 border-gray-200 border-t-amber-400 rounded-full animate-spin"></div>
                      <FileText className="w-6 h-6 text-amber-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Loading brochure...</p>
                  </div>
                </div>
              )}

              {/* PDF Viewer */}
              <div className="relative bg-white">
                <iframe
                  src="/ICRAM26-Brochure.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                  className="w-full h-[500px] sm:h-[700px] md:h-[800px] lg:h-[900px] border-0 bg-white"
                  title="ICRAM 26 Brochure"
                  onLoad={() => {
                    // Add a delay to ensure PDF is fully rendered before hiding loading
                    setTimeout(() => {
                      setPdfLoaded(true);
                    }, 1000); // Wait 1 second after iframe loads for PDF to render
                  }}
                />
              </div>

              {/* Info Bar */}
              <div className="px-4 sm:px-8 py-3 sm:py-4 border-t border-gray-200 bg-white">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Use scroll to navigate through pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-400 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-medium">PDF Format</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
