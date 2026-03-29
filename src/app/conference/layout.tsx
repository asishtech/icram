import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Conference",
  description:
    "Learn about ICRAM 2026 - International Conference on Recent Innovations in Advanced Materials. Detailed information about the conference objectives, scope, and welcome message from the organizing committee at VIT-AP University.",
  keywords: [
    "about ICRAM 2026",
    "conference information",
    "materials science conference",
    "advanced materials research",
    "VIT-AP conference details",
  ],
  openGraph: {
    title: "About the Conference | ICRAM 2026",
    description:
      "Learn about ICRAM 2026 conference objectives, scope, and themes. First International Conference on Recent Innovations in Advanced Materials at VIT-AP University.",
    url: "https://icram.vitap.ac.in/conference",
  },
  twitter: {
    title: "About the Conference | ICRAM 2026",
    description:
      "Learn about ICRAM 2026 conference objectives and scope at VIT-AP University.",
  },
  alternates: {
    canonical: "https://icram.vitap.ac.in/conference",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConferenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
