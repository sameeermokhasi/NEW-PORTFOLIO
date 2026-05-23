import { useEffect, useState } from "react";
import "./styles/Certifications.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certificates = [
  {
    name: "Agentic AI",
    file: "Agentic AI.pdf",
    subtitle: "in Advanced AI Certification",
    desc: "Specialized certification in Agentic Artificial Intelligence systems.",
    date: "~ Nov 2025",
    img: "/images/agentic-ai-placeholder.png",
  },
  {
    name: "GenAI Machine Learning",
    file: "GenAI Machine Learning.pdf",
    subtitle: "in GenAI Course",
    desc: "Specialized training in Generative AI and Machine Learning.",
    date: "~ Apr 2025",
    img: "/images/genai-placeholder.png",
  },
  {
    name: "Internship Certificate",
    file: "Internship.pdf",
    subtitle: "in Cybersecurity & Computer Networks",
    desc: "Cybersecurity and Network Administration Internship.",
    date: "~ May 2024",
    img: "/images/cyber-placeholder.png",
  },
  {
    name: "IBM Certificate",
    file: "IBM CERTIFICATE.pdf",
    subtitle: "in Software Engineering",
    desc: "IBM verified certification in core concepts.",
    date: "~ 2024",
    img: "/images/ibm-placeholder.png",
  },
  {
    name: "Infosys Certified",
    file: "INFOSYS CERTIFIED.pdf",
    subtitle: "in IT Foundations",
    desc: "Infosys training completion.",
    date: "~ 2024",
    img: "/images/infosys-placeholder.png",
  },
  {
    name: "Nutanix",
    file: "Nutanix.pdf",
    subtitle: "in Cloud Computing",
    desc: "Nutanix Hybrid Cloud Fundamentals.",
    date: "~ 2024",
    img: "/images/nutanix-placeholder.png",
  },
  {
    name: "Database Programming with SQL",
    file: "SAMEER VENKATESH MOKHASI_Database_Programming_with_SQL_–_English_Award_Of_Completion_on_the_26th_of_May__2025.pdf",
    subtitle: "in Oracle Academy",
    desc: "Database programming with SQL.",
    date: "~ May 2025",
    img: "/images/db-sql-placeholder.png",
  },
  {
    name: "Wadhwani Foundation",
    file: "Wadhwani Foundation Certificate.pdf",
    subtitle: "in Entrepreneurship",
    desc: "Wadhwani Foundation certification.",
    date: "~ 2024",
    img: "/images/wadhwani-placeholder.png",
  },
  {
    name: "Code Clash",
    file: "CODE CLASH.pdf",
    subtitle: "in Competitive Programming",
    desc: "Code Clash participation and achievement.",
    date: "~ 2024",
    img: "/images/codeclash-placeholder.png",
  },
];

const Certifications = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 900);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 900);
    window.addEventListener("resize", handleResize);
    
    gsap.fromTo(
      ".certifications-section h2",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".certifications-section",
          start: "top 80%",
        },
      }
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextPage = () => {
    if (currentPage < certificates.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="certifications-section" id="certifications">
      <h2>
        My <span>Certifications</span>
      </h2>

      <div className="book-container">
        {isDesktop && (
          <button className="book-nav prev-nav" onClick={prevPage} disabled={currentPage === 0}>
            &#8592; Prev
          </button>
        )}

        <div className="book-wrapper">
          <div className="book">
            {/* Cover Page */}
          <div
            className={`page cover-page ${currentPage > 0 ? "flipped" : ""}`}
            style={{ zIndex: certificates.length + 2 }}
            onClick={() => {
              if (currentPage === 0) nextPage();
              else prevPage();
            }}
          >
            <div className="page-front">
              <h1>Portfolio of Certificates</h1>
              <p>Sameer Mokhasi</p>
              <span>Click to Open</span>
            </div>
            <div className="page-back">
              <div className="back-design">SM</div>
            </div>
          </div>

          {/* Certificate Pages */}
          {certificates.map((cert, index) => {
            const pageNum = index + 1;
            const isFlipped = currentPage > pageNum;
            const isCurrentRight = currentPage === pageNum;
            const zIndex = isFlipped ? index : certificates.length - index;

            return (
              <div
                key={index}
                className={`page ${isFlipped ? "flipped" : ""}`}
                style={{ zIndex }}
                onClick={() => {
                  if (isCurrentRight) {
                    window.dispatchEvent(
                      new CustomEvent("open-pdf", {
                        detail: `/certifications/${cert.file}`,
                      })
                    );
                  } else if (isFlipped) {
                    prevPage();
                  } else {
                    nextPage();
                  }
                }}
              >
                <div className="page-front">
                  <div className="cert-card-new">
                    <div
                      className="cert-card-img"
                      style={{ backgroundImage: `url(${cert.img})` }}
                    ></div>
                    <div className="cert-card-content">
                      <h3>{cert.name}</h3>
                      <span className="cert-subtitle">{cert.subtitle}</span>
                      <p className="cert-desc">{cert.desc}</p>
                      <div className="cert-date">{cert.date}</div>
                    </div>
                  </div>
                </div>
                <div className="page-back">
                  <div className="back-design">SM</div>
                </div>
              </div>
            );
          })}
          </div>
        </div>

        {isDesktop && (
          <button
            className="book-nav next-nav"
            onClick={nextPage}
            disabled={currentPage === certificates.length}
          >
            Next &#8594;
          </button>
        )}

        {!isDesktop && (
          <div className="mobile-controls">
            <button className="book-nav prev-nav" onClick={prevPage} disabled={currentPage === 0}>
              &#8592; Prev
            </button>
            <button
              className="book-nav next-nav"
              onClick={nextPage}
              disabled={currentPage === certificates.length}
            >
              Next &#8594;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certifications;
