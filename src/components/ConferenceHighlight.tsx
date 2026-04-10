"use client";

import { Users, Lightbulb, MapPin } from "lucide-react";

export default function ConferenceHighlight() {
  return (
    <section
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#0a1628" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#d4af37]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#d4af37]/[0.03] rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main heading with decorative elements */}
        <div className="text-center mb-12">
          <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            A Rare Academic Opportunity
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-6">
            <span className="inline-block animate-fade-in">
              🌍 ICRAM&apos;26 at{" "}
              <span
                className="bg-gradient-to-r from-[#e8d48b] via-[#d4af37] to-[#c8a951] bg-clip-text text-transparent"
              >
                VIT-AP University
              </span>
            </span>
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>

          {/* Introductory text */}
          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-12">
            World-renowned scientists and distinguished professors are coming together at VIT-AP for ICRAM&apos;26, delivering their lectures{" "}
            <span className="text-[#d4af37] font-semibold">in person</span>.
          </p>
        </div>

        {/* Why you should attend - Cards */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
            🎓 Why You Should Attend
          </h3>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-gradient-to-br from-[#0f2240] to-[#0a1628] p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-full blur-2xl group-hover:bg-[#d4af37]/10 transition-all" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8941e] flex items-center justify-center mb-4 shadow-lg shadow-[#d4af37]/20">
                  <Users className="w-6 h-6 text-[#0a1628]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Learn from Globally Recognized Experts
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Gain insights from world-class researchers and professors at the forefront of their fields.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-gradient-to-br from-[#0f2240] to-[#0a1628] p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-full blur-2xl group-hover:bg-[#d4af37]/10 transition-all" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8941e] flex items-center justify-center mb-4 shadow-lg shadow-[#d4af37]/20">
                  <Lightbulb className="w-6 h-6 text-[#0a1628]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Participate in Insightful Discussions
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Engage in meaningful conversations and exchange ideas with leading academics and researchers.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-gradient-to-br from-[#0f2240] to-[#0a1628] p-6 rounded-xl border border-[#d4af37]/20 hover:border-[#d4af37]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-full blur-2xl group-hover:bg-[#d4af37]/10 transition-all" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#b8941e] flex items-center justify-center mb-4 shadow-lg shadow-[#d4af37]/20">
                  <MapPin className="w-6 h-6 text-[#0a1628]" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Network with Researchers & Peers
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Build valuable connections with faculty, researchers, and fellow participants from around the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#0f2240] via-[#1a3a6b] to-[#0f2240] p-8 rounded-2xl border-2 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/5">
            <p className="text-gray-300 text-lg md:text-xl mb-4">
              📍 Experience the conference <span className="text-[#d4af37] font-semibold">physically</span> and make the most of this rare academic opportunity.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white">
              👉 Don&apos;t miss out—be a part of{" "}
              <span className="bg-gradient-to-r from-[#e8d48b] via-[#d4af37] to-[#c8a951] bg-clip-text text-transparent">
                ICRAM&apos;26!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
