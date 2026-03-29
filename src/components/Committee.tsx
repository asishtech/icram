"use client";

import { useState, useEffect } from "react";
import { Crown, Users, Briefcase, Globe, Award, GraduationCap, MapPin } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  DATA                                                               */
/* ------------------------------------------------------------------ */

interface AdvisoryMember {
  name: string;
  title: string;
  institution?: string;
  country?: string;
  flag?: string;
  image: string;
  imagePosition?: string;
  imageScale?: number;
}

interface ConvenorMember {
  name: string;
  title: string;
  institution: string;
  image?: string;
  imagePosition?: string;
  imageScale?: number;
}

const patronsData = {
  chiefPatron: {
    name: "Dr. G. Viswanathan",
    title: "Founder & Chancellor",
    institution: "VIT",
    image: "/images/patrons/chancellor-viswanathan.webp",
  },
  patrons: [
    { name: "Dr. Sankar Viswanathan", title: "Vice-President", institution: "VIT", image: "/images/patrons/sankar-viswanathan.png", imagePosition: "35% 10%", imageScale: 1.3 },
    { name: "Dr. Sekar Viswanathan", title: "Vice-President", institution: "VIT", image: "/images/patrons/sekar-viswanathan.webp", imagePosition: "center 5%", imageScale: 1.15 },
    { name: "Dr. G. V. Selvam", title: "Vice-President", institution: "VIT", image: "/images/patrons/selvam-new.png", imagePosition: "55% 10%", imageScale: 1.3 },
  ],
  coPatrons: [
    { name: "Dr. P. Arulmozhivarman", title: "Vice Chancellor(I/c)", institution: "VIT-AP", image: "/images/patrons/arulmozhivarman.avif" },
    { name: "Dr. Jagadish C Mudiganti", title: "Registrar", institution: "VIT-AP", image: "/images/patrons/jagadish-mudiganti.avif", imagePosition: "center 15%" },
    { name: "Prof. S. Srinivas", title: "Dean, SAS", institution: "VIT-AP", image: "/images/patrons/srinivas-s.avif" },
    { name: "Dr. I. Ramakanth", title: "HoD, Chemistry", institution: "VIT-AP", image: "/images/patrons/ramakanth.avif" },
  ],
};

const convenorsData: {
  convenors: ConvenorMember[];
  coConvenors: ConvenorMember[];
} = {
  convenors: [
    {
      name: "Dr. Pratheep Kumar",
      title: "Associate Professor",
      institution: "Department of Chemistry, VIT-AP University",
      image: "/images/convenors/pratheep-kumar.avif",
    },
    {
      name: "Dr. Mohan Kumar Kesarla",
      title: "Investigador Titular A de TC",
      institution: "Materials Science Laboratories, ICF-UNAM Mexico",
      image: "/images/convenors/mohan-kumar-kesarla.png",
    },
    {
      name: "Dr. Kogularasu Sakthivel",
      title: "Assistant Professor",
      institution: "Institute of Environmental Toxin and Emerging Contaminant, Cheng Shiu University, Taiwan",
      image: "/images/convenors/kogularasu-sakthivel.png",
      imagePosition: "center 20%",
      imageScale: 1.3,
    },
    {
      name: "Dr. Triveni R. Mandlimath",
      title: "Assistant Professor",
      institution: "Department of Chemistry, VIT-AP University",
      image: "/images/convenors/triveni-rajashekhar.avif",
    },
  ],
  coConvenors: [
    {
      name: "Dr. Tufan Ghosh",
      title: "Associate Professor",
      institution: "Department of Chemistry, VIT-AP University",
      image: "/images/committee/tufan-ghosh.avif",
    },
    {
      name: "Dr. Sangeeta Adhikari",
      title: "Associate Professor",
      institution: "Department of Chemistry, VIT-AP University",
      image: "/images/committee/sangeeta-adhikari.avif",
    },
    {
      name: "Dr. Dasari Bosu Babu",
      title: "Assistant Professor",
      institution: "Department of Chemistry, VIT-AP University",
      image: "/images/committee/dasari-bosu-babu.avif",
    },
    {
      name: "Dr. Shailja Jain",
      title: "Assistant Professor",
      institution: "Department of Chemistry, VIT-AP University",
      image: "/images/committee/shailja-jain.avif",
    },
    {
      name: "Dr. Naveen Kumar Reddy Bogireddy",
      title: "Investigador Asociado C",
      institution: "Materials Science Laboratories, ICF-UNAM Mexico",
      image: "/images/committee/naveen-kumar-reddy.png",
    },
  ],
};

