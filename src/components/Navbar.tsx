"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface NavDropdownItem {
  label: string;
  href: string;
  isRoute?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  isRoute?: boolean;
  dropdown?: NavDropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/conference",
    isRoute: true,
    dropdown: [
      { label: "Conference", href: "/conference", isRoute: true },
      { label: "VIT-AP", href: "/vit-ap", isRoute: true },
      { label: "ICF-UNAM", href: "/icf-unam", isRoute: true },
      { label: "CHENG SHIU", href: "/cheng-shiu", isRoute: true },
    ],
  },
  {
    label: "Committee",
    href: "/committee",
    isRoute: true,
    dropdown: [
      { label: "Patrons", href: "/committee#committee-tab-0", isRoute: true },
      { label: "Advisory Board", href: "/committee#committee-tab-1", isRoute: true },
      { label: "Convenors", href: "/committee#committee-tab-2", isRoute: true },
      { label: "Organizing Committee", href: "/committee#committee-tab-3", isRoute: true },
    ],
  },
  {
    label: "Conference Info",
    href: "#themes",
    dropdown: [
      { label: "Themes", href: "#themes" },
      { label: "Speakers", href: "#speakers" },
      { label: "Important Dates", href: "#timeline" },
      { label: "Brochure", href: "/brochure", isRoute: true },
    ],
  },
  {
    label: "Venue",
    href: "/venue",
    isRoute: true,
    dropdown: [
      { label: "How to Reach", href: "/venue#venue-tab-0", isRoute: true },
      { label: "About Vijayawada", href: "/venue#venue-tab-1", isRoute: true },
      { label: "Tourist Attractions", href: "/venue#venue-tab-2", isRoute: true },
    ],
  },
  { label: "Call for Papers", href: "/call-for-papers", isRoute: true },
  { label: "Sponsorship", href: "#sponsorship" },
  { label: "Contact", href: "/contact", isRoute: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const pathname = usePathname();



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownEnter = useCallback((label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(label);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 50);
  }, []);

  const handleNavClick = useCallback((href: string, isRoute?: boolean) => {
    setMobileMenuOpen(false);
    setMobileOpenDropdown(null);
    setOpenDropdown(null);

    // Handle routes (separate pages)
    if (isRoute) {
      // Check if this is a route with hash (e.g., /venue#venue-tab-1)
      const hashMatch = href.match(/^(\/.+)#(.+)$/);
      if (hashMatch) {
        const path = hashMatch[1];
        const hash = hashMatch[2];

        // Check if we're already on the target page
        if (pathname === path) {
          // Already on the page, just set hash and trigger event
          window.location.hash = hash;

          // Extract section and tab number
          const tabMatch = hash.match(/^(committee|venue)-tab-(\d+)$/);
          if (tabMatch) {
            const sectionId = tabMatch[1];
            const tabIndex = parseInt(tabMatch[2], 10);

            // Dispatch event to switch tab
            window.dispatchEvent(
              new CustomEvent("switchTab", { detail: { section: sectionId, tab: tabIndex } })
            );
          }
        } else {
          // Navigate to the page with hash
          router.push(href);

          // After navigation completes, ensure hash is set and event is dispatched
          setTimeout(() => {
            if (window.location.pathname === path && window.location.hash !== `#${hash}`) {
              window.location.hash = hash;
            }

            // Extract section and tab number and dispatch event
            const tabMatch = hash.match(/^(committee|venue)-tab-(\d+)$/);
            if (tabMatch) {
              const sectionId = tabMatch[1];
              const tabIndex = parseInt(tabMatch[2], 10);

              window.dispatchEvent(
                new CustomEvent("switchTab", { detail: { section: sectionId, tab: tabIndex } })
              );
            }
          }, 100);
        }
      } else {
        router.push(href);
      }
      return;
    }

    // Handle hash scrolling on the current page
    if (href === "/" || href === "#home") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        router.push("/");
      }
      return;
    }

    // Handle tab-switching links like #committee-tab-2 or #venue-tab-1
    const tabMatch = href.match(/^#(committee|venue)-tab-(\d+)$/);
    if (tabMatch) {
      const sectionId = tabMatch[1]; // "committee" or "venue"
      const tabIndex = parseInt(tabMatch[2], 10);

      // Dispatch custom event to switch tab
      window.dispatchEvent(
        new CustomEvent("switchTab", { detail: { section: sectionId, tab: tabIndex } })
      );

      // Scroll to the section after a short delay for tab to switch
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const pos = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: pos - offset, behavior: "auto" });
        }
      }, 50);
      return;
    }

    // Handle regular section links (#themes, #speakers, #timeline, #sponsorship)
    const targetId = href.replace("#", "");

    // If we're not on the home page, navigate there first
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
      // Wait for navigation and hashchange listener to kick in
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const pos = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: pos - offset, behavior: "auto" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll to section
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const pos = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: pos - offset, behavior: "smooth" });
      }
    }
  }, [router, pathname]);

  const toggleMobileDropdown = useCallback((label: string) => {
    setMobileOpenDropdown((prev) => (prev === label ? null : label));
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out shadow-lg shadow-black/20`}
        style={{ backgroundColor: "rgba(252,251,249,0.92)", backdropFilter: "blur(12px)" }}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[72px]">
            {/* Logos - Left Side */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); handleNavClick("/"); }}
              className="flex-shrink-0 flex items-center gap-1.5 sm:gap-2 md:gap-3"
            >
              <Image src="/images/vitap-logo-new.png" alt="VIT AP" width={120} height={56} quality={90} priority className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain" />
              <div className="h-6 sm:h-8 md:h-10 w-px bg-gray-400/30" />
              <Image src="/images/Logos_ICF1.png" alt="Universidad" width={120} height={56} quality={90} priority className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain" />
              <Image src="/images/csu-logo.png" alt="CSU" width={120} height={64} quality={90} priority className="h-9 sm:h-11 md:h-14 lg:h-16 w-auto object-contain" />
            </a>

            {/* Desktop Navigation - Right Side */}
            <div className="hidden lg:flex items-center gap-2">
              <nav className="flex items-center">
                <ul className="flex items-center">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => item.dropdown && handleDropdownEnter(item.label)}
                    onMouseLeave={() => item.dropdown && handleDropdownLeave()}
                  >
                    {item.dropdown ? (
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1 px-2.5 py-2 text-sm font-semibold rounded-md whitespace-nowrap transition-colors duration-200 cursor-pointer ${openDropdown === item.label
                          ? "text-[#c8a951]"
                          : "text-[#16335f] hover:text-[#c8a951]"
                          }`}
                        onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                      >
                        {item.label}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.isRoute); }}
                        className="inline-flex items-center px-2.5 py-2 text-sm font-semibold text-[#16335f] hover:text-[#c8a951] rounded-md whitespace-nowrap transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    )}

                    {/* Dropdown */}
                    {item.dropdown && (
                      <div
                        className={`absolute top-full left-0 mt-1 w-52 origin-top-left transition-all duration-200 ${openDropdown === item.label
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95 pointer-events-none"
                          }`}
                      >
                        <div className="rounded-lg bg-white/95 border border-gray-300/50 shadow-xl shadow-black/30 py-1.5 overflow-hidden">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              onClick={(e) => { e.preventDefault(); handleNavClick(subItem.href, subItem.isRoute); }}
                              className="block px-4 py-2 text-sm text-[#16335f] hover:text-[#c8a951] hover:bg-gray-100/50 transition-colors duration-150"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              </nav>

              {/* Register CTA */}
              <a
                href="/registration"
                onClick={(e) => { e.preventDefault(); handleNavClick("/registration", true); }}
                className="inline-flex items-center px-4 py-1.5 text-sm font-semibold rounded-full bg-[#c8a951] text-[#0a1628] hover:bg-[#d4b95f] active:bg-[#b8993f] shadow-md shadow-[#c8a951]/20 transition-all duration-200 hover:shadow-lg whitespace-nowrap"
              >
                Register Now
              </a>
            </div>

            {/* Mobile Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="/registration"
                onClick={(e) => { e.preventDefault(); handleNavClick("/registration", true); }}
                className="hidden sm:inline-flex items-center px-3 py-1.5 text-xs font-semibold rounded-full bg-[#c8a951] text-[#0a1628]"
              >
                Register
              </a>
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 rounded-md text-[#16335f] hover:text-[#c8a951] hover:bg-gray-100/50 transition-colors duration-200 cursor-pointer touch-manipulation"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] shadow-2xl shadow-black/50 transition-transform duration-300 ease-in-out lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        style={{ backgroundColor: "rgba(252,251,249,0.95)" }}
      >
        <div className="flex items-center justify-end px-6 h-16 border-b border-gray-300/50">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-md text-[#16335f] hover:text-[#c8a951] hover:bg-gray-100/50 transition-colors duration-200 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto h-[calc(100%-4rem)] py-4 px-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-150 cursor-pointer ${mobileOpenDropdown === item.label
                        ? "text-[#c8a951] bg-gray-100/50"
                        : "text-[#16335f] hover:text-[#c8a951] hover:bg-gray-100/50"
                        }`}
                      onClick={() => toggleMobileDropdown(item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileOpenDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ${mobileOpenDropdown === item.label ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="ml-4 mt-1 mb-2 space-y-0.5 border-l-2 border-gray-300/50 pl-4">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(subItem.href, subItem.isRoute); }}
                            className="block py-2.5 text-sm text-[#16335f] hover:text-[#c8a951] transition-colors duration-150"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.isRoute); }}
                    className="block px-4 py-3 text-sm font-medium text-[#16335f] hover:text-[#c8a951] hover:bg-gray-100/50 rounded-lg transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 px-4">
            <a
              href="/registration"
              onClick={(e) => { e.preventDefault(); handleNavClick("/registration", true); }}
              className="flex items-center justify-center w-full px-6 py-3 text-sm font-semibold rounded-full bg-[#c8a951] text-[#0a1628] hover:bg-[#d4b95f] active:bg-[#b8993f] shadow-md shadow-[#c8a951]/20 transition-all duration-200"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
