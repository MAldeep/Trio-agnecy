import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BrandIdentity: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const badge = svg.querySelector("#badge");
    const palette = svg.querySelectorAll(".palette");
    const bigLetter = svg.querySelector("#bigLetter");
    const penCurve = svg.querySelector("#penCurve");
    const anchors = svg.querySelectorAll(".anchor");
    const grid = svg.querySelector("#grid");
    const dots = svg.querySelectorAll(".dot");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : 1,
      }
    });

    tl.from(grid, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "power2.out"
    });

    tl.from(badge, {
      opacity: 0,
      scale: 0,
      transformOrigin: "center",
      duration: 0.7,
      ease: "back.out(1.7)"
    }, "-=0.3");

    tl.from(palette, {
      opacity: 0,
      y: 15,
      stagger: 0.15,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3");

    tl.from(bigLetter, {
      opacity: 0,
      x: -20,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.4");

    tl.from(penCurve, {
      strokeDashoffset: 160,
      duration: 1,
      ease: "power2.out"
    }, "-=0.4");

    tl.from(anchors, {
      scale: 0,
      opacity: 0,
      transformOrigin: "center",
      stagger: 0.1,
      duration: 0.3,
      ease: "back.out(2)"
    });

    tl.from(dots, {
      scale: 0,
      opacity: 0,
      transformOrigin: "center",
      stagger: 0.08,
      duration: 0.25,
      ease: "back.out(2.2)"
    }, "-=0.6");
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 260"
      width="320"
      height="200"
      className="w-full h-auto"
      fill="none"
    >

      {/* Grid background */}
      <g id="grid" stroke="#3A3A3A" opacity="0.25">
        <line x1="20" y1="30" x2="300" y2="30" />
        <line x1="20" y1="60" x2="300" y2="60" />
        <line x1="20" y1="90" x2="300" y2="90" />
        <line x1="20" y1="120" x2="300" y2="120" />
        <line x1="20" y1="150" x2="300" y2="150" />
        <line x1="20" y1="180" x2="300" y2="180" />
        <line x1="20" y1="210" x2="300" y2="210" />

        <line x1="20" y1="30" x2="20" y2="210" />
        <line x1="60" y1="30" x2="60" y2="210" />
        <line x1="100" y1="30" x2="100" y2="210" />
        <line x1="140" y1="30" x2="140" y2="210" />
        <line x1="180" y1="30" x2="180" y2="210" />
        <line x1="220" y1="30" x2="220" y2="210" />
        <line x1="260" y1="30" x2="260" y2="210" />
        <line x1="300" y1="30" x2="300" y2="210" />
      </g>

      {/* Badge / Logo */}
      <g id="badge">
        <circle cx="160" cy="130" r="45" stroke="#F7F5F2" strokeWidth="4" />
        <polygon
          points="160,95 182,130 160,165 138,130"
          fill="#FCDC9B"
          stroke="#F7F5F2"
          strokeWidth="3"
        />
      </g>

      {/* Color palette */}
      <rect className="palette" x="40" y="40" width="35" height="15" rx="3" fill="#FCDC9B" />
      <rect className="palette" x="40" y="60" width="35" height="15" rx="3" fill="#F7F5F2" />
      <rect className="palette" x="40" y="80" width="35" height="15" rx="3" fill="#3A3A3A" />

      {/* Typography letter */}
      <text
        id="bigLetter"
        x="245"
        y="95"
        fontSize="56"
        fontWeight="700"
        fill="#F7F5F2"
      >
        A
      </text>

      {/* Pen tool vector curve */}
      <path
        id="penCurve"
        d="M90 200 C140 150, 210 240, 260 160"
        stroke="#F7F5F2"
        strokeWidth="3"
        fill="none"
        strokeDasharray="160"
      />

      {/* Vector anchor points */}
      <circle className="anchor" cx="90" cy="200" r="6" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="anchor" cx="260" cy="160" r="6" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />

      {/* Branding dots */}
      <circle className="dot" cx="130" cy="35" r="5" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="dot" cx="285" cy="195" r="5" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="dot" cx="50" cy="180" r="5" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />

    </svg>
  );
};

export default BrandIdentity;