const organizingCommittee: {
  chemistry: { name: string; title: string; institution?: string }[];
  physics: { name: string; title: string; institution?: string }[];
} = {
  chemistry: [
    { name: "Dr. Paramasivam R", title: "Professor" },
    { name: "Prof. Selvakumar Karuthapandi", title: "Professor" },
    { name: "Dr. Naga Prasad Puvvada", title: "Associate Professor" },
    { name: "Dr. T Ramana", title: "Associate Professor" },
    { name: "Dr. Chalasani Rajesh", title: "Associate Professor" },
    { name: "Dr. Dripta De Joarder", title: "Associate Professor" },
    { name: "Dr. Sachil Sharma", title: "Associate Professor" },
    { name: "Dr. Rajarshi Sarkar", title: "Associate Professor" },
    { name: "Dr. Muthu Prabhu S", title: "Assistant Professor" },
    { name: "Dr. Manas Ranjan Dash", title: "Associate Professor" },
    { name: "Dr. A V Narendra Kumar", title: "Associate Professor" },
    { name: "Dr. Sabeel M Basheer", title: "Assistant Professor" },
    { name: "Dr. Soumyakanta Prusty", title: "Assistant Professor" },
    { name: "Dr. Debakanta Tripathy", title: "Assistant Professor" },
    { name: "Dr. V V Sreenivasu M", title: "Assistant Professor" },
    { name: "Dr. Moru Satyanarayana", title: "Assistant Professor" },
    { name: "Dr. Sandhya Sadanandan", title: "Assistant Professor" },
    { name: "Dr. Turbasu Sengupta", title: "Assistant Professor" },
    { name: "Dr. Ritambhara Sharma", title: "Assistant Professor" },
    { name: "Dr. Bibhab Bandhu Mazumdar", title: "Assistant Professor" },
    { name: "Dr. Gangadhar Pamarthi", title: "Assistant Professor" },
    { name: "Dr. Koteswara Rao Gorantla", title: "Assistant Professor" },
    { name: "Dr. Rajashree Naik", title: "Assistant Professor" },
    { name: "Dr. B. V. Gokulnath", title: "Assistant Professor" },
    { name: "Dr. Tathagata Kar", title: "Investigador Asociado C", institution: "ICF-UNAM Mexico" },
  ],
  physics: [
    { name: "Dr. K Senthil", title: "Professor HAG" },
    { name: "Dr. Virendra Kumar Verma", title: "Associate Professor" },
    { name: "Dr. Prabhakaran Thandapani", title: "Associate Professor" },
    { name: "Dr. M. Muneeswaran", title: "Associate Professor" },
    { name: "Dr. Sudharshan Vadnala", title: "Associate Professor" },
    { name: "Dr. Lakshmi Sowjanya Pali", title: "Assistant Professor" },
    { name: "Dr. S Dasaradha Rama Rao", title: "Assistant Professor" },
    { name: "Dr. Nallamuthu S", title: "Assistant Professor" },
    { name: "Dr. Dwarasala Adilakshmi", title: "Assistant Professor" },
  ],
};

