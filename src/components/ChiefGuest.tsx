"use client";

import { GraduationCap, MapPin } from "lucide-react";

export default function ChiefGuest() {
  const chiefGuest = {
    name: "Dr. Juan Carlos Hidalgo Cuéllar",
    title: "Director, Institute of Physical Sciences (ICF)",
    institution: "National Autonomous University of Mexico (UNAM)",
    country: "Mexico",
    flag: "🇲🇽",
    image: "/images/advisory/juan-carlos-hidalgo.jpeg",
  };

  return (
    <section id="chief-guest" className="py-20 bg-gradient-to-br from-primary/5 via-blue/5 to-teal/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Distinguished Guest
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            Chief Guest
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            We are honored to welcome our esteemed Chief Guest for ICRAM 2026.
          </p>
        </div>

        {/* Chief Guest Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200/60 hover-card">
            {/* Top accent bar */}
            <div className="h-2 w-full bg-gradient-to-r from-gold via-accent to-accent-light" />

            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                {/* Chief Guest Image */}
                <div className="flex-shrink-0">
                  <div className="relative group">
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gold/30 group-hover:ring-gold/50 transition-all duration-300">
                      <img
                        src={chiefGuest.image}
                        alt={chiefGuest.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="eager"
                      />
                    </div>
                  </div>
                </div>

                {/* Chief Guest Info */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/10 to-accent/10 rounded-full mb-4">
                      <span className="text-sm font-bold text-primary uppercase tracking-wide">Chief Guest</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 leading-tight">
                      {chiefGuest.name}
                    </h3>

                    <p className="text-lg text-gray-700 font-semibold mb-4">
                      {chiefGuest.title}
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 mb-4">
                      <div className="flex items-center gap-2 text-base text-gray-600">
                        <GraduationCap className="w-5 h-5 text-blue" />
                        <span>{chiefGuest.institution}</span>
                      </div>
                      <div className="hidden sm:block w-1 h-1 rounded-full bg-gray-400" />
                      <div className="flex items-center gap-2 text-base text-gray-600">
                        <MapPin className="w-5 h-5 text-gold" />
                        <span>{chiefGuest.flag} {chiefGuest.country}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-blue/5 rounded-xl p-5 border border-primary/10">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify">
                      Dr. Juan Carlos Hidalgo Cuéllar serves as the Director of the Institute of Physical Sciences (ICF)
                      at the National Autonomous University of Mexico (UNAM). His distinguished leadership and contributions
                      to the field of physical sciences have made him a prominent figure in the international research community.
                      We are deeply honored to have him grace ICRAM 2026 as our Chief Guest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
