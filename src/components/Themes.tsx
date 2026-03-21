"use client";

import { Atom, Zap, Shield, Microscope, HeartPulse, Cpu } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface ThemeCard {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const themes: ThemeCard[] = [
  {
    icon: <Atom className="w-8 h-8" />,
    title: "Materials Design, Synthesis, and Properties",
    items: [
      "Advanced material synthesis",
      "Material structures and defects",
      "Physicochemical properties of emerging materials",
      "Advanced characterisation techniques (Microscopic, spectroscopic, diffraction)",
      "Device fabrication techniques",
    ],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Energy and Sustainable Materials",
    items: [
      "Materials for energy storage and conversion",
      "Hydrogen generation and storage materials",
      "Photovoltaic materials",
      "Optoelectronic materials",
      "Semiconductors",
      "Nuclear materials",
      "Thermoelectric materials",
      "Porous materials (Zeolites, MOFs, COFs and Cages)",
    ],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "High Performance and Functional Materials",
    items: [
      "Advanced ceramics",
      "Magnetic Materials",
      "Functional polymers and hybrid materials",
      "Alloys",
      "Composites",
    ],
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: "Nanomaterials and Nanotechnology",
    items: [
      "2D and low dimensional nanomaterials for:",
      "Catalysis, Adsorption, Sensors",
      "Environmental monitoring and remediation",
      "CO₂ reduction",
      "Food and agricultural",
      "Device applications",
    ],
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Soft and Biomaterials",
    items: [
      "Materials for biomedical and health care applications",
      "Flexible and wearable materials",
      "Materials for tissue engineering, and regenerative medicine",
      "Drug delivery and therapeutic materials",
      "Materials for medical devices",
      "Implant materials",
    ],
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Computational and Data-Driven Materials Design",
    items: [
      "First-Principles Calculations and DFT-Based Studies",
      "Machine Learning for Materials Design and Predictive Analysis",
      "Magnetism and Spin Dynamics",
      "Electronic Structure and Chemical Bonding Analysis",
    ],
  },
];

function ThemeCardComponent({ theme, index }: { theme: ThemeCard; index: number }) {
  return (
    <div
      className="group relative rounded-2xl p-[1px] h-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(212,175,55,0.25)]"
      style={{
        background: "linear-gradient(135deg, rgba(212,175,55,0.6), rgba(212,175,55,0.1) 50%, rgba(212,175,55,0.6))",
      }}
    >
      <div className="relative h-full rounded-2xl bg-[#0f1f3d] p-6 flex flex-col">
        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,transparent_70%)]" />

        {/* Icon */}
        <div className="relative mb-4 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 text-[#d4af37] border border-[#d4af37]/20">
          {theme.icon}
        </div>

        {/* Title */}
        <h3 className="relative text-lg font-bold text-white mb-4 leading-snug min-h-[3.5rem] flex items-start">
          {theme.title}
        </h3>

        {/* Divider */}
        <div className="relative w-12 h-[2px] bg-gradient-to-r from-[#d4af37] to-transparent mb-4" />

        {/* Items - Show all */}
        <ul className="relative flex flex-col gap-2 flex-1">
          {theme.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300/90">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#d4af37]/60 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Theme number badge */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center text-[#d4af37]/50 text-xs font-bold">
          {index + 1}
        </div>
      </div>
    </div>
  );
}

export default function Themes() {
  return (
    <section id="themes" className="relative py-16 px-4 overflow-hidden" style={{ backgroundColor: "#0a1628" }}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/[0.02] rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Explore Our Research Areas
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Conference Themes
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-3 h-3 rotate-45 border-2 border-[#d4af37]" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            ICRAM 2026 covers a broad spectrum of cutting-edge materials research, from fundamental design
            to computational innovation. Swipe through to explore each theme.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-4 sm:px-8 md:px-12 lg:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {themes.map((theme, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-[480px]">
                    <ThemeCardComponent theme={theme} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Mobile swipe hint */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-gray-500 text-sm">Swipe to explore more themes</p>
        </div>
      </div>
    </section>
  );
}
