"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, FlaskConical, BookOpen, ImageIcon, X } from "lucide-react";

export default function VitApPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage("");
  };

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <main>
      <Navbar />
      <section className="relative py-32 bg-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="about-grid"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="#1e293b" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              About VIT-AP
            </h2>
            <div className="mt-3 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
          </div>

          {/* VIT-AP University Content */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                VIT-AP University
              </h3>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-black leading-relaxed text-justify">
                With a history of 40 years of innovation in education and research domains, VIT has been a
                forerunner in delivering quality education and contributing towards the nation building
                process. Consistently ranked among the top educational institutes in the country, the
                VIT group of institutions have been endeavoring relentlessly in their pursuit for knowledge
                and excellence in engineering and science education. In keeping up with this tradition, the
                leadership at VIT-AP University resonates a dynamic blend of academia-industry partnership
                with a vision of creating a competent work force of young generations to confront modern
                day challenges on par with some of the finest academic institutions in the world. The VIT-AP
                campus, poised to become one of the country&#39;s best campuses, offers several avenues to
                explore students&#39; interests, enables realizing core competencies, engages in life-long learning,
                inculcates broad-minded thinking, enthusiasm to face challenges and contribute solutions.
              </p>
            </div>
          </div>

          {/* School of Advanced Sciences (SAS) */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                About School of Advanced Sciences (SAS)
              </h3>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-black leading-relaxed mb-4 text-justify">
                The School of Advanced Sciences (SAS) is one of the seven Schools of VIT-AP University,
                and it houses the Departments of Mathematics, Physics, and Chemistry. Here, students are
                taught how to think critically through project-based learning (PBL) and not merely what to
                think. Students are encouraged to question, explore, and research throughout their studies,
                ranging across the various disciplines of sciences. Our School aims to provide a solid
                foundation in Natural Sciences, projecting the recent scientific and technological
                developments to the graduate, postgraduate, and Ph.D. students. We aspire to be a valuable
                contributor towards the nation&#39;s growth by producing highly skilled professionals and by
                engaging in cutting-edge research. SAS earnestly pursues a vision of providing local,
                regional, national, and international leadership in research and technology development. We
                believe in the quality of education and research with ethical and professional standards for a
                better tomorrow. Here, students make their choices based on their preferences and
                requirements that equip them with a balance of logical-thinking and problem-solving skills,
                which are essential to tackle today and tomorrow&#39;s professional challenges.
              </p>
              <p className="text-black leading-relaxed text-justify">
                The spectrum of research activities at SAS is extensive and distinct. The school has more
                than 40 registered faculties under the Research Grants in Engineering, Management, and
                Science (RGEMS); an initiative from VIT-AP University, to motivate research that can lead
                to R&amp;D projects. In collaboration with our faculty, undergraduate students pursue active
                interdisciplinary research through undergraduate research experience (URE) projects to make
                intellectual and creative contributions towards the advancement in science.
              </p>
            </div>
          </div>

          {/* Department of Chemistry */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Department of Chemistry
              </h3>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-black leading-relaxed mb-6 text-justify">
                Department of Chemistry offers M. Sc. Chemistry program at VIT-AP University. This
                programme provides ample opportunities for the students to choose courses from a broad
                spectrum of cutting-edge areas in addition to fundamentals of organic, inorganic, physical,
                analytical and computational chemistry. Sessions on improving technical skills, scientific
                writing, oral presentations and research expertise have been incorporated in the curriculum.
                Furthermore, the students will have the scope to pursue their post-graduation thesis work at
                various national and international institutions and industries. Overall, by integrating the in-
                depth core and elective courses, and research work, instructed and guided by highly qualified
                and well-experienced faculty members, students will gain the foundation and skill to advance
                their careers in higher studies and industry.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Programs Offered</h4>
              <ul className="list-disc pl-6 mb-6 text-black space-y-2">
                <li>M.Sc. Chemistry in collaboration with Mitsui Kinzoku Components India Pvt. Ltd. (MKCI)</li>
                <li>M.Sc. Chemistry</li>
                <li>M.Sc. Chemistry (Specialization in Pharmaceutical Chemistry)</li>
                <li>M.Sc. Chemistry (Specialization in Analytical Chemistry)</li>
                <li>Ph. D. Chemistry</li>
              </ul>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Career Opportunities</h4>
                <ul className="list-disc pl-6 text-black space-y-1 text-sm">
                  <li>Internship, placement and higher studies opportunities in reputed companies, national and international universities</li>
                  <li>100% students from previous academic years have secured internships and placements in renowned organizations such as Zifo, Aurobindo Pharma, Cipla, Mitsui Kinzoku Components India Pvt. Ltd., Microlabs Pvt. Ltd., Tina Life Science (through RSC), Cresen Solutions, LatentView Analytics, IIT, IISc, NIT, IICT, JNCASR, etc.</li>
                </ul>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Scholarships</h4>
              <p className="text-black mb-3">100% scholarship opportunity for M.Sc. Chemistry students:</p>
              <ul className="list-disc pl-6 mb-6 text-black space-y-2">
                <li><strong>G.V. PG Merit Scholarship:</strong> 100% Full Merit scholarship to a candidate who has secured CGPA of 9.0 or 90% and above (whichever is applicable) in the 6 Semesters/Three Years of the qualifying UG examination</li>
                <li><strong>Rajeswari PG Merit Scholarship:</strong> 50% scholarship to a candidate who has secured CGPA of 8.0 or 80% and above in the qualifying UG program and an additional 25% for a girl candidate making it a 75% scholarship</li>
              </ul>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Innovation and Research</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {[
                  "Nanomaterials",
                  "Organic Chemistry",
                  "Energy materials",
                  "Catalysis",
                  "Environmental Chemistry",
                  "Inorganic Chemistry",
                  "Physical Chemistry",
                  "Biomaterials",
                  "Supramolecular Chemistry",
                  "Computational chemistry",
                  "Neurobiology",
                  "Opto-electronic materials"
                ].map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-black">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Research at VIT-AP</h4>

              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">VIT Fellowship for Ph.D. Student</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">GATE Qualified (Above 60 Percentile) & Qualified NET Score</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Others</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">First year</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 35,000/month</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 31,000/month</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Second and third year</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 40,000/month</td>
                      <td className="border border-gray-300 px-4 py-2">Rs. 35,000/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Research Support & Facilities</h4>
              <ul className="list-disc pl-6 text-black space-y-2">
                <li>Raman Research Award up to 1 lakh for publications exclusively for research scholars</li>
                <li>Contingency amount of Rs. 10,000 per year for all Scholars</li>
                <li>Open access research publication support for Q1 and Q2 Journals</li>
                <li>Financial support for attending conferences/workshop/training etc.</li>
                <li>Six external funded projects (More than Rs. 2.5 Cr)</li>
                <li>Skill development-oriented curriculum</li>
                <li>Global collaborations with various reputed academic, research institutes and industries</li>
                <li>More than 20 projects funded by the university to the SAS faculties and students</li>
                <li>The department has more than 30 faculties, all with Ph. D.s and Postdocs from top-tier global universities</li>
                <li>Diverse mix of national and international students</li>
              </ul>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xl shadow-gray-100/60 p-8 sm:p-10 lg:p-12 mt-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-md shadow-amber-200/40">
                <ImageIcon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                Campus Gallery
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: "/images/vit-ap/campus1.jpg", alt: "VIT-AP Campus Aerial View" },
                { src: "/images/vit-ap/campus2.jpg", alt: "VIT-AP Academic Building" },
                { src: "/images/vit-ap/campus3.jpg", alt: "VIT-AP Campus Night View" },
                { src: "/images/vit-ap/campus4.jpg", alt: "VIT-AP Student Hostel" },
                { src: "/images/vit-ap/campus5.jpg", alt: "VIT-AP Modern Architecture" },
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onClick={() => openLightbox(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full">
                      Click to view
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-10 h-10" />
          </button>
          <div
            className="relative max-w-7xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