const advisoryBoard: {
  international: AdvisoryMember[];
  national: AdvisoryMember[];
} = {
  international: [
    { name: "Dr. Juan Carlos Hidalgo Cuellar", title: "ICF-National Autonomous University of Mexico (UNAM)", country: "Mexico", flag: "🇲🇽", image: "/images/advisory/juan-carlos-hidalgo.jpeg" },
    { name: "Prof. Guo-Ping Chang-Chien", title: "CENTER, Cheng Shiu University", country: "Taiwan", flag: "🇹🇼", image: "/images/advisory/guo-ping-chang-chien.png" },
    { name: "Dr. Antonio M. Juarez Reyes", title: "ICF-National Autonomous University of Mexico (UNAM)", country: "Mexico", flag: "🇲🇽", image: "/images/advisory/antonio-juarez-reyes.jpeg" },
    { name: "Prof. Maximilian Fichtner", title: "Helmholtz Institute Ulm (HIU), KIT", country: "Germany", flag: "🇩🇪", image: "/images/speakers/image2.jpeg" },
    { name: "Prof. Yung-Lung Chen", title: "Chang Gung University", country: "Taiwan", flag: "🇹🇼", image: "/images/advisory/yung-lung-chen-new.png", imagePosition: "center 30%" },
    { name: "Prof. Praveen Sekhar", title: "Washington State University", country: "USA", flag: "🇺🇸", image: "/images/advisory/praveen-sekhar.jpeg" },
    { name: "Prof. Do-Heyoung Kim", title: "Chonnam National University", country: "Republic of Korea", flag: "🇰🇷", image: "/images/speakers/image3.jpeg", imagePosition: "center 20%" },
    { name: "Prof. Johannes Kastner", title: "University of Stuttgart", country: "Germany", flag: "🇩🇪", image: "/images/speakers/kastner.png", imagePosition: "center 30%" },
    { name: "Dr. Chien-Hsing Wu", title: "Kaohsiung Chang Gung Memorial Hospital", country: "Taiwan", flag: "🇹🇼", image: "/images/advisory/chien-hsing-wu.png", imagePosition: "center 30%" },
    { name: "Dr. Nilesh Chodankar", title: "Khalifa University", country: "UAE", flag: "🇦🇪", image: "/images/speakers/image18.jpeg", imagePosition: "center 10%" },
    { name: "Prof. Hugo Olvera-Vargas", title: "National Autonomous University of Mexico (UNAM)", country: "Mexico", flag: "🇲🇽", image: "/images/advisory/hugo-olvera-vargas.png", imagePosition: "center 25%", imageScale: 1.3 },
    { name: "Dr. Shen-Ming Chen", title: "National Taipei University of Technology", country: "Taiwan", flag: "🇹🇼", image: "/images/advisory/shen-ming-chen.png" },
    { name: "Dr. Ganesan Elumalai", title: "N.E.CHEMCAT", country: "Japan", flag: "🇯🇵", image: "/images/advisory/ganesan-elumalai-new.png" },
  ],
  national: [
    { name: "Dr. T. Gnanasekaran", title: "Editor: Journal of Alloys and Compounds", country: "India", flag: "🇮🇳", image: "/images/advisory/t-gnanasekaran.png" },
    { name: "Prof. S. Sampath", title: "IISc Bangalore", country: "India", flag: "🇮🇳", image: "/images/speakers/image1.jpeg" },
    { name: "Prof. Swapan K. Pati", title: "JNCASR Bangalore", country: "India", flag: "🇮🇳", image: "/images/speakers/image4.jpeg" },
    { name: "Prof. S. Vasudevan", title: "CECRI Karaikudi", country: "India", flag: "🇮🇳", image: "/images/speakers/image8.png", imagePosition: "center 30%" },
    { name: "Prof. Vivek Polshettiwar", title: "TIFR Mumbai", country: "India", flag: "🇮🇳", image: "/images/speakers/image5.jpeg" },
    { name: "Prof. Ravi Kumar N V", title: "IIT Madras", country: "India", flag: "🇮🇳", image: "/images/speakers/image7.jpeg" },
    { name: "Dr. Rajesh Ganesan", title: "IGCAR Kalpakkam", country: "India", flag: "🇮🇳", image: "/images/advisory/rajesh-ganesan.png" },
    { name: "Dr. Sailaja Krishnamurthy", title: "CSIR-NCL Pune", country: "India", flag: "🇮🇳", image: "/images/speakers/image10.png" },
    { name: "Prof. Shobit Omar", title: "IIT Kanpur", country: "India", flag: "🇮🇳", image: "/images/speakers/image13.jpeg", imagePosition: "center 30%" },
    { name: "Prof. K. Sathiyanarayanan", title: "VIT Chennai", country: "India", flag: "🇮🇳", image: "/images/advisory/k-sathiyanarayanan.jpeg" },
    { name: "Prof. Edamana Prasad", title: "IIT Madras", country: "India", flag: "🇮🇳", image: "/images/advisory/edamana-prasad.jpeg" },
    { name: "Prof. Geetha Manivasagam", title: "VIT Vellore", country: "India", flag: "🇮🇳", image: "/images/advisory/geetha-manivasagam.jpeg", imagePosition: "center 15%", imageScale: 1.25 },
    { name: "Prof. K. Ashok Kumar", title: "VIT Vellore", country: "India", flag: "🇮🇳", image: "/images/advisory/k-ashok-kumar.jpeg", imagePosition: "center 20%", imageScale: 1.05 },
  ],
};

