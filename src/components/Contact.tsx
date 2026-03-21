"use client";

import { Mail, MapPin, User } from "lucide-react";

export default function Contact() {

  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="contact-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#1e293b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Contact Us
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          <p className="mt-4 text-gray-500 max-w-4xl mx-auto text-base sm:text-lg">
            Have questions about ICRAM 2026? Reach out to us and we&apos;ll be
            happy to help.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Column: Contact Information */}
          <div className="flex flex-col gap-8">
            {/* Convenors */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Conference Convenors
                </h3>
              </div>
              <div className="space-y-4 pl-1">
                <div>
                  <p className="text-black font-medium">
                    Dr. Pratheep Kumar -
                  </p>
                  <a
                    href="tel:+919894241479"
                    className="text-black hover:text-[#c8a951] transition-colors duration-200 text-sm"
                  >
                    +91 98942 41479
                  </a>
                </div>
                <div>
                  <p className="text-black font-medium">
                    Dr. Triveni Rajashekhar Mandlimath -
                  </p>
                  <a
                    href="tel:+918144266474"
                    className="text-black hover:text-[#c8a951] transition-colors duration-200 text-sm"
                  >
                    +91 81442 66474
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              </div>
              <div className="space-y-2 pl-1">
                <a
                  href="mailto:icram@vitap.ac.in"
                  className="block text-black hover:text-[#c8a951] transition-colors duration-200 font-medium"
                >
                  icram@vitap.ac.in
                </a>
                <a
                  href="mailto:pratheep.kumar@vitap.ac.in"
                  className="block text-black hover:text-[#c8a951] transition-colors duration-200"
                >
                  pratheep.kumar@vitap.ac.in
                </a>
                <a
                  href="mailto:triveni.mandlimath@vitap.ac.in"
                  className="block text-black hover:text-[#c8a951] transition-colors duration-200"
                >
                  triveni.mandlimath@vitap.ac.in
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Venue Address */}
          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100/60 p-6 sm:p-8 lg:p-10 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                Conference Venue
              </h3>
            </div>

            {/* Google Maps Embed */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=VIT-AP+University,Amaravati,Andhra+Pradesh&destination_place_id=ChIJA3p3p1r7NToRTRPJybz_ZDA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 block mb-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group min-h-[300px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.644284!2d80.49810741487654!3d16.493700088650985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb5ae7770a03%3A0x3064cfa69c9c134d!2sVIT-AP%20University!5e0!3m2!1sen!2sin!4v1647856789123!5m2!1sen!2sin&q=VIT-AP+University"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VIT-AP University Location"
                className="absolute inset-0 w-full h-full pointer-events-none"
              />
              <div className="absolute inset-0 bg-transparent group-hover:ring-2 group-hover:ring-[#c8a951]/50 rounded-xl transition-all duration-200" />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="text-sm font-semibold text-[#c8a951] flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Click for Directions
                </span>
              </div>
            </a>

            <div className="mt-auto bg-gray-50 rounded-xl p-5 border border-gray-100">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=VIT-AP+University,Amaravati,Andhra+Pradesh&destination_place_id=ChIJA3p3p1r7NToRTRPJybz_ZDA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 text-black hover:text-[#c8a951] transition-colors duration-200 font-medium group mb-4"
              >
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-[#c8a951]/20 transition-colors shadow-sm">
                  <MapPin className="w-5 h-5 text-[#c8a951]" />
                </div>
                <div>
                  <span className="block text-lg font-bold">VIT-AP University</span>
                  <span className="block text-gray-500 text-sm mt-0.5">Amaravati, Andhra Pradesh, India</span>
                  <span className="inline-block text-sm text-[#c8a951] font-semibold group-hover:translate-x-1 transition-transform mt-1.5">Get Directions →</span>
                </div>
              </a>
              <div className="mt-5 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex gap-2 items-start leading-snug">
                  <span className="text-[#c8a951] font-bold shrink-0 mt-0.5">*</span>
                  <span>Accommodation for participants is available on campus on a minimal charge basis.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
