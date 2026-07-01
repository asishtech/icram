"use client";

import { useState, useEffect } from "react";
import {
  Plane,
  TrainFront,
  Bus,
  MapPin,
  Mountain,
  Landmark,
  Church,
  Clock,
  Navigation,
  Camera,
  X,
  ZoomIn,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const travelOptions = [
  {
    icon: Plane,
    from: "Vijayawada International Airport",
    to: "VIT-AP University",
    distance: "43 km",
    duration: "1 - 1.5 hours",
    mode: "By Car / Cab",
    color: "from-sky-500 to-blue-600",
    bgLight: "bg-sky-50",
    borderColor: "border-sky-200",
    iconColor: "text-sky-600",
    image: "/images/airport-route.png",
  },
  {
    icon: TrainFront,
    from: "Vijayawada Railway Station",
    to: "VIT-AP University",
    distance: "18 - 19 km",
    duration: "35 - 50 minutes",
    mode: "By Car / Cab",
    color: "from-emerald-500 to-green-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-200",
    iconColor: "text-emerald-600",
    image: "/images/railway-route.png",
  },
  {
    icon: Bus,
    from: "Vijayawada Bus Stand",
    to: "VIT-AP University",
    distance: "18 km",
    duration: "30 - 35 minutes",
    mode: "By Car / Cab / Auto",
    color: "from-amber-500 to-yellow-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600",
    image: "/images/bus-route.png",
  },
];

const touristAttractions = [
  {
    icon: Landmark,
    name: "Prakasam Barrage",
    description:
      "A major 1,223.5-metre-long structure across the Krishna River with 70 gates, vital for irrigating over 1.2 million acres of fertile land.",
    gradient: "from-blue-600 to-cyan-500",
    image: "/images/prakasam-barrage.png",
  },
  {
    icon: Church,
    name: "Kanaka Durga Temple",
    description:
      "A prominent Hindu temple situated atop the Indrakeeladri hill, a major pilgrimage centre famous for its grand Navaratri celebrations.",
    gradient: "from-orange-500 to-red-500",
    image: "/images/kanaka-durga.png",
  },
  {
    icon: Mountain,
    name: "Undavalli Caves",
    description:
      "Ancient rock-cut monuments dating from the 4th-5th centuries CE, showcasing remarkable Gupta-period architecture and craftsmanship.",
    gradient: "from-emerald-500 to-teal-500",
    image: "/images/undavalli-caves.png",
  },
  {
    icon: MapPin,
    name: "Bhavani Island",
    description:
      "A scenic river island on the Krishna River and one of the largest river islands in India, serving as a major recreational hub.",
    gradient: "from-teal-500 to-green-500",
    image: "/images/bhavani-island.png",
  },
  {
    icon: Landmark,
    name: "Kondapalli Fort",
    description:
      "A historic 14th century hilltop fortress overlooking the Krishna River plains, offering panoramic views and rich historical significance.",
    gradient: "from-amber-600 to-yellow-500",
    image: "/images/kondapalli-fort.png",
  },
  {
    icon: Mountain,
    name: "Mogalarajapuram Caves",
    description:
      "Ancient rock-cut sanctuaries from the 5th-7th centuries CE, featuring exquisite sculptures and inscriptions of the Vishnukundin era.",
    gradient: "from-purple-500 to-violet-500",
    image: "/images/mogalarajapuram-caves.png",
  },
  {
    icon: Church,
    name: "Amaralingeswara Swamy Temple",
    description:
      "Over 1,500 years old, this temple is dedicated to Lord Shiva and is one of the five sacred Pancharama Kshetras.",
    gradient: "from-rose-500 to-pink-500",
    image: "/images/amaralingeswara-temple.png",
  },
  {
    icon: Landmark,
    name: "Buddha Stupa (Amaravati)",
    description:
      "An important ancient Buddhist site featuring the towering Dhyana Buddha statue standing 125 ft tall, a symbol of peace and enlightenment.",
    gradient: "from-indigo-500 to-blue-500",
    image: "/images/buddha-stupa.png",
  },
  {
    icon: Church,
    name: "ISKCON Temple",
    description:
      "A beautiful temple that began after a grand Rath Yatra in 1993, attracting devotees and visitors with its spiritual ambience and architecture.",
    gradient: "from-yellow-500 to-orange-500",
    image: "/images/iskcon-temple.png",
  },
];

/* ------------------------------------------------------------------ */
/*  Tab definitions                                                    */
/* ------------------------------------------------------------------ */

const tabs = [
  { id: "how-to-reach", label: "How to Reach", icon: Navigation },
  { id: "about-vijayawada", label: "About Vijayawada", icon: MapPin },
  { id: "tourist-attractions", label: "Tourist Attractions", icon: Camera },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Venue() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  // Listen for tab switch events from Navbar and hash changes
  useEffect(() => {
    const handleSwitchTab = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.section === "venue" && typeof detail.tab === "number") {
        setActiveTab(detail.tab);
      }
    };

    // Handle hash-based navigation
    const handleHashChange = () => {
      const hash = window.location.hash;

      // Support both formats: "#venue-tab-0" and "#how-to-reach"
      // Format 1: venue-tab-N (numeric index)
      const venueTabMatch = hash.match(/venue-tab-(\d+)/);
      if (venueTabMatch) {
        const tabIndex = parseInt(venueTabMatch[1], 10);
        if (tabIndex >= 0 && tabIndex < tabs.length) {
          setActiveTab(tabIndex);
          return;
        }
      }

      // Format 2: Direct tab ID match (how-to-reach, about-vijayawada, etc.)
      const tabIndex = tabs.findIndex((tab) => hash.includes(tab.id));
      if (tabIndex !== -1) {
        setActiveTab(tabIndex);
      }
    };

    // Initial hash check on mount
    handleHashChange();

    // Listen for both custom events and native hash changes
    window.addEventListener("switchTab", handleSwitchTab);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("switchTab", handleSwitchTab);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <section id="venue" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="venue-grid"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="#1e293b" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#venue-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Venue &amp; Attractions
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
            Plan your journey to VIT-AP University and explore the vibrant city
            of Vijayawada.
          </p>
        </div>

        {/* ---- Tab navigation ---- */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = index === activeTab;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`
                  group flex items-center gap-2.5 px-5 py-3 rounded-lg
                  text-sm sm:text-base font-medium transition-all duration-200
                  cursor-pointer border
                  ${isActive
                    ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white border-transparent shadow-lg shadow-amber-200/50"
                    : "bg-white text-gray-600 border-gray-200 hover:border-amber-300 hover:text-amber-700 hover:shadow-md"
                  }
                `}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 ${isActive
                    ? "text-white"
                    : "text-gray-400 group-hover:text-amber-500"
                    }`}
                />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* ---- Tab content ---- */}
        <div
          id={tabs[activeTab].id}
          className="transition-all duration-300"
        >
          {/* ======== HOW TO REACH ======== */}
          {activeTab === 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  How to Reach VIT-AP University
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {travelOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <div
                      key={index}
                      className={`relative group rounded-xl border ${option.borderColor} bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col`}
                    >
                      {/* Route map image - clickable */}
                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({
                            src: option.image,
                            alt: `Route from ${option.from} to ${option.to}`,
                          })
                        }
                        className="relative w-full overflow-hidden cursor-pointer h-48"
                      >
                        <img
                          src={option.image}
                          alt={`Route from ${option.from} to ${option.to}`}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Zoom overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2 shadow-lg">
                            <ZoomIn className="w-5 h-5 text-black" />
                          </div>
                        </div>
                      </button>

                      <div className={`p-5 ${option.bgLight} flex-1 flex flex-col`}>
                        {/* Icon + Route */}
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${option.color} shadow-md flex-shrink-0`}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-gray-900 leading-snug">
                              {option.from}
                            </h4>
                            <p className="text-xs text-gray-500">
                              to {option.to}
                            </p>
                          </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-auto pt-3">
                          <div className="flex items-center gap-1.5 text-sm text-black">
                            <MapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                            <span className="font-medium">
                              {option.distance}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-black">
                            <Clock className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                            <span className="font-medium">
                              {option.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-black">
                            <Navigation className="w-3.5 h-3.5 text-gray-400 flex-shrink-0" />
                            <span className="font-medium">{option.mode}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ======== ABOUT VIJAYAWADA ======== */}
          {activeTab === 1 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  About Vijayawada
                </h3>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-black leading-relaxed mb-5 text-justify">
                  Vijayawada, located in Andhra Pradesh, India, along the banks
                  of the Krishna River, is a vibrant city where history,
                  mythology, and modern progress coexist beautifully. Its
                  cultural identity is deeply rooted in legend, particularly
                  through the revered Kanaka Durga Temple perched atop the
                  sacred Indrakeeladri Hills, drawing countless devotees and
                  visitors each year.
                </p>
                <p className="text-black leading-relaxed text-justify">
                  Balancing this heritage is the city&apos;s modern face,
                  symbolized by the majestic Prakasam Barrage, an engineering
                  landmark that spans the river and illuminates the skyline at
                  night. Known for lively markets, flavourful cuisine, colourful
                  festivals, and rapid urban development influenced by nearby
                  Amaravati, Vijayawada stands today as one of South
                  India&apos;s most dynamic cities.
                </p>
              </div>
            </div>
          )}

          {/* ======== TOURIST ATTRACTIONS ======== */}
          {activeTab === 2 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  Tourist Attractions
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {touristAttractions.map((attraction, index) => {
                  const Icon = attraction.icon;
                  return (
                    <div
                      key={index}
                      className="group relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
                    >
                      {/* Image - clickable for lightbox */}
                      <button
                        type="button"
                        onClick={() =>
                          setLightbox({
                            src: attraction.image,
                            alt: attraction.name,
                          })
                        }
                        className="relative w-full h-48 overflow-hidden cursor-pointer"
                      >
                        <img
                          src={attraction.image}
                          alt={attraction.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent`} />
                        {/* Number badge */}
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white text-xs font-bold">
                          {index + 1}
                        </div>
                        {/* Zoom overlay on hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2 shadow-lg">
                            <ZoomIn className="w-5 h-5 text-black" />
                          </div>
                        </div>
                        {/* Icon badge at bottom-left */}
                        <div className={`absolute bottom-3 left-3 flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${attraction.gradient} shadow-md`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                      </button>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <h4 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                          {attraction.name}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {attraction.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---- Lightbox Modal ---- */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-4xl w-full animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <p className="text-center text-white/70 text-sm mt-4">
              {lightbox.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
