"use client";

import {
  CalendarCheck,
  CalendarClock,
  Bell,
  CalendarDays,
  FileText,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TimelineEvent {
  icon: LucideIcon;
  date: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    icon: CalendarCheck,
    date: "25th March 2026",
    title: "Registration Opens",
    description:
      "Online registration portal opens for all participants, researchers, and attendees.",
  },
  {
    icon: CalendarClock,
    date: "15th May 2026",
    title: "Deadline for Registration & Abstract Submission",
    description:
      "Last date to complete your registration and abstract submission for the conference.",
  },
  {
    icon: Bell,
    date: "25th May 2026",
    title: "Notification of Abstract Acceptance",
    description:
      "Authors will be notified about the acceptance status of their submitted abstracts.",
  },
  {
    icon: CalendarDays,
    date: "8th - 10th July 2026",
    title: "Conference Dates",
    description:
      "Three days of keynote lectures, oral presentations, poster sessions, and networking.",
  },
  {
    icon: FileText,
    date: "31st August 2026",
    title: "Full Paper Submission",
    description:
      "Deadline for submitting full-length papers for publication in conference proceedings.",
  },
];

function TimelineNode({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const Icon = event.icon;
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full group">
      {/* Desktop layout: alternating sides */}
      {/* Left content area */}
      <div
        className={`hidden md:flex w-[calc(50%-1.5rem)] ${
          isLeft ? "justify-end" : "justify-end opacity-0 pointer-events-none"
        }`}
      >
        {isLeft && (
          <div className="max-w-md text-right pr-8 animate-fade-in">
            <span className="inline-block text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-1">
              {event.date}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>
        )}
      </div>

      {/* Center dot / icon */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941e] flex items-center justify-center shadow-lg shadow-[#d4af37]/20 border-4 border-[#0a1628] group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-5 h-5 text-[#0a1628]" />
        </div>
      </div>

      {/* Right content area */}
      <div
        className={`hidden md:flex w-[calc(50%-1.5rem)] ${
          !isLeft ? "justify-start" : "justify-start opacity-0 pointer-events-none"
        }`}
      >
        {!isLeft && (
          <div className="max-w-md text-left pl-8 animate-fade-in">
            <span className="inline-block text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-1">
              {event.date}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>
        )}
      </div>

      {/* Mobile layout: always on the right */}
      <div className="md:hidden pl-5 flex-1">
        <span className="inline-block text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-1">
          {event.date}
        </span>
        <h3 className="text-lg font-bold text-white mb-1">{event.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative py-16 px-4 overflow-hidden"
      style={{ backgroundColor: "#0a1628" }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#d4af37]/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-[#d4af37]/[0.02] rounded-full blur-3xl" />
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

      <div className="relative max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-[#d4af37] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Mark Your Calendar
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Important Dates
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#d4af37]" />
            <div className="w-3 h-3 rotate-45 border-2 border-[#d4af37]" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#d4af37]" />
          </div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Stay on track with the key milestones for ICRAM 2026. Plan your
            submissions and travel well in advance.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line - desktop (centered) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#d4af37]/60 via-[#d4af37]/30 to-[#d4af37]/60" />

          {/* Vertical connecting line - mobile (left aligned at icon center) */}
          <div className="md:hidden absolute left-[1.375rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#d4af37]/60 via-[#d4af37]/30 to-[#d4af37]/60" />

          {/* Timeline events */}
          <div className="flex flex-col gap-12 md:gap-16">
            {events.map((event, index) => (
              <div key={index} className="relative">
                {/* Desktop: center the node */}
                <div className="hidden md:flex justify-center">
                  <TimelineNode event={event} index={index} />
                </div>

                {/* Mobile: left-aligned node */}
                <div className="md:hidden flex items-start">
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8941e] flex items-center justify-center shadow-lg shadow-[#d4af37]/20 border-4 border-[#0a1628]">
                      <event.icon className="w-4.5 h-4.5 text-[#0a1628]" />
                    </div>
                  </div>
                  <div className="pl-5 pb-2 flex-1">
                    <span className="inline-block text-[#d4af37] text-sm font-semibold tracking-wider uppercase mb-1">
                      {event.date}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top cap */}
          <div className="absolute left-1/2 -top-2 -translate-x-1/2 hidden md:block">
            <div className="w-4 h-4 rounded-full bg-[#d4af37]/30 border-2 border-[#d4af37]/50" />
          </div>
          <div className="absolute left-[1.375rem] -top-2 -translate-x-1/2 md:hidden">
            <div className="w-4 h-4 rounded-full bg-[#d4af37]/30 border-2 border-[#d4af37]/50" />
          </div>

          {/* Bottom cap */}
          <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 hidden md:block">
            <div className="w-4 h-4 rounded-full bg-[#d4af37]/30 border-2 border-[#d4af37]/50" />
          </div>
          <div className="absolute left-[1.375rem] -bottom-2 -translate-x-1/2 md:hidden">
            <div className="w-4 h-4 rounded-full bg-[#d4af37]/30 border-2 border-[#d4af37]/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
