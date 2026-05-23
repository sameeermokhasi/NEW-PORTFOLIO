import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// Stub smoother object so other files that import it don't break
export const smoother = {
  paused: (_val: boolean) => { },
  scrollTop: (_val: number) => { },
  scrollTo: (target: string | null, _smooth: boolean, _pos: string) => {
    if (!target) return;
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  },
};

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            const target = document.querySelector(section);
            if (target) target.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollTrigger.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          SM
        </a>
        <a
          href="mailto:sameermokhasi022@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sameermokhasi022@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#certifications" href="#certifications">
              <HoverLinks text="CERTIFICATIONS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
