import { useEffect, useRef } from "react";
import "./styles/SpectaclesOverlay.css";

const SpectaclesOverlay = () => {
  const glassesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const landingDiv = document.getElementById("landingDiv") || document.body;

    const handleMouseMove = (e: MouseEvent) => {
      if (!glassesRef.current) return;
      const rect = landingDiv.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      // Translate 2-6% clamped to max 9px
      const moveX = Math.max(-9, Math.min(9, offsetX * 0.035));
      const moveY = Math.max(-9, Math.min(9, offsetY * 0.035));

      // Rotation +-1.5 deg based on cursor X position
      const rotate = Math.max(-1.8, Math.min(1.8, (offsetX / (rect.width / 2)) * 1.5));

      glassesRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) rotate(${rotate}deg)`;
    };

    const handleMouseLeave = () => {
      if (glassesRef.current) {
        glassesRef.current.style.transform = `translate3d(0px, 0px, 0) rotate(0deg)`;
      }
    };

    landingDiv.addEventListener("mousemove", handleMouseMove);
    landingDiv.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      landingDiv.removeEventListener("mousemove", handleMouseMove);
      landingDiv.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="spectacles-overlay-container" ref={glassesRef}>
      <svg
        viewBox="0 0 700 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="spectacles-svg"
      >
        <defs>
          {/* Subtle Pink/Purple Rim Highlight Gradient */}
          <linearGradient id="purpleRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e287ff" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#aa44ff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0c0c0e" stopOpacity="1" />
          </linearGradient>

          {/* Acetate Black Frame Gradient */}
          <linearGradient id="frameGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a20" />
            <stop offset="100%" stopColor="#09090b" />
          </linearGradient>

          {/* Glass Lens Reflection */}
          <linearGradient id="lensSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <filter id="rimGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="-2" stdDeviation="3" floodColor="#d870f5" floodOpacity="0.45" />
          </filter>
        </defs>

        <g filter="url(#rimGlow)">
          {/* Left Frame Arm / Temple */}
          <path
            d="M 20 100 Q 60 95 110 98"
            stroke="#0d0d10"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Right Frame Arm / Temple */}
          <path
            d="M 680 100 Q 640 95 590 98"
            stroke="#0d0d10"
            strokeWidth="14"
            strokeLinecap="round"
          />

          {/* Main Chunky Black Acetate Frame (Left & Right Rounded Rectangles) */}
          {/* Left Rim Outer */}
          <rect
            x="105"
            y="45"
            width="225"
            height="150"
            rx="32"
            fill="url(#frameGrad)"
            stroke="url(#purpleRim)"
            strokeWidth="4"
          />
          {/* Left Lens Inner Cutout (Transparent) */}
          <rect
            x="132"
            y="68"
            width="171"
            height="104"
            rx="18"
            fill="#000000"
            fillOpacity="0.01"
            stroke="#000000"
            strokeWidth="8"
          />

          {/* Right Rim Outer */}
          <rect
            x="370"
            y="45"
            width="225"
            height="150"
            rx="32"
            fill="url(#frameGrad)"
            stroke="url(#purpleRim)"
            strokeWidth="4"
          />
          {/* Right Lens Inner Cutout (Transparent) */}
          <rect
            x="397"
            y="68"
            width="171"
            height="104"
            rx="18"
            fill="#000000"
            fillOpacity="0.01"
            stroke="#000000"
            strokeWidth="8"
          />

          {/* Heavy Nose Bridge */}
          <path
            d="M 326 95 Q 347.5 86 369 95 L 369 114 Q 347.5 106 326 114 Z"
            fill="url(#frameGrad)"
            stroke="#1a1a22"
            strokeWidth="2"
          />

          {/* Subtle Lens Glass Reflection Diagonal */}
          <polygon
            points="140,75 220,75 160,165 140,165"
            fill="url(#lensSheen)"
          />
          <polygon
            points="405,75 485,75 425,165 405,165"
            fill="url(#lensSheen)"
          />
        </g>
      </svg>
    </div>
  );
};

export default SpectaclesOverlay;