/* ------------------------------------------------------------------ */
/*  TABS CONFIG                                                        */
/* ------------------------------------------------------------------ */

type TabKey = "patrons" | "convenors" | "organizing" | "advisory";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "patrons", label: "Patrons", icon: <Crown className="w-4 h-4" /> },
  { key: "advisory", label: "Advisory Board", icon: <Globe className="w-4 h-4" /> },
  { key: "convenors", label: "Convenors", icon: <Briefcase className="w-4 h-4" /> },
  { key: "organizing", label: "Organizing Committee", icon: <Users className="w-4 h-4" /> },
];

/* ------------------------------------------------------------------ */
/*  REUSABLE CARD COMPONENTS                                           */
/* ------------------------------------------------------------------ */

function MemberCard({
  name,
  title,
  institution,
  size = "default",
  image,
  imagePosition,
  imageScale,
}: {
  name: string;
  title: string;
  institution?: string;
  size?: "hero" | "large" | "default" | "compact";
  image?: string;
  imagePosition?: string;
  imageScale?: number;
}) {
  const sizeStyles = {
    hero: "p-8 border-2 border-[var(--accent)]/40 bg-gradient-to-br from-[var(--primary)] to-[var(--blue)] text-white shadow-xl",
    large: "p-6 border border-[var(--accent)]/30 bg-white shadow-lg",
    default: "p-5 border border-gray-200 bg-white shadow-md",
    compact: "p-4 border border-gray-200 bg-white shadow-sm",
  };

  const nameStyles = {
    hero: "text-xl md:text-2xl font-bold",
    large: "text-lg font-bold text-[var(--primary)]",
    default: "text-base font-semibold text-[var(--primary)]",
    compact: "text-sm font-semibold text-[var(--primary)]",
  };

  const titleStyles = {
    hero: "text-[var(--accent-light)] text-base mt-2",
    large: "text-[var(--gray-600)] text-sm mt-1.5",
    default: "text-[var(--gray-600)] text-sm mt-1",
    compact: "text-[var(--gray-600)] text-xs mt-1",
  };

  const institutionStyles = {
    hero: "text-gray-300 text-sm mt-1",
    large: "text-[var(--blue-light)] text-xs mt-1 font-medium",
    default: "text-[var(--blue-light)] text-xs mt-0.5 font-medium",
    compact: "text-[var(--blue-light)] text-xs mt-0.5",
  };

  // Define image sizes based on card size
  const imageSizes = {
    hero: "w-40 h-40",
    large: "w-32 h-32",
    default: "w-20 h-20",
    compact: "w-16 h-16",
  };

  return (
    <div
      className={`rounded-xl hover-card transition-all duration-300 ${sizeStyles[size]}`}
    >
      {/* Image for advisory board members */}
      {image && (
        <div className="flex items-center justify-center mb-3">
          <div className={`${imageSizes[size]} rounded-full overflow-hidden shadow-md ring-2 ring-[var(--accent)]/20`}>
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              style={{
                ...(imagePosition ? { objectPosition: imagePosition } : {}),
                ...(imageScale ? { transform: `scale(${imageScale})` } : {}),
              }}
              loading="lazy"
            />
          </div>
        </div>
      )}
      {!image && size === "hero" && (
        <div className="flex items-center justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
            <Crown className="w-7 h-7 text-[var(--accent)]" />
          </div>
        </div>
      )}
      {!image && size === "large" && (
        <div className="flex items-center justify-center mb-3">
          <div className="w-10 h-10 rounded-full bg-[var(--accent)]/10 flex items-center justify-center">
            <Award className="w-5 h-5 text-[var(--accent)]" />
          </div>
        </div>
      )}
      <div className={size === "hero" || size === "large" || image ? "text-center" : ""}>
        <p className={nameStyles[size]}>{name}</p>
        <p className={titleStyles[size]}>{title}</p>
        {institution && <p className={institutionStyles[size]}>{institution}</p>}
      </div>
    </div>
  );
}

