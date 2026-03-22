"use client";

import { useState, useEffect } from "react";
import { MapPin, Award, X, GraduationCap, ChevronRight, ChevronLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Speaker {
  name: string;
  title: string;
  awards: string[];
  institution: string;
  country: string;
  flag: string;
  initials: string;
  color: string;
  image?: string;
  profile?: string;
  imagePosition?: string;
  imageScale?: number;
}

const speakers: Speaker[] = [
  {
    name: "Prof. S. Sampath",
    title: "FNA, FNAE, FTWAS",
    awards: ["Shanti Swarup Bhatnagar Awardee 2006"],
    institution: "Indian Institute of Science (IISc) Bangalore",
    country: "India",
    flag: "🇮🇳",
    initials: "SS",
    color: "from-blue to-blue-light",
    image: "/images/speakers/image1.jpeg",
    profile: "Srinivasan Sampath is a Professor at the Department of Inorganic and Physical Chemistry of the Indian Institute of Science, Bangalore, India. His group's current research interests revolve around understanding interfacial characteristics involving layered materials including chalcogenides, organic thin films, molten electrolytes, and other nanostructures. He is an elected fellow of the Science and Engineering Academies in India and The World Academy of Sciences (TWAS). He has published ~ 235 research articles in peer reviewed journals and has six granted patents to his credit. He is the recipient of several prestigious awards which includes the Shanti Swarup Bhatnagar award in 2006.",
  },
  {
    name: "Prof. Maximilian Fichtner",
    title: "Executive Director & Head of Solid-State Chemistry",
    awards: [],
    institution: "Helmholtz Institute Ulm (HIU), KIT",
    country: "Germany",
    flag: "🇩🇪",
    initials: "MF",
    color: "from-primary to-blue",
    image: "/images/speakers/image2.jpeg",
    profile: "Prof. Dr. Maximilian Fichtner is the Executive Director of the Helmholtz Institute Ulm (HIU) and Head of the Solid-State Chemistry Department, where he leads cutting edge research on advanced materials for electrochemical energy storage. He is also leading the Research Unit for Energy Storage Systems at the Institute of Nanotechnology/Karlsruhe Institute of Technology (KIT). He is Full professor for Solid-State Chemistry at the Ulm University und Honorary professor at the University of Wales in Swansea. Professor Fichtner is an internationally recognized expert in energy storage materials, solid-state batteries, hydrogen storage, and post-lithium battery technologies. He initiated and served as Spokesperson of the Cluster of Excellence 'POLiS – Post Lithium Storage', which focuses on developing next-generation sustainable energy storage systems. Prof. Fichtner is the author and co-author of approximately 450 refereed publications, conference and book contributions, holds 20 patents, and is the editor of a book on magnesium batteries. His scientific contributions have earned him significant recognition, with an h-index of 78 (Scopus).",
  },
  {
    name: "Prof. Do-Heyoung Kim",
    title: "Advisory Editorial Board Member: Applied Surface Science",
    awards: [],
    institution: "Chonnam National University",
    country: "Republic of Korea",
    flag: "🇰🇷",
    initials: "DK",
    color: "from-blue-light to-teal",
    image: "/images/speakers/image3.jpeg",
    imagePosition: "center 20%",
    profile: "Dr. Do-Heyoung Kim is a Full Professor in the School of Chemical Engineering at Chonnam National University in South Korea. He obtained his Ph.D. at the Department of Chemical Engineering at Rensselaer Polytechnic Institute (Troy, USA) in 1993. Prior to his joining in Chonnam National University, he worked as a senior researcher at the central research centre of LG Semicon after his postdoctoral research at North Carolina State University. His research interests are applications of atomic layer deposition for IC devices, supercapacitors, batteries, solar cells, and sensors. Prof. Kim is an Advisory Editorial Board Member in Applied Surface Science Journal.",
  },
  {
    name: "Prof. Swapan K. Pati",
    title: "FNASc, FTWAS, FNA",
    awards: ["Shanti Swarup Bhatnagar Awardee 2010"],
    institution: "JNCASR",
    country: "India",
    flag: "🇮🇳",
    initials: "SP",
    color: "from-primary to-blue-light",
    image: "/images/speakers/image4.jpeg",
    profile: "Dr. Swapan K Pati is a Professor in Theoretical Sciences Unit, School of Advanced Materials at Jawaharlal Nehru Centre for Advanced Scientific Research, Bangalore. He obtained his PhD from Indian Institute of Science, Bangalore followed by postdoctoral work in Physics dept at University of California, Davis, and in Chemistry dept in Northwestern University, USA. He has received MRSI (2006), CRSI bronze (2007) and BM Birla medals (2008); Swarnajayanthi Fellowship (2007-12), S. S. Bhatnagar award (2010) and The World Academy of Sciences (TWAS) award (2012). He is a recipient of J. C. Bose national fellowship in 2013, in 2018 and in 2023. He is an elected fellow of Indian Academy of Sciences (2009), National Academy of Sciences in India (2010), TWAS (2015) and Indian National Science Academy (2018). His research interests include quantum many-body phenomena and quantum chemistry related problems to understand the structure property relationships of a large classes of systems, ranging from simple molecules to advanced materials.",
  },
  {
    name: "Prof. Vivek Polshettiwar",
    title: "FRSC, FNASc, FASc",
    awards: ["Shanti Swarup Bhatnagar Awardee 2024"],
    institution: "TIFR",
    country: "India",
    flag: "🇮🇳",
    initials: "VP",
    color: "from-blue to-primary",
    image: "/images/speakers/image5.jpeg",
    profile: "Prof. Vivek Polshettiwar is Professor of Chemistry at TIFR, Mumbai, where his research lies at the interface of nanomaterials and catalysis, with a focus on solar energy harvesting and the conversion of CO₂ into fuels and chemicals. He is the inventor of dendritic fibrous nanosilica (DFNS) and plasmonic Black Gold. His work spans materials chemistry, plasmonics, defect engineering, and strong metal–support interactions. He has published nearly 150 peer-reviewed articles and holds 17 national and international patents. He has over 19,886 citations with an h-index of 70. His work has been recognized with numerous prestigious honours, including the IUPAC CHEMRAWN VII Prize for Green Chemistry, the MRSI and CRSI Medals, and the Falling Walls Award, Germany (Winner in Physical Sciences, 2023). In 2024, he received the Shanti Swarup Bhatnagar Award, one of India's highest science honour.",
  },
  {
    name: "Prof. Johannes Kästner",
    title: "Vice Head & Group Leader, Institute for Theoretical Chemistry",
    awards: [],
    institution: "University of Stuttgart",
    country: "Germany",
    flag: "🇩🇪",
    initials: "JK",
    color: "from-teal to-blue",
    image: "/images/speakers/kastner.png",
    imagePosition: "center 30%",
    profile: "Johannes Kästner (born 1978) studied Chemistry and Physics at Vienna University of Technology (Austria). He received is doctorate at Clausthal University of Technology, Germany, in theoretical physics with Peter E. Blöchl in 2004. After a post-doc with Walter Thiel, he moved to the Daresbury Laboratory of the Science and Technology Facilities Council (UK) where he became staff scientist. In 2008 he became assistant professor at the University of Stuttgart, since 2014 he is full professor there. He works on the simulation of reaction mechanisms, quantum tunnelling, and machine learning in computational science.",
  },
  {
    name: "Prof. Ravi Kumar N V",
    title: "FEcers (Hon), Editor: Scientific Reports",
    awards: [],
    institution: "IIT Madras",
    country: "India",
    flag: "🇮🇳",
    initials: "RK",
    color: "from-blue-light to-primary",
    image: "/images/speakers/image7.jpeg",
    profile: "Prof. Ravi Kumar obtained his doctorate in natural sciences from the Max Planck Institute for Metals Research, Stuttgart, Germany in 2004. He continued in the same institute as a postdoctoral researcher and guest scientist for 6 years. In 2007, he joined the Dept of Metallurgical and Materials Engg., at IIT Madras. He has been a visiting Professor at several international universities. His ongoing & past international collaborations include institutions in Serbia, France, Germany, Italy, Russia, and Japan. Prof. Ravi Kumar has executed several sponsored projects and published 137 peer-reviewed international papers. He is the Editor for the journals; Scientific Reports, Surface Innovations, International Journal of Applied Ceramic Technology and Associate Editor for Advances in Materials Science & Engineering.",
  },
  {
    name: "Prof. S Vasudevan",
    title: "FRSC, FAIHEM, CChem.",
    awards: [],
    institution: "CECRI",
    country: "India",
    flag: "🇮🇳",
    initials: "SV",
    color: "from-blue-light to-primary",
    image: "/images/speakers/image8.png",
    imagePosition: "center 30%",
    profile: "Prof. Vasudevan Subramanian, Emeritus Scientist at the CSIR-Central Electrochemical Research Institute and Professor at the Academy of Scientific and Innovative Research, New Delhi. His research has focused on novel electrocatalysts, electrolyser anode/cathode, electrochemical water treatment systems, and synthesis of inorganic oxidants. He has also been actively engaged in innovative engineering of PEM based electrolyser, alkaline electrolyser, and magnesium organic reserve batteries. He has authored over 120 scientific papers, has two dozen technical patents to his credit, transferred many technologies to industries and has over three decades of research/teaching experience in India's premier R&D institution. He is on the editorial boards and associate editor of many prestigious journals.",
  },
  {
    name: "Prof. Hugo Olvera Vargas",
    title: "Editor: Journal of Environmental Chemical Engineering",
    awards: [],
    institution: "UNAM",
    country: "Mexico",
    flag: "🇲🇽",
    initials: "HV",
    color: "from-primary to-teal",
    image: "/images/speakers/image9.jpeg",
    imagePosition: "center 15%",
    imageScale: 1.3,
    profile: "Dr. Hugo Olvera-Vargas is an Associate Professor at the Institute for Renewable Energies (IER) of the National Autonomous University of Mexico (UNAM). His research focuses on environmental electrochemistry and advanced oxidation processes, including mechanistic studies of electrochemical advanced oxidation processes, integrated treatment strategies for hard-to-treat industrial wastewaters, the design and synthesis of electrode materials, electrochemical wastewater refining into energy and value-added chemicals. Dr. Olvera-Vargas has published more than 50 peer-reviewed articles and three book chapters and is a contributor to several patents (h-index 37, Google Scholar). He is a Level II member of Mexico's National System of Researchers (SNI) and currently serves as an editor of the Journal of Environmental Chemical Engineering (Elsevier, IF 7.2). Among his distinctions, he received the Early Career Researcher Award at the VI Ibero-American Conference on Advanced Oxidation Processes (Brazil, 2024).",
  },
  {
    name: "Dr. Sailaja Krishnamurthy",
    title: "Chief Scientist",
    awards: [],
    institution: "CSIR-NCL Pune",
    country: "India",
    flag: "🇮🇳",
    initials: "SK",
    color: "from-blue to-teal",
    image: "/images/speakers/image10.png",
    profile: "Dr. Sailaja Krishnamurty, Chief Scientist at CSIR-NCL Pune. She embarked her research journey at the National Chemical Laboratory, Pune under the esteemed guidance of Prof. Sourav Pal, where her doctoral work was dedicated to elucidating the catalytic properties of zeolites through first-principles methodologies. She was awarded with CRSI bronze Medal in 2017 and MEA post-doc fellowship. She has contributed 151 peer-reviewed publications, with a Google Scholar h-index of 28, reflecting the impact and recognition of her scientific contributions. Currently, her research focuses on theoretical modelling of redox reactions in fuel cells and solar cells and catalysis, employing DFT-based approaches to design carbon-based architectures for electrochemical applications and explore the activation of small molecules using atomic clusters.",
  },
  {
    name: "Prof. Zhenyou Li",
    title: "Principal Investigator",
    awards: [],
    institution: "Qingdao Institute of Bioenergy, Chinese Academy of Sciences",
    country: "China",
    flag: "🇨🇳",
    initials: "ZL",
    color: "from-primary to-blue-light",
    image: "/images/speakers/image11.jpeg",
    imagePosition: "center 20%",
    profile: "Dr. Zhenyou Li is a Professor and Principal Investigator of the Multivalent Batteries research group at the Qingdao Institute of Bioenergy and Bioprocess Technology (QIBEBT), Chinese Academy of Sciences (CAS). He received his Ph.D. in Materials Science from the University of Chinese Academy of Sciences in 2016, during which he spent two years as a visiting scholar at Heidelberg University. In 2017, he joined the Helmholtz Institute Ulm and Karlsruhe Institute of Technology as a research scientist, and later pursued his habilitation at Ulm University. In 2023, he returned to China and joined QIBEBT through the CAS Young Talents Program. His research focuses on multivalent (Mg, Ca) battery chemistries, including the development of cathode materials and electrolytes, as well as cathode materials for sodium-ion batteries.",
  },
  {
    name: "Prof. Annamalai Senthil Kumar",
    title: "FRSC, CChem.",
    awards: [],
    institution: "VIT Vellore",
    country: "India",
    flag: "🇮🇳",
    initials: "AK",
    color: "from-teal to-primary",
    image: "/images/speakers/image12.jpeg",
    profile: "Prof. Annamalai Senthil Kumar is a Senior Professor in the Department of Chemistry and researcher in CO2 Research and Green Technologies Centre at Vellore Institute of Technology (VIT), Tamil Nadu, India. His research spans interdisciplinary areas including nano-, bio- and molecular-electrochemistry, with special emphasis on chemically modified carbon nanomaterials for electrocatalysis, sensing and energy applications. He has authored more than 270 publications, with a Google Scholar h-index around 45. He has made significant contributions in developing redox-functionalized carbon electrodes for biosensor, environmental, and energy applications. He is an elected Fellow of the Royal Society of Chemistry (FRSC, UK). Since 2014 he has served on the Advisory Board of the journal The Analyst (RSC). He also holds the status of Chartered Chemist (CChem) with the Royal Society of Chemistry. Since 2025, he has been serving as the Vice President of SAEST, CSIR-CECRI, Karaikudi.",
  },
  {
    name: "Prof. Shobit Omar",
    title: "Head of Electroceramics Research Laboratory",
    awards: [],
    institution: "IIT Kanpur",
    country: "India",
    flag: "🇮🇳",
    initials: "SO",
    color: "from-blue to-primary",
    image: "/images/speakers/image13.jpeg",
    imagePosition: "center 30%",
    profile: "Prof. Shobit Omar completed his B.Tech. in Ceramic Engineering from IIT BHU and earned his MS and PhD in Materials Science & Engineering from the University of Florida. He conducted postdoctoral research at Risoe National Laboratory in Denmark and NIMS in Tsukuba, Japan. In 2011, he joined the Department of Materials Science & Engineering at IIT Kanpur as an Assistant Professor and is now a Professor in the same department. Prof. Omar also served as visiting faculty in the Materials Science & Engineering department at the University of Maryland, USA, from 2015-16. His research encompasses the electrically conductive properties of ceramic materials, structure-property correlations, and the development of solid oxide fuel cells, sodium-ion batteries, and supercapacitors. He has authored numerous research articles in international journals focused on materials related to energy storage and conversion devices.",
  },
  {
    name: "Prof. Raviraj Vankayala",
    title: "Associate Professor",
    awards: ["ACS Rising Stars Awardee 2024"],
    institution: "IIT Jodhpur",
    country: "India",
    flag: "🇮🇳",
    initials: "RV",
    color: "from-blue-light to-teal",
    image: "/images/speakers/image14.png",
    imagePosition: "center 20%",
    profile: "Raviraj Vankayala is currently working as an Associate Professor at Department of Bioscience and Bioengineering, IIT Jodhpur. His research interests include nanomedicine, biomaterials, theranostics, and drug delivery. He has published more than 65 papers in renowned journals. He earned his PhD degree in Chemistry from National Tsing Hua University (2012), Taiwan and his postdoctoral studies were performed at National Tsing Hua University (2015) and University of California Riverside (2017), USA. He secured prestigious DBT Ramalingaswami biomedical fellowship for the year 2018-2019. He has secured an Outstanding Researcher Award for his contributions in the field of Nanobiotechnology by IIT Jodhpur for the year 2021. He is currently serving as an Associate Editor for Frontiers in Drug Delivery journal and as an editorial board member for the Scientific Reports and Particle journals. He has secured the prestigious 2024 Rising Stars in Biological, Medicinal, and Pharmaceutical Chemistry by the American Chemical Society.",
  },
  {
    name: "Prof. K.S. Suresh",
    title: "Associate Professor",
    awards: [],
    institution: "IIT Roorkee",
    country: "India",
    flag: "🇮🇳",
    initials: "KS",
    color: "from-primary to-blue",
    image: "/images/speakers/image15.png",
    profile: "Dr. K.S. Suresh is an Associate Professor in the Department of Metallurgical and Materials Engineering at the Indian Institute of Technology (IIT) Roorkee, where he has been a faculty member since 2015. He received his PhD from IISc Bangalore and subsequently carried out postdoctoral research at NIMS, Japan. His research focuses on structure-processing-property relationships in advanced materials, with a particular emphasis on crystallographic texture as a key characterization tool. His research group employs multiscale texture analysis, including bulk texture via synchrotron and X-ray diffraction, microtexture using Electron Backscatter Diffraction (EBSD), and Transmission Kikuchi Diffraction (TKD) in SEM. These techniques are applied to investigate deformation mechanisms, recrystallization behaviour, and phase transformations in structural materials (e.g., Ti, Ni, Mg, and Al alloys) as well as functional materials such as shape memory alloys. Additionally, his work explores microstructure control in additive manufacturing.",
  },
  {
    name: "Prof. R. Arockia Kumar",
    title: "Associate Professor",
    awards: [],
    institution: "NIT Warangal",
    country: "India",
    flag: "🇮🇳",
    initials: "AK",
    color: "from-teal to-blue-light",
    image: "/images/speakers/arockia-kumar.png",
    imagePosition: "center 35%",
    profile: "Dr. R. Arockia Kumar is an Associate Professor in the Department of Metallurgical and Materials Engineering at National Institute of Technology Warangal. Dr. R. Arockia Kumar pursued his Ph.D from Korea Advanced Institute of Science & Technology (KAIST), Daejeon, Korea under the guidance of Prof. Joong Keun Park. During his Ph.D he focused on Shape Memory Properties of Ti-Nb alloy. Later he was a postdoctoral fellow in National Institute for Materials Science (NIMS) Japan where he received NIIMS young researcher award. He joined NIT Warangal in 2014. He has completed several projects from UGC-DAE, NTPC-NETRA, DST-SERB, AUSC, BHEL and he is currently handling two projects from DST and DST-SERB. His research focuses on friction stir processing, biodegradable alloys, shape memory alloys, and advanced materials processing.",
  },
  {
    name: "Prof. Anantharaj Sengeni",
    title: "Associate of Indian Academy of Sciences",
    awards: [],
    institution: "IIT Kanpur",
    country: "India",
    flag: "🇮🇳",
    initials: "AS",
    color: "from-blue to-blue-light",
    image: "/images/speakers/image17.jpeg",
    profile: "Dr. Anantharaj Sengeni is a faculty member in the Department of Chemistry at the Indian Institute of Technology Kanpur, where he leads the Laboratory for Electrocatalysis and Energy (LEE). His research focuses on electrocatalysis for sustainable energy conversion, particularly water splitting, oxygen electrocatalysis, and advanced electrode materials for electrolyzers and metal–air batteries. He has over a decade of experience in applied electrochemistry and solid-state chemistry, including postdoctoral research as a JSPS Fellow in Japan on metal chalcogenide electrocatalysts. He has authored 80+ research articles and 20+ review papers, receiving more than 14,800 citations with an h-index of 52. His work emphasizes scalable, earth-abundant electrocatalyst design. He completed his PhD in 2018 at Academy of Scientific and Innovative Research (AcSIR), CSIR – Central Electrochemical Research Institute, Karaikudi, India.",
  },
  {
    name: "Prof. Nilesh Chodankar",
    title: "Research Scientist",
    awards: [],
    institution: "Khalifa University",
    country: "UAE",
    flag: "🇦🇪",
    initials: "NC",
    color: "from-primary to-teal",
    image: "/images/speakers/image18.jpeg",
    imagePosition: "center 10%",
    profile: "Dr. Nilesh R. Chodankar completed a B.S. (2011), M.S. (2013), and Ph.D. (2016) in materials science from Shivaji University, India. He has been an assistant professor of energy and materials engineering at Dongguk University, South Korea. He is currently a scientist in Mechanical & Nuclear Engineering at Khalifa University, Abu Dhabi, UAE. His research focuses on the design and synthesis of functional materials, innovation of devices for electrochemical energy storage and conversion applications, including next-generation aqueous storage systems (for example, Zn-ion, Al-ion, and non-metal ion systems), supercapacitors, and electrocatalysts (water splitting). To date, he has co-authored more than 135 refereed journal articles, six domestic or international patents, several book chapters, edited two textbooks, and has over 9700 Google Scholar citations.",
  },
  {
    name: "Prof. Sandip Mandal",
    title: "Research Professor",
    awards: [],
    institution: "Chosun University",
    country: "Republic of Korea",
    flag: "🇰🇷",
    initials: "SM",
    color: "from-blue-light to-primary",
    image: "/images/speakers/image19.jpeg",
    imagePosition: "center 30%",
    profile: "Dr. Sandip is a Research Professor at the College of Dentistry and the Convergence Research Centre for the Treatment of Oral Soft Tissue Diseases (MRC), Chosun University, South Korea. Since 2021, he has also been serving as a full-time postdoctoral researcher at the School of Earth Sciences and Environmental Engineering, Gwangju Institute of Science and Technology (GIST), and at Chonnam National University, Gwangju, South Korea. He obtained both his M.Sc. and Ph.D. in Chemistry from the National Institute of Technology, Rourkela, India. Dr. Sandip has authored 51 research articles, holds three patents, and has contributed five book chapters. He is listed among the world's top 2% scientists and is recognized as a highly cited researcher. His research lies at the interface of environmental and materials engineering, with a strong focus on the design and development of multifunctional nanomaterials, metal–organic frameworks, and biomaterials.",
  },
];

function SpeakerSpotlight({ speakers, onSpeakerClick }: { speakers: Speaker[], onSpeakerClick: (speaker: Speaker) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % speakers.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [speakers.length, isPaused]);

  const currentSpeaker = speakers[currentIndex];

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % speakers.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + speakers.length) % speakers.length);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div
      className="mb-16 relative hidden lg:block"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-gradient-to-br from-primary/5 via-blue/5 to-teal/5 rounded-2xl overflow-hidden shadow-xl border border-gray-200/60">
        <div className={`h-2 w-full bg-gradient-to-r ${currentSpeaker.color} transition-all duration-300`} />

        <div className="p-8 md:p-10">
          <div className={`flex flex-col lg:flex-row gap-8 items-start transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {/* Speaker Image */}
            <div className="flex-shrink-0 mx-auto lg:mx-0">
              <div className="relative group cursor-pointer" onClick={() => onSpeakerClick(currentSpeaker)}>
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white group-hover:ring-primary/30 transition-all duration-300">
                  {currentSpeaker.image ? (
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={currentSpeaker.image}
                        alt={currentSpeaker.name}
                        className="w-full h-full object-cover"
                        style={{
                          ...(currentSpeaker.imagePosition ? { objectPosition: currentSpeaker.imagePosition } : {}),
                          ...(currentSpeaker.imageScale ? { transform: `scale(${currentSpeaker.imageScale})` } : {})
                        }}
                        loading="eager"
                      />
                    </div>
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${currentSpeaker.color} flex items-center justify-center text-white text-6xl font-bold`}>
                      {currentSpeaker.initials}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Speaker Info */}
            <div className="flex-1 min-w-0">
              <div className="mb-4">
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 hover:text-blue transition-colors cursor-pointer" onClick={() => onSpeakerClick(currentSpeaker)}>
                  {currentSpeaker.name}
                </h3>
                <p className="text-base text-gray-600 font-medium mb-2">{currentSpeaker.title}</p>

                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <GraduationCap className="w-4 h-4 text-blue" />
                    <span>{currentSpeaker.institution}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-gold" />
                    <span>{currentSpeaker.flag} {currentSpeaker.country}</span>
                  </div>
                </div>
              </div>

              {currentSpeaker.profile && (
                <div className="text-sm text-black leading-relaxed line-clamp-5 mb-4 text-justify">
                  {currentSpeaker.profile}
                </div>
              )}

              <button
                onClick={() => onSpeakerClick(currentSpeaker)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-blue text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <span>Read Full Profile</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-4 right-4 flex items-center gap-2">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Previous speaker"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            aria-label="Next speaker"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-1.5 pb-4">
          {speakers.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-primary' : 'w-1.5 bg-gray-300 hover:bg-gray-400'
                }`}
              aria-label={`Go to speaker ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SpeakerCard({
  speaker,
  index,
  onSelect,
}: {
  speaker: Speaker;
  index: number;
  onSelect: (speaker: Speaker) => void;
}) {
  return (
    <div
      className="group relative bg-white rounded-2xl shadow-md hover-card cursor-pointer overflow-hidden border border-gray-200/60"
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => onSelect(speaker)}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${speaker.color}`} />

      <div className="p-6 pt-6 flex flex-col items-center text-center">
        {/* Avatar with Image */}
        <div className="relative mb-4">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-300">
            {speaker.image ? (
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
                style={{
                  ...(speaker.imagePosition ? { objectPosition: speaker.imagePosition } : {}),
                  ...(speaker.imageScale ? { transform: `scale(${speaker.imageScale})` } : {})
                }}
                loading="lazy"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${speaker.color} flex items-center justify-center text-white text-3xl font-bold`}>
                {speaker.initials}
              </div>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-primary leading-tight mb-3 group-hover:text-blue transition-colors duration-300">
          {speaker.name}
        </h3>

        {/* Institution */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-1.5">
          <GraduationCap className="w-3.5 h-3.5 text-blue flex-shrink-0" />
          <span className="truncate max-w-[180px]">{speaker.institution}</span>
        </div>

        {/* Country */}
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
          <span>
            {speaker.flag} {speaker.country}
          </span>
        </div>

        {/* View more indicator */}
        <div className="mt-3 flex items-center gap-1 text-[11px] font-medium text-blue/60 group-hover:text-blue transition-colors duration-300">
          <span>View details</span>
          <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
}

function SpeakerModal({
  speaker,
  onClose,
}: {
  speaker: Speaker;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      style={{
        animation: 'modalBackdropFadeIn 0.3s ease-out forwards'
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Header with gradient */}
        <div
          className={`relative bg-gradient-to-br ${speaker.color} px-6 py-8 text-center`}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="flex flex-col md:flex-row items-center gap-6 text-left">
            {/* Speaker Image in Modal */}
            <div className="flex-shrink-0">
              {speaker.image ? (
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-white/40 shadow-2xl"
                  style={{
                    ...(speaker.imagePosition ? { objectPosition: speaker.imagePosition } : {}),
                    ...(speaker.imageScale ? { transform: `scale(${speaker.imageScale})` } : {})
                  }}
                  loading="eager"
                />
              ) : (
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white/20 border-4 border-white/40 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
                  {speaker.initials}
                </div>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{speaker.name}</h3>
              <p className="text-white/90 text-base mb-3">{speaker.title}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <div className="inline-flex items-center gap-1.5 text-sm text-white/90 bg-white/10 rounded-lg px-3 py-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>{speaker.institution}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm text-white/90 bg-white/10 rounded-lg px-3 py-1">
                  <MapPin className="w-4 h-4" />
                  <span>{speaker.flag} {speaker.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 pb-8 space-y-5">
          {/* Full Profile */}
          {speaker.profile && (
            <div>
              <div className="flex items-center gap-2 text-base font-semibold text-primary mb-3">
                <GraduationCap className="w-5 h-5 text-blue" />
                Profile
              </div>
              <div className="text-sm md:text-base text-black leading-relaxed space-y-3 text-justify">
                {speaker.profile.split('\n').map((paragraph, idx) => (
                  paragraph.trim() && <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  // Preload first 5 speaker images for better performance
  useEffect(() => {
    speakers.slice(0, 5).forEach(speaker => {
      if (speaker.image) {
        const img = new Image();
        img.src = speaker.image;
      }
    });
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedSpeaker) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedSpeaker]);

  return (
    <section id="speakers" className="py-20 bg-white pattern-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold font-semibold text-sm tracking-widest uppercase mb-3">
            Conference Speakers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4">
            Distinguished Speakers
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            Join us to hear from world-renowned researchers and thought leaders
            in advanced materials, chemistry, and engineering from across the
            globe.
          </p>
        </div>

        {/* Mobile Speaker Carousel - Full width cards */}
        <div className="lg:hidden mb-12 px-4">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {speakers.map((speaker, index) => (
                <CarouselItem key={index} className="pl-4">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200/60">
                    {/* Top accent bar */}
                    <div className={`h-2 w-full bg-gradient-to-r ${speaker.color}`} />

                    <div className="p-6">
                      {/* Speaker Image - Larger for mobile carousel */}
                      <div className="flex flex-col items-center text-center mb-4">
                        <div className="relative mb-4">
                          <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                            {speaker.image ? (
                              <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                                style={{
                                  ...(speaker.imagePosition ? { objectPosition: speaker.imagePosition } : {}),
                                  ...(speaker.imageScale ? { transform: `scale(${speaker.imageScale})` } : {})
                                }}
                                loading="lazy"
                              />
                            ) : (
                              <div className={`w-full h-full bg-gradient-to-br ${speaker.color} flex items-center justify-center text-white text-3xl font-bold`}>
                                {speaker.initials}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Name */}
                        <h3 className="text-xl font-bold text-primary mb-4 leading-tight">
                          {speaker.name}
                        </h3>

                        {/* Institution */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <GraduationCap className="w-4 h-4 text-blue" />
                          <span>{speaker.institution}</span>
                        </div>

                        {/* Country */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                          <MapPin className="w-4 h-4 text-gold" />
                          <span>{speaker.flag} {speaker.country}</span>
                        </div>

                        {/* View details button */}
                        <button
                          onClick={() => setSelectedSpeaker(speaker)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary to-blue text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group"
                        >
                          <span>View Full Profile</span>
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 sm:left-2 h-8 w-8 sm:h-12 sm:w-12 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-6 sm:[&_svg]:w-6" />
            <CarouselNext className="right-0 sm:right-2 h-8 w-8 sm:h-12 sm:w-12 [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-6 sm:[&_svg]:w-6" />
          </Carousel>

          {/* Swipe hint */}
          <div className="mt-4 text-center">
            <p className="text-gray-500 text-sm">Swipe to explore more speakers</p>
          </div>
        </div>

        {/* Speaker Spotlight - Rotating Highlight Box */}
        <SpeakerSpotlight speakers={speakers} onSpeakerClick={setSelectedSpeaker} />

        {/* Speakers Grid - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={index}
              speaker={speaker}
              index={index}
              onSelect={setSelectedSpeaker}
            />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-12 sm:gap-20">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary">19+</div>
            <div className="text-sm text-gray-500 mt-1.5">Speakers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary">15+</div>
            <div className="text-sm text-gray-500 mt-1.5">Presenting in Person</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-primary">8</div>
            <div className="text-sm text-gray-500 mt-1.5">Countries</div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}

      {/* Modal Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes modalBackdropFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}} />
    </section>
  );
}
