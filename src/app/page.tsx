"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkshopBanner from "@/components/WorkshopBanner";
import About from "@/components/About";
import Themes from "@/components/Themes";
import Speakers from "@/components/Speakers";
import Timeline from "@/components/Timeline";
import Sponsorship from "@/components/Sponsorship";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Handle hash-based navigation for sections
    const handleHashChange = () => {
      const hash = window.location.hash;

      // Skip if no hash or if it's a committee/venue tab
      if (!hash || hash.includes('committee-tab') || hash.includes('venue-tab')) {
        return;
      }

      // Remove the # symbol
      const targetId = hash.replace('#', '');

      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80;
          const pos = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: pos - offset, behavior: 'smooth' });
        }
      }, 150);
    };

    // Initial check on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <WorkshopBanner />
      <Timeline />
      <Themes />
      <Speakers />
      <About />
      <Sponsorship />
      <Registration />
      <Footer />
    </main>
  );
}
