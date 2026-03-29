import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://icram.vitap.ac.in'),
  title: {
    default: "ICRAM VITAP 2026 | International Conference on Recent Innovations in Advanced Materials | VIT-AP University",
    template: "%s | ICRAM 2026 | VIT-AP University"
  },
  description:
    "ICRAM VITAP 2026 - Official website. 1st International Conference on Recent Innovations in Advanced Materials at VIT-AP University, Amaravati, Andhra Pradesh, India. July 8-10, 2026. Hybrid Mode Conference featuring 19+ invited speakers from 8 countries. Submit research on nanomaterials, energy storage, biomaterials, computational materials, catalysis. Organized by Department of Chemistry, School of Advanced Sciences, VIT-AP University in collaboration with ICF-UNAM Mexico & Cheng Shiu University Taiwan. Register now for paper presentations, workshops, and networking opportunities.",
  keywords: [
    // Primary Conference Keywords - Most Important
    "ICRAM VITAP",
    "ICRAM VIT-AP",
    "ICRAM VITAP 2026",
    "ICRAM 2026",
    "ICRAM conference",
    "ICRAM Amaravati",
    "International Conference Advanced Materials 2026",
    "Recent Innovations Advanced Materials",

    // Institution Keywords
    "VIT-AP University conference",
    "VITAP conference",
    "VIT-AP University",
    "VIT AP",
    "VITAP",
    "VIT-AP Amaravati",
    "Amaravati conference",
    "Andhra Pradesh conference",

    // Material Science Keywords
    "advanced materials conference",
    "materials science conference India",
    "nanotechnology conference 2026",
    "nanomaterials conference",
    "energy materials conference",
    "biomaterials conference India",
    "computational materials science",
    "materials chemistry conference",
    "catalysis conference",
    "electrochemistry conference",

    // Research Topics
    "battery materials research",
    "fuel cell materials",
    "solar cell materials",
    "supercapacitor materials",
    "carbon materials",
    "2D materials conference",
    "quantum materials",
    "smart materials",
    "sustainable materials",
    "functional materials",
    "materials characterization",
    "materials modeling",

    // Conference Type
    "international conference India 2026",
    "hybrid conference",
    "materials conference July 2026",
    "research conference 2026",
    "academic conference India",
    "call for papers 2026",
    "submit abstract materials science",
    "paper presentation conference",

    // Location Keywords
    "conference in Amaravati",
    "conference in Andhra Pradesh",
    "conference near Vijayawada",
    "South India conference",
    "India materials conference",

    // Collaboration
    "ICF-UNAM",
    "Cheng Shiu University",
    "international collaboration conference",
    "Indo-Mexico collaboration",
    "Indo-Taiwan collaboration",

    // Academic Keywords
    "materials research conference",
    "PhD conference materials science",
    "postdoc conference",
    "faculty conference",
    "industry conference materials",
    "R&D conference",
    "innovation in materials"
  ],
  authors: [
    { name: "Department of Chemistry, School of Advanced Sciences, VIT-AP University" },
  ],
  creator: "VIT-AP University",
  publisher: "VIT-AP University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ICRAM VITAP 2026 | International Conference on Recent Innovations in Advanced Materials | VIT-AP University",
    description:
      "ICRAM VITAP 2026 - Official Conference Website. Join researchers worldwide at VIT-AP University, Amaravati, India. July 8-10, 2026. 19+ invited speakers, 8 countries. Submit your research in advanced materials, nanomaterials, energy materials, biomaterials. Hybrid mode conference with pre-conference workshop.",
    url: "https://icram.vitap.ac.in",
    type: "website",
    locale: "en_US",
    siteName: "ICRAM VITAP 2026 - VIT-AP University",
    images: [
      {
        url: "/icram-logo.png",
        width: 1200,
        height: 630,
        alt: "ICRAM VITAP 2026 - International Conference on Recent Innovations in Advanced Materials at VIT-AP University",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ICRAM VITAP 2026 | International Conference on Advanced Materials | VIT-AP",
    description:
      "ICRAM VITAP 2026 - Official website. 1st International Conference on Recent Innovations in Advanced Materials. July 8-10, 2026, VIT-AP University, Amaravati, India. 19+ invited speakers. Hybrid mode.",
    images: ["/icram-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://icram.vitap.ac.in",
  },
  verification: {
    google: "",
    yandex: "",
    yahoo: "",
  },
  category: "Conference",
};

// JSON-LD Structured Data for the conference
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "ICRAM VITAP 2026 - 1st International Conference on Recent Innovations in Advanced Materials",
  alternateName: ["ICRAM 2026", "ICRAM VITAP", "ICRAM VIT-AP"],
  description:
    "ICRAM VITAP 2026 - Official website for the 1st International Conference on Recent Innovations in Advanced Materials at VIT-AP University. International conference bringing together researchers, academicians, and industry professionals in advanced materials science. Features plenary lectures, keynotes, oral and poster presentations on topics including nanomaterials, energy materials, biomaterials, and computational materials research.",
  startDate: "2026-07-08T09:00:00+05:30",
  endDate: "2026-07-10T18:00:00+05:30",
  eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Place",
    name: "VIT-AP University",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Near Vijayawada",
      addressLocality: "Amaravati",
      addressRegion: "Andhra Pradesh",
      postalCode: "522237",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 16.5062,
      longitude: 80.5562,
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Department of Chemistry, School of Advanced Sciences, VIT-AP University",
    url: "https://vitap.ac.in",
    logo: "https://icram.vitap.ac.in/images/vitap-logo-white.png",
  },
  performer: [
    {
      "@type": "Person",
      name: "Prof. S. Sampath",
      affiliation: {
        "@type": "Organization",
        name: "Indian Institute of Science, Bangalore",
      },
      jobTitle: "Professor",
      award: "Shanti Swarup Bhatnagar Awardee 2006",
    },
    {
      "@type": "Person",
      name: "Prof. Maximilian Fichtner",
      affiliation: {
        "@type": "Organization",
        name: "Helmholtz Institute Ulm, KIT",
      },
      jobTitle: "Executive Director",
    },
    {
      "@type": "Person",
      name: "Prof. Vivek Polshettiwar",
      affiliation: {
        "@type": "Organization",
        name: "TIFR Mumbai",
      },
      jobTitle: "Professor",
      award: "Shanti Swarup Bhatnagar Awardee 2024",
    },
  ],
  offers: [
    {
      "@type": "Offer",
      name: "Student Registration (Indian - Offline)",
      price: "3000",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://icram.vitap.ac.in/registration",
      validFrom: "2026-01-01",
    },
    {
      "@type": "Offer",
      name: "Academician Registration (Indian - Offline)",
      price: "3500",
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: "https://icram.vitap.ac.in/registration",
      validFrom: "2026-01-01",
    },
    {
      "@type": "Offer",
      name: "International Delegate Registration (Offline)",
      price: "150",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://icram.vitap.ac.in/registration",
      validFrom: "2026-01-01",
    },
  ],
  image: "https://icram.vitap.ac.in/icram-logo.png",
  url: "https://icram.vitap.ac.in",
  subEvent: [
    {
      "@type": "Event",
      name: "Plenary Lectures",
      description: "Keynote presentations by distinguished speakers from around the world",
    },
    {
      "@type": "Event",
      name: "Oral Presentations",
      description: "Research paper presentations in various tracks",
    },
    {
      "@type": "Event",
      name: "Poster Presentations",
      description: "Visual presentations of research work",
    },
  ],
  about: [
    {
      "@type": "Thing",
      name: "Nanomaterials",
      description: "Research in nanoscale materials and their applications",
    },
    {
      "@type": "Thing",
      name: "Energy Materials",
      description: "Materials for energy storage and conversion",
    },
    {
      "@type": "Thing",
      name: "Biomaterials",
      description: "Materials for biomedical applications",
    },
    {
      "@type": "Thing",
      name: "Computational Materials Science",
      description: "Computer modeling and simulation of materials",
    },
  ],
  inLanguage: "en",
  isAccessibleForFree: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a1628" />
        <meta name="google-site-verification" content="9zhD3lE1sm4XoagKHVvtpLZciioHHRkmWj_Yg-1Jv6M" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" style={{ fontFamily: "'Inter', system-ui, sans-serif" }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
