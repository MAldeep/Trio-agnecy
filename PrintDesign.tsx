import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PrintDesign: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const sheet = svg.querySelector("#sheet");
    const fold = svg.querySelector("#fold");
    const cmyk = svg.querySelectorAll(".cmyk");
    const cropMarks = svg.querySelectorAll(".crop");
    const ruler = svg.querySelector("#ruler");
    const regDots = svg.querySelectorAll(".reg");
    const roller = svg.querySelector("#roller");

    const tl = gsap.timeline({
      scrollTrigger: {
      trigger: svg,
      start: "top 100%",
      scrub : 1,
      },
    });

    tl.from(sheet, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    });

    tl.from(fold, {
      opacity: 0,
      rotateX: 90,
      transformOrigin: "top left",
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

    tl.from(cmyk, {
      scale: 0,
      opacity: 0,
      stagger: 0.15,
      transformOrigin: "left center",
      duration: 0.4,
      ease: "back.out(1.6)",
    }, "-=0.4");

    tl.from(cropMarks, {
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 0.3,
      ease: "power2.out",
    });

    tl.from(regDots, {
      scale: 0,
      opacity: 0,
      stagger: 0.1,
      duration: 0.25,
      ease: "back.out(2)",
    });

    tl.from(ruler, {
      opacity: 0,
      y: -20,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

    tl.from(roller, {
      strokeDashoffset: 120,
      duration: 1,
      ease: "none"
    }, "-=0.3");

  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 260"
      width="330"
      height="200"
      className="w-full h-auto"
      fill="none"
    >
      {/* Sheet of paper */}
      <rect
        id="sheet"
        x="50"
        y="40"
        width="200"
        height="160"
        rx="8"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Folded corner */}
      <path
        id="fold"
        d="M250 40 L220 40 L250 70 Z"
        fill="#EDEBE7"
        stroke="#3A3A3A"
        strokeWidth="2"
      />

      {/* CMYK Color Bars */}
      <rect className="cmyk" x="55" y="210" width="40" height="10" fill="#00AEEF" />
      <rect className="cmyk" x="100" y="210" width="40" height="10" fill="#EC008C" />
      <rect className="cmyk" x="145" y="210" width="40" height="10" fill="#FFF200" />
      <rect className="cmyk" x="190" y="210" width="40" height="10" fill="#231F20" />

      {/* Crop Marks */}
      <g stroke="#3A3A3A" strokeWidth="2">
        <line className="crop" x1="45" y1="35" x2="70" y2="35" />
        <line className="crop" x1="45" y1="35" x2="45" y2="60" />

        <line className="crop" x1="255" y1="35" x2="230" y2="35" />
        <line className="crop" x1="255" y1="35" x2="255" y2="60" />

        <line className="crop" x1="45" y1="205" x2="70" y2="205" />
        <line className="crop" x1="45" y1="205" x2="45" y2="180" />

        <line className="crop" x1="255" y1="205" x2="230" y2="205" />
        <line className="crop" x1="255" y1="205" x2="255" y2="180" />
      </g>

      {/* Registration Marks */}
      <circle className="reg" cx="110" cy="120" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="reg" cx="190" cy="120" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Ruler */}
      <rect
        id="ruler"
        x="270"
        y="40"
        width="20"
        height="160"
        fill="#EDEBE7"
        stroke="#3A3A3A"
        strokeWidth="2"
      />
      <g stroke="#3A3A3A" strokeWidth="1.5">
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="270"
            y1={50 + i * 12}
            x2="290"
            y2={50 + i * 12}
          />
        ))}
      </g>

      {/* Printer Roller Line */}
      <path
        id="roller"
        d="M50 235 L250 235"
        stroke="#3A3A3A"
        strokeWidth="4"
        strokeDasharray="120"
      />
    </svg>
  );
};

export default PrintDesign;
