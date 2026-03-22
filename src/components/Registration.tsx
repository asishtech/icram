"use client";

import { Trophy, CreditCard, Users, ExternalLink, Award, Star } from "lucide-react";

interface FeeRow {
  category: string;
  indianOffline: string;
  indianOnline: string;
  foreignOffline: string;
  foreignOnline: string;
}

const feeData: FeeRow[] = [
  {
    category: "Student",
    indianOffline: "\u20B93,000",
    indianOnline: "\u20B92,000",
    foreignOffline: "$150",
    foreignOnline: "$100",
  },
  {
    category: "Academician",
    indianOffline: "\u20B93,500",
    indianOnline: "\u20B92,500",
    foreignOffline: "$200",
    foreignOnline: "$150",
  },
  {
    category: "Industry/R&D",
    indianOffline: "\u20B94,000",
    indianOnline: "\u20B93,000",
    foreignOffline: "$250",
    foreignOnline: "$200",
  },
];

interface CashAward {
  icon: React.ReactNode;
  title: string;
  eligibility: string;
}

const cashAwards: CashAward[] = [
  {
    icon: <Trophy className="w-7 h-7" />,
    title: "Best Paper Presentation Award",
    eligibility: "Student category",
  },
  {
    icon: <Award className="w-7 h-7" />,
    title: "Best Paper Presentation Award",
    eligibility: "Faculty / Scientist category",
  },
  {
    icon: <Star className="w-7 h-7" />,
    title: "Best Poster Presentation Award",
    eligibility: "Student / Faculty / Scientist category",
  },
];

export default function Registration() {
  return (
    <section
      id="registration"
      className="relative py-16 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="reg-pattern"
              x="0"
              y="0"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0v48M0 24h48"
                stroke="#1e293b"
                strokeWidth="0.5"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reg-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Registration
          </h2>
          <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          <p className="mt-4 text-black max-w-3xl mx-auto text-base sm:text-lg">
            Secure your spot at ICRAM 2026. Flexible registration options available. Choose the registration category that applies to you.
          </p>
        </div>

        {/* Registration Fee Table */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
              <CreditCard className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Registration Fees
            </h3>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border-2 border-gray-300 shadow-xl shadow-gray-100/60 overflow-hidden">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-[#0f1f3d] to-[#1a2d54]">
                  <th className="px-6 py-4 text-left text-white font-semibold tracking-wide border-r border-white/20">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-400" />
                      Category
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold tracking-wide border-r border-white/20">
                    Indian (Offline)
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold tracking-wide border-r border-white/20">
                    Indian (Online)
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold tracking-wide border-r border-white/20">
                    Foreign (Offline)
                  </th>
                  <th className="px-6 py-4 text-center text-white font-semibold tracking-wide">
                    Foreign (Online)
                  </th>
                </tr>
              </thead>
              <tbody>
                {feeData.map((row, index) => (
                  <tr
                    key={row.category}
                    className={`transition-colors duration-150 hover:bg-amber-50/60 border-b border-gray-300 ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50/80"
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 border-r border-gray-300">
                      {row.category}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 font-medium border-r border-gray-300">
                      {row.indianOffline}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 font-medium border-r border-gray-300">
                      {row.indianOnline}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 font-medium border-r border-gray-300">
                      {row.foreignOffline}
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 font-medium">
                      {row.foreignOnline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card layout */}
          <div className="md:hidden flex flex-col gap-4">
            {feeData.map((row) => (
              <div
                key={row.category}
                className="rounded-2xl border border-gray-100 shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-[#0f1f3d] to-[#1a2d54] px-5 py-3">
                  <h4 className="text-white font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-400" />
                    {row.category}
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-px bg-gray-100">
                  <div className="bg-white p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Indian (Offline)</p>
                    <p className="text-base font-bold text-gray-900">
                      {row.indianOffline}
                    </p>
                  </div>
                  <div className="bg-white p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Indian (Online)</p>
                    <p className="text-base font-bold text-gray-900">
                      {row.indianOnline}
                    </p>
                  </div>
                  <div className="bg-white p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Foreign (Offline)</p>
                    <p className="text-base font-bold text-gray-900">
                      {row.foreignOffline}
                    </p>
                  </div>
                  <div className="bg-white p-4 text-center">
                    <p className="text-xs text-gray-500 mb-1">Foreign (Online)</p>
                    <p className="text-base font-bold text-gray-900">
                      {row.foreignOnline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="prose prose-gray max-w-none mt-8">
            <p className="text-black leading-relaxed text-justify mb-4">
              Registration fee includes:
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2">
            <div className="flex items-start gap-2 text-base text-black">
              <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>
                Access to all technical session&apos;s plenary, keynote, and invited lectures.
              </span>
            </div>
            <div className="flex items-start gap-2 text-base text-black">
              <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>
                Conference kit, proceedings and other materials (for offline participants).
              </span>
            </div>
            <div className="flex items-start gap-2 text-base text-black">
              <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>
                Conference meals and socials with renowned global materials scientists (for offline participants).
              </span>
            </div>
            <div className="flex items-start gap-2 text-base text-black">
              <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <span>
                Recognition of best presentation awards.
              </span>
            </div>
            <div className="flex items-start gap-2 text-base text-black">
              <span className="mt-0.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
              <div>
                <span className="font-semibold text-[#8B1538]">
                  Pre-conference workshop on 7th July afternoon (for offline participants). The workshop includes:
                </span>
                <ul className="mt-2 ml-4 space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                    <span className="font-bold text-[#8B1538]">Materials characterization using XRD, SEM, TG-DSC, FTIR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                    <span className="font-bold text-[#8B1538]">Materials modelling and analysis by computational methods</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action / Registration Buttons Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          
          {/* Indian Participants Registration */}
          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <a
              href="https://events.vitap.ac.in/e/three-day-international-conference-on-recent-innovations-in-advanced-materials-icram-26-6cd29be5-0b0c-42a6-b746-dd1a1ad1143c"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#0f1f3d] to-[#1a2d54] text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Register (Indian Participants)
              <ExternalLink className="w-5 h-5 shrink-0" />
            </a>
            <p className="mt-3 text-sm text-gray-500">
              You will be redirected to the VIT-AP portal
            </p>
          </div>

          {/* International Participants Registration */}
          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <a
              href="https://forms.gle/2qxckNhCLNbQUzUm8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white font-semibold text-lg shadow-lg shadow-amber-200/50 hover:shadow-xl hover:shadow-amber-300/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Register (International Participants)
              <ExternalLink className="w-5 h-5 shrink-0" />
            </a>
            <p className="mt-3 text-sm font-semibold text-amber-600">
              (Payment link will be shared after registration)
            </p>
          </div>

        </div>

        {/* Cash Awards Section */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Cash Awards
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cashAwards.map((award, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-lg shadow-gray-100/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-200"
              >
                {/* Gold accent line at top */}
                <div className="absolute top-0 left-6 right-6 h-[3px] rounded-b-full bg-gradient-to-r from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-100 text-amber-500 group-hover:from-amber-100 group-hover:to-yellow-100 transition-colors duration-300">
                    {award.icon}
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-gray-900 mb-2 leading-snug">
                    {award.title}
                  </h4>

                  {/* Divider */}
                  <div className="w-10 h-[2px] bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mb-3" />

                  {/* Eligibility */}
                  <p className="text-sm text-black font-medium">
                    {award.eligibility}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
