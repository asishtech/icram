"use client";

import { Diamond, Award, Medal, Star } from "lucide-react";

interface SponsorTier {
  icon: React.ReactNode;
  name: string;
  price: string;
  color: string;
  colorLight: string;
  glowColor: string;
  borderGradient: string;
  benefits: string[];
  featured?: boolean;
}

const tiers: SponsorTier[] = [
  {
    icon: <Diamond className="w-8 h-8" />,
    name: "Diamond Sponsorship",
    price: "\u20B91,00,000",
    color: "#f5d060",
    colorLight: "#fef3c7",
    glowColor: "rgba(245,208,96,0.35)",
    borderGradient:
      "linear-gradient(135deg, #f5d060, #ffe89a 30%, #f5d060 50%, #ffe89a 70%, #f5d060)",
    benefits: [
      "Logo on conference website, banners, brochure, and promotional materials",
      "Full-page advertisement in the conference souvenir/proceedings",
      "Exhibition space with two dedicated standees",
      "Opportunity to deliver a short promotional presentation",
      "Recognition during inaugural and valedictory sessions",
    ],
    featured: true,
  },
  {
    icon: <Award className="w-8 h-8" />,
    name: "Gold Sponsorship",
    price: "\u20B975,000",
    color: "#c8a951",
    colorLight: "#e8d48b",
    glowColor: "rgba(200,169,81,0.25)",
    borderGradient:
      "linear-gradient(135deg, #c8a951, #e8d48b 50%, #c8a951)",
    benefits: [
      "Logo on conference website, banners, and brochure",
      "Half-page advertisement in the conference souvenir",
      "Exhibition space with one standee",
      "Recognition during conference sessions",
    ],
  },
  {
    icon: <Medal className="w-8 h-8" />,
    name: "Silver Sponsorship",
    price: "\u20B950,000",
    color: "#94a3b8",
    colorLight: "#cbd5e1",
    glowColor: "rgba(148,163,184,0.25)",
    borderGradient:
      "linear-gradient(135deg, #94a3b8, #cbd5e1 50%, #94a3b8)",
    benefits: [
      "Logo on conference website",
      "Quarter-page advertisement in the conference souvenir",
      "Exhibition space on conference venue",
      "Recognition during the conference",
    ],
  },
  {
    icon: <Star className="w-8 h-8" />,
    name: "Bronze Sponsorship",
    price: "\u20B925,000",
    color: "#cd7f32",
    colorLight: "#e8a962",
    glowColor: "rgba(205,127,50,0.25)",
    borderGradient:
      "linear-gradient(135deg, #cd7f32, #e8a962 50%, #cd7f32)",
    benefits: [
      "Logo on conference website",
      "Acknowledgement in conference brochure/souvenir",
      "Recognition during conference sessions",
    ],
  },
];

function SponsorCard({ tier }: { tier: SponsorTier }) {
  return (
    <div
      className={`group relative rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-2 ${
        tier.featured ? "lg:scale-105 lg:-mt-4 lg:mb-4" : ""
      }`}
      style={{
        background: tier.borderGradient,
        boxShadow: tier.featured
          ? `0 0 30px ${tier.glowColor}, 0 0 60px ${tier.glowColor}`
          : "none",
      }}
    >
      {/* Animated glow ring for Diamond */}
      {tier.featured && (
        <div
          className="absolute -inset-[2px] rounded-2xl opacity-60 blur-sm pointer-events-none"
          style={{
            background: tier.borderGradient,
            animation: "diamondPulse 3s ease-in-out infinite",
          }}
        />
      )}

      <div className="relative h-full rounded-2xl bg-[#0f1f3d] p-6 sm:p-8 flex flex-col">
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center, ${tier.glowColor.replace(
              /[\d.]+\)$/,
              "0.06)"
            )} 0%, transparent 70%)`,
          }}
        />

        {/* Featured badge */}
        {tier.featured && (
          <div
            className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
              background: `linear-gradient(135deg, ${tier.color}, ${tier.colorLight})`,
              color: "#0a1628",
            }}
          >
            Most Popular
          </div>
        )}

        {/* Icon */}
        <div
          className="relative mb-5 flex items-center justify-center w-16 h-16 rounded-xl border"
          style={{
            background: `linear-gradient(135deg, ${tier.color}20, ${tier.color}08)`,
            borderColor: `${tier.color}30`,
            color: tier.color,
          }}
        >
          {tier.icon}
        </div>

        {/* Tier name */}
        <h3
          className="relative text-xl font-bold mb-2"
          style={{ color: tier.color }}
        >
          {tier.name}
        </h3>

        {/* Price */}
        <p className="relative text-3xl font-extrabold text-white mb-5">
          {tier.price}
        </p>

        {/* Divider */}
        <div
          className="relative w-full h-[1px] mb-5"
          style={{
            background: `linear-gradient(90deg, ${tier.color}60, transparent)`,
          }}
        />

        {/* Benefits */}
        <ul className="relative flex flex-col gap-3 flex-1 mb-6">
          {tier.benefits.map((benefit, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300/90">
              <svg
                className="mt-0.5 w-4 h-4 shrink-0"
                style={{ color: tier.color }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="mailto:icram@vitap.ac.in?subject=Sponsorship%20Inquiry%20-%20{tier.name}"
          className="relative mt-auto inline-flex items-center justify-center w-full rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer"
          style={
            tier.featured
              ? {
                  background: `linear-gradient(135deg, ${tier.color}, ${tier.colorLight})`,
                  color: "#0a1628",
                  boxShadow: `0 4px 20px ${tier.glowColor}`,
                }
              : {
                  border: `2px solid ${tier.color}60`,
                  color: tier.color,
                  background: "transparent",
                }
          }
          onMouseEnter={(e) => {
            if (!tier.featured) {
              e.currentTarget.style.background = `${tier.color}15`;
              e.currentTarget.style.borderColor = tier.color;
              e.currentTarget.style.boxShadow = `0 4px 20px ${tier.glowColor}`;
            }
          }}
          onMouseLeave={(e) => {
            if (!tier.featured) {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = `${tier.color}60`;
              e.currentTarget.style.boxShadow = "none";
            }
          }}
        >
          Become a Sponsor
        </a>
      </div>
    </div>
  );
}

export default function Sponsorship() {
  return (
    <section
      id="sponsorship"
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#0a1628" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4af37]/[0.02] rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1a3a6b]/10 rounded-full blur-3xl" />
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
            Support ICRAM 2026
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Sponsorship Opportunities
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-3 h-3 rotate-45 border-2 border-[#d4af37]" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-base leading-relaxed">
            We invite organizations, institutions, and industry partners to
            support the conference. Your sponsorship helps foster innovation and
            knowledge exchange in advanced materials research.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {tiers.map((tier, index) => (
            <SponsorCard key={index} tier={tier} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm mb-4">
            For custom sponsorship packages or inquiries, please contact us.
          </p>
          <a
            href="mailto:icram@vitap.ac.in?subject=Sponsorship%20Inquiry"
            className="inline-flex items-center gap-2 text-[#d4af37] font-semibold hover:text-[#e8d48b] transition-colors duration-200"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            icram@vitap.ac.in
          </a>
        </div>
      </div>

      {/* Keyframes for Diamond glow animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes diamondPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}} />
    </section>
  );
}
