import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Voyago",
    category: "Full Stack Web App",
    tools: "React, Node.js, PostgreSQL, Python, AI/ML",
    image: "/images/voyago.png",
    link: "https://github.com/sameeermokhasi/voyago.git",
  },
  {
    name: "CineSense",
    category: "Movie Recommendation & Streaming Engine",
    tools: "React, Node.js, PostgreSQL, Redis, Auth",
    image: "/images/cinesense.png",
    link: "https://cinesense-liard.vercel.app/",
  },
  {
    name: "VisionAI",
    category: "Metal disc inspector",
    tools: "React, ML Engines, Yolov8, Metal discs",
    image: "/images/visionai.png",
    link: "https://github.com/sameeermokhasi/visual-prediction-system.git",
  },
  {
    name: "Traffic Optimizer",
    category: "AI Multi-Agent System",
    tools: "Python, FastAPI, YOLOv8, React, RAG",
    image: "/images/traffic.png",
    link: "https://github.com/sameeermokhasi/traffic-optimizer.git",
  },
  {
    name: "Project: Fitness",
    category: "Selling my knowledge on Topmate site",
    image: "/images/topmate.png",
    link: "https://topmate.io/sameer_mokhasi",
  },
  {
    name: "ForgeCI",
    category: "DevOps / CI-CD Engine",
    tools: "Node.js, React, Git, Docker, Webhooks",
    image: "/images/forgeci.png",
    link: "https://github.com/sameeermokhasi/forgeCI.git",
  },
];

const Work = () => {
  useEffect(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} link={project.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
