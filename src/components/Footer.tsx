import { Mail, MapPin, Navigation, Heart } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Themes", href: "/#themes" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Important Dates", href: "/#timeline" },
  { label: "Committee", href: "/committee" },
  { label: "Sponsorship", href: "/#sponsorship" },
  { label: "Venue", href: "/venue" },
  { label: "Registration", href: "/registration" },
  { label: "Call for Papers", href: "/call-for-papers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ backgroundColor: "#0a1628" }}
    >
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c8a951] to-transparent" />

      {/* Subtle background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#c8a951]/[0.015] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#c8a951]/[0.015] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Column 1: Branding */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block group">
              <span className="text-2xl font-bold tracking-wide text-white group-hover:text-[#c8a951] transition-colors duration-200">
                ICRAM{" "}
                <span className="text-[#c8a951] font-light">&apos;26</span>
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-gray-400 max-w-xs">
              1st International Conference on Recent Innovations in Advanced
              Materials
            </p>
            <p className="mt-2 text-sm text-gray-500">
              July 8&ndash;10, 2026 &nbsp;|&nbsp; Hybrid Mode
            </p>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-widest text-[#c8a951]/70 font-semibold mb-2">
                Partner Universities
              </p>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>ICF-UNAM, Mexico</li>
                <li>Cheng Shiu University, Taiwan</li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-[#c8a951] transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c8a951]/40 shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#c8a951] mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a
                    href="mailto:icram@vitap.ac.in"
                    className="block text-sm text-gray-400 hover:text-[#c8a951] transition-colors duration-200 font-medium"
                  >
                    icram@vitap.ac.in
                  </a>
                  <a
                    href="mailto:pratheep.kumar@vitap.ac.in"
                    className="block text-sm text-gray-400 hover:text-[#c8a951] transition-colors duration-200"
                  >
                    pratheep.kumar@vitap.ac.in
                  </a>
                  <a
                    href="mailto:triveni.mandlimath@vitap.ac.in"
                    className="block text-sm text-gray-400 hover:text-[#c8a951] transition-colors duration-200"
                  >
                    triveni.mandlimath@vitap.ac.in
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#c8a951] mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="space-y-1">
                  <a
                    href="tel:+919894241479"
                    className="block text-sm text-gray-400 hover:text-[#c8a951] transition-colors duration-200"
                  >
                    +91 98942 41479
                  </a>
                  <a
                    href="tel:+918144266474"
                    className="block text-sm text-gray-400 hover:text-[#c8a951] transition-colors duration-200"
                  >
                    +91 81442 66474
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Venue */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white mb-5">
              Conference Venue
            </h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#c8a951] mt-0.5 shrink-0" />
              <div className="flex-1">
                <a
                  href="https://maps.app.goo.gl/k2JZwHJ49Lc1zwRk6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group text-sm text-gray-400 leading-relaxed hover:text-[#c8a951] transition-colors duration-200 inline-block"
                >
                  VIT-AP University,
                  <br />
                  Amaravati, Andhra Pradesh,
                  <br />
                  India
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-[#c8a951] group-hover:gap-2 transition-all duration-200">
                    <Navigation className="w-3 h-3" />
                    <span>View on Map</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-[#c8a951]/70 font-semibold mb-2">
                Organized by
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                Department of Chemistry,
                <br />
                School of Advanced Sciences,
                <br />
                VIT-AP University
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700/40 pt-6 mt-2">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
              <p className="text-sm text-gray-500 text-center sm:text-left">
                &copy; 2026 ICRAM &apos;26. All Rights Reserved.
              </p>
              <p className="text-xs text-gray-600 text-center sm:text-right">
                Organized by Department of Chemistry, School of Advanced Sciences,
                VIT-AP University
              </p>
            </div>
            <p className="text-sm text-gray-500 text-center flex items-center gap-1.5">
              Built with <Heart className="w-4 h-4 text-[#c8a951]" /> by{" "}
              <a
                href="https://www.linkedin.com/in/gaddamnithinreddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8a951] hover:text-[#d4b95f] underline transition-colors duration-200"
              >
                Nithin Reddy
              </a>
              {" "}&{" "}
              <a
                href="https://www.linkedin.com/in/gandharva-b-belli-965b22217"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c8a951] hover:text-[#d4b95f] underline transition-colors duration-200"
              >
                Gandharva Belli
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
