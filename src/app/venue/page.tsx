"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

export default function VenuePage() {
  useEffect(() => {
    // Handle tab switching from hash - runs on mount and whenever hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      const tabMatch = hash.match(/^#venue-tab-(\d+)$/);
      if (tabMatch) {
        const tabIndex = parseInt(tabMatch[1], 10);

        // Small delay to ensure component is mounted
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent("switchTab", { detail: { section: "venue", tab: tabIndex } })
          );

          // Scroll to venue section
          const element = document.getElementById("venue");
          if (element) {
            const offset = 80;
            const pos = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: pos - offset, behavior: "smooth" });
          }
        }, 50);
      }
    };

    // Initial check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Venue />
      </div>
      <Footer />
    </main>
  );
}
