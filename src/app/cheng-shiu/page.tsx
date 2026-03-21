"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Microscope, ImageIcon, X } from "lucide-react";

export default function ChengShiuPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

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
          {/* Section heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              About CHENG SHIU
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          </div>

          {/* Content card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12 mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                CHENG SHIU University
              </h3>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-black leading-relaxed mb-5 text-justify">
                The Center for Environmental Toxin and Emerging-Contaminant Research (CENTER) at
                Cheng Shiu University is a large multidisciplinary research hub dedicated to addressing
                environmental pollution, food safety, public health, and emerging contaminant challenges
                through advanced analytical science and cross-sector collaboration. Transformed from the
                former Super Micro Mass Research and Technology Center and strengthened through the
                integration of the Biotechnology Research Center, CENTER now operates with around 130
                full-time, contract, and part-time personnel under an experienced leadership structure
                consisting of a director and two deputy directors who oversee strategic development, inter-
                unit coordination, laboratory operations, and administrative management. Guided by the
                United Nations Sustainable Development Goals and supported by decades of institutional
                commitment to sustainable environmental research since 1999, the center has built strong
                expertise in environmental testing, food and drug analysis, health risk assessment,
                renewable energy technology, and pollutant control. Its infrastructure spans multiple floors
                of the Administration Building and Green House and includes highly specialized laboratory
                spaces for dioxin analysis, clean-room operations, inorganic and organic analysis,
                environmental sampling, food and drug testing, and sports doping control. The center is
                equipped with an extensive suite of advanced instruments, including HRGC/MS, GC/MS-MS,
                LC/MS-MS, HPLC, ICP/MS, ICP/OES, ion chromatography, TOC analyzers, CVAFS, air sampling
                systems, groundwater and soil samplers, and marine monitoring devices, which support a
                broad spectrum of high-precision analytical applications. CENTER is recognized as a major
                qualified laboratory for Taiwan&#39;s Environmental Protection Administration, Food and Drug
                Administration, and Taiwan Accreditation Foundation, and it has demonstrated
                international excellence through top rankings in global dioxin proficiency testing and
                participation in major international research programs such as NASA&#39;s 7-SEAS mission. Its
                professional services cover persistent organic pollutants, dioxin monitoring, air quality
                surveillance, marine and terrestrial ecological investigation, soil and groundwater
                contamination assessment, environmental epidemiology, community health risk
                assessment, alternative energy studies, multi-pollutant air control technologies, food
                contaminant detection, animal drug analysis, and sports doping testing. Notably, it is the
                only laboratory in Taiwan authorized by the International Olympic Committee for sports
                doping detection, reflecting its national importance and technical credibility. Through its
                strong research base, advanced facilities, international collaborations, and mission to
                improve contaminant detection and risk evaluation, CENTER serves as a leading platform for
                developing innovative scientific solutions that protect environmental quality, food security,
                and human health in Taiwan and beyond.
              </p>
              <p className="text-black leading-relaxed">
                <a
                  href="https://csucenter.com/AboutUs/CenterIntro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 underline break-all"
                >
                  https://csucenter.com/AboutUs/CenterIntro
                </a>
              </p>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Campus Gallery
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox("/images/cheng-shiu/gallery1-new.jpg")}
              >
                <img
                  src="/images/cheng-shiu/gallery1-new.jpg"
                  alt="Cheng Shiu University Campus View 1"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full">
                    Click to view
                  </span>
                </div>
              </div>

              <div
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox("/images/cheng-shiu/gallery2-new.jpg")}
              >
                <img
                  src="/images/cheng-shiu/gallery2-new.jpg"
                  alt="Cheng Shiu University Campus View 2"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full">
                    Click to view
                  </span>
                </div>
              </div>

              <div
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox("/images/cheng-shiu/gallery3-new.jpg")}
              >
                <img
                  src="/images/cheng-shiu/gallery3-new.jpg"
                  alt="Cheng Shiu University Campus View 3"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full">
                    Click to view
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-10 h-10" />
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