function SectionLabel({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-6 mt-2">
      {icon && (
        <div className="w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold text-[var(--primary)] tracking-tight">{children}</h3>
      <div className="flex-1 h-px bg-gradient-to-r from-[var(--accent)]/40 to-transparent ml-3" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  TAB CONTENT                                                        */
/* ------------------------------------------------------------------ */

function PatronsTab() {
  return (
    <div id="patrons" className="space-y-10">
      {/* Chief Patron */}
      <div>
        <SectionLabel icon={<Crown className="w-4 h-4 text-[var(--accent)]" />}>
          Chief Patron
        </SectionLabel>
        <div className="max-w-lg mx-auto">
          <MemberCard
            name={patronsData.chiefPatron.name}
            title={patronsData.chiefPatron.title}
            institution={patronsData.chiefPatron.institution}
            size="hero"
            image={patronsData.chiefPatron.image}
          />
        </div>
      </div>

      {/* Patrons */}
      <div>
        <SectionLabel icon={<Award className="w-4 h-4 text-[var(--accent)]" />}>
          Patrons
        </SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {patronsData.patrons.map((p) => (
            <MemberCard
              key={p.name}
              name={p.name}
              title={p.title}
              institution={p.institution}
              size="large"
              image={p.image}
              imagePosition={p.imagePosition}
              imageScale={p.imageScale}
            />
          ))}
        </div>
      </div>

      {/* Co-Patrons */}
      <div>
        <SectionLabel icon={<Users className="w-4 h-4 text-[var(--accent)]" />}>
          Co-Patrons
        </SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {patronsData.coPatrons.map((p) => (
            <MemberCard
              key={p.name}
              name={p.name}
              title={p.title}
              institution={p.institution}
              size="large"
              image={p.image}
              imagePosition={p.imagePosition}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ConvenorsTab() {
  return (
    <div className="space-y-10">
      {/* Convenors */}
      <div>
        <SectionLabel icon={<Briefcase className="w-4 h-4 text-[var(--accent)]" />}>
          Convenors
        </SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {convenorsData.convenors.map((c) => (
            <MemberCard
              key={c.name}
              name={c.name}
              title={c.title}
              institution={c.institution}
              size="large"
              image={c.image}
              imagePosition={c.imagePosition}
              imageScale={c.imageScale}
            />
          ))}
        </div>
      </div>

      {/* Co-Convenors */}
      <div>
        <SectionLabel icon={<Users className="w-4 h-4 text-[var(--accent)]" />}>
          Co-Convenors
        </SectionLabel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {convenorsData.coConvenors.map((c) => (
            <MemberCard
              key={c.name}
              name={c.name}
              title={c.title}
              institution={c.institution}
              size="default"
              image={c.image}
              imagePosition={c.imagePosition}
              imageScale={c.imageScale}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function OrganizingTab() {
  return (
    <div className="space-y-10">
      {/* Chemistry Department */}
      <div>
        <SectionLabel icon={<Users className="w-4 h-4 text-[var(--accent)]" />}>
          Department of Chemistry
        </SectionLabel>
        <p className="text-sm text-[var(--gray-600)] mb-6 -mt-3 ml-11">
          VIT-AP University (unless otherwise noted)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {organizingCommittee.chemistry.map((m) => (
            <MemberCard
              key={m.name}
              name={m.name}
              title={m.title}
              institution={m.institution}
              size="compact"
            />
          ))}
        </div>
      </div>

      {/* Physics Department */}
      <div>
        <SectionLabel icon={<Users className="w-4 h-4 text-[var(--accent)]" />}>
          Department of Physics
        </SectionLabel>
        <p className="text-sm text-[var(--gray-600)] mb-6 -mt-3 ml-11">
          VIT-AP University
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {organizingCommittee.physics.map((m) => (
            <MemberCard
              key={m.name}
              name={m.name}
              title={m.title}
              institution={m.institution}
              size="compact"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AdvisoryTab() {
  return (
    <div className="space-y-10">
      {/* International */}
      <div>
        <SectionLabel icon={<Globe className="w-4 h-4 text-[var(--accent)]" />}>
          International Advisory Board
        </SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advisoryBoard.international.map((m) => (
            <div
              key={m.name}
              className="p-5 rounded-xl border border-gray-200 bg-white shadow-md hover-card transition-all duration-300 text-center"
            >
              {m.image && (
                <div className="flex items-center justify-center mb-3">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-md ring-2 ring-[var(--blue)]/20">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      style={{
                        ...(m.imagePosition ? { objectPosition: m.imagePosition } : {}),
                        ...(m.imageScale ? { transform: `scale(${m.imageScale})` } : {}),
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              <p className="text-base font-semibold text-[var(--primary)]">{m.name}</p>
              <p className="text-sm text-[var(--gray-600)] mt-1 mb-1.5">{m.title}</p>
              {m.country && m.flag && (
                <div className="flex items-center justify-center gap-1.5 text-sm text-[var(--gray-600)] mt-1">
                  <MapPin className="w-4 h-4 text-[#c8a951] flex-shrink-0" />
                  <span>
                    {m.flag} {m.country}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* National */}
      <div>
        <SectionLabel icon={<GraduationCap className="w-4 h-4 text-[var(--accent)]" />}>
          National Advisory Board
        </SectionLabel>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {advisoryBoard.national.map((m) => (
            <div
              key={m.name}
              className="p-5 rounded-xl border border-gray-200 bg-white shadow-md hover-card transition-all duration-300 text-center"
            >
              {m.image && (
                <div className="flex items-center justify-center mb-3">
                  <div className="w-28 h-28 rounded-full overflow-hidden shadow-md ring-2 ring-[var(--teal)]/20">
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                      style={{
                        ...(m.imagePosition ? { objectPosition: m.imagePosition } : {}),
                        ...(m.imageScale ? { transform: `scale(${m.imageScale})` } : {}),
                      }}
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              <p className="text-base font-semibold text-[var(--primary)]">{m.name}</p>
              <p className="text-sm text-[var(--gray-600)] mt-1 mb-1.5">{m.title}</p>
              {m.country && m.flag && (
                <div className="flex items-center justify-center gap-1.5 text-sm text-[var(--gray-600)] mt-1">
                  <MapPin className="w-4 h-4 text-[#c8a951] flex-shrink-0" />
                  <span>
                    {m.flag} {m.country}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN COMPONENT                                                     */
/* ------------------------------------------------------------------ */

export default function Committee() {
  const [activeTab, setActiveTab] = useState<TabKey>("patrons");

  // Listen for tab switch events from Navbar and handle initial hash
  useEffect(() => {
    const tabKeys: TabKey[] = ["patrons", "advisory", "convenors", "organizing"];

    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.section === "committee" && typeof detail.tab === "number") {
        const key = tabKeys[detail.tab];
        if (key) setActiveTab(key);
      }
    };

    // Check for hash on initial mount
    const handleHash = () => {
      const hash = window.location.hash;
      const tabMatch = hash.match(/committee-tab-(\d+)/);
      if (tabMatch) {
        const tabIndex = parseInt(tabMatch[1], 10);
        if (tabIndex >= 0 && tabIndex < tabKeys.length) {
          setActiveTab(tabKeys[tabIndex]);
        }
      }
    };

    // Handle hash on mount
    handleHash();

    window.addEventListener("switchTab", handler);
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("switchTab", handler);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "patrons":
        return <PatronsTab />;
      case "convenors":
        return <ConvenorsTab />;
      case "organizing":
        return <OrganizingTab />;
      case "advisory":
        return <AdvisoryTab />;
    }
  };

  return (
    <section id="committee" className="py-20 bg-[var(--gray-50)] pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4">
            Organizing Committee
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-[var(--gray-600)] max-w-2xl mx-auto text-base">
            Meet the distinguished academics and researchers driving ICRAM 2026.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`
                flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300
                ${activeTab === tab.key
                  ? "bg-gradient-to-r from-[var(--primary)] to-[var(--blue)] text-white shadow-lg shadow-[var(--primary)]/25 scale-105"
                  : "bg-white text-[var(--gray-600)] border border-gray-200 hover:border-[var(--accent)] hover:text-[var(--primary)] hover:shadow-md"
                }
              `}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Gold indicator bar */}
        <div className="relative mb-10">
          <div className="h-1 bg-gray-200 rounded-full" />
          <div
            className="absolute top-0 h-1 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)] transition-all duration-500"
            style={{
              width: `${100 / tabs.length}%`,
              left: `${(tabs.findIndex((t) => t.key === activeTab) * 100) / tabs.length}%`,
            }}
          />
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in" key={activeTab}>
          {renderContent()}
        </div>
      </div>
    </section>
  );
}
