"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, ImageIcon, X } from "lucide-react";

export default function IcfUnamPage() {
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
              About ICF-UNAM
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          </div>

          {/* Content card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12 mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                UNAM Institute of Physical Sciences (ICF)
              </h3>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-black leading-relaxed mb-5 text-justify">
                Created by agreement of the University Council on September 29, 2006, the UNAM Institute of Physical Sciences (ICF) was preceded by the Center for Physical Sciences (CCF), established on September 22, 1998, and since 1985, at the Cuernavaca Unit of the Physics Institute.
              </p>
              <p className="text-black leading-relaxed mb-5 text-justify">
                <strong>Mission:</strong> To create cutting-edge knowledge on original topics of high relevance in the physical sciences, train high-level human resources, disseminate research productivity, and engage in areas of innovation and technological development.
              </p>
              <p className="text-black leading-relaxed mb-5 text-justify">
                <strong>Vision:</strong> To be a hub for the development of scientific and technological excellence at the service of Mexican and Ibero-American society through the creation of fundamental knowledge, the training of highly qualified human resources, and the dissemination of knowledge.
              </p>
              <p className="text-black leading-relaxed text-justify">
                <strong>Research areas (informal departments):</strong> Biophysics and Materials Science (BiCiM), Nonlinear Phenomena and Complexity (FeNoLyC), Experimental Atomic, Molecular, and Optical Physics (FAMOE), Theoretical and Computational Physics (FiTyC).
              </p>
              <p className="text-black leading-relaxed">
                <a
                  href="https://www.fis.unam.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 underline break-all"
                >
                  https://www.fis.unam.mx/
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox("/images/icf-unam/ICF-UNAM1.jpeg")}
              >
                <img
                  src="/images/icf-unam/ICF-UNAM1.jpeg"
                  alt="ICF-UNAM Campus View 1"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full">
                    Click to view
                  </span>
                </div>
              </div>

              <div
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox("/images/icf-unam/ICF-UNAM.jpeg")}
              >
                <img
                  src="/images/icf-unam/ICF-UNAM.jpeg"
                  alt="ICF-UNAM Campus View 2"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
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
