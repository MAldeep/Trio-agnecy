import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GraphicDesign: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const artboard = svg.querySelector("#artboard");
    const grid = svg.querySelectorAll(".grid-line");
    const palette = svg.querySelectorAll(".palette");
    const pen = svg.querySelector("#pen-tool");
    const handles = svg.querySelectorAll(".handle");
    const sparks = svg.querySelectorAll(".spark");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 85%",
        scrub : true
      },
    });

    // Artboard
    tl.from(artboard, {
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      ease: "power2.out",
    });

    // Grid lines
    tl.from(
      grid,
      {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left",
        stagger: 0.05,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Color palette dots
    tl.from(
      palette,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.3,
        ease: "back.out(2)",
      },
      "-=0.25"
    );

    // Pen tool draw
    tl.from(
      pen,
      {
        opacity: 0,
        x: 20,
        y: -20,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // Bezier handles
    tl.from(
      handles,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.3,
        ease: "back.out(2)",
      },
      "-=0.25"
    );

    // Creative sparks
    tl.from(
      sparks,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.25,
        ease: "back.out(3)",
      },
      "-=0.2"
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 360 260"
      width="360"
      height="200"
      className="w-full h-auto"
      fill="none"
    >
      {/* Artboard */}
      <rect
        id="artboard"
        x="50"
        y="30"
        width="260"
        height="180"
        rx="16"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="4"
      />

      {/* Grid */}
      <line className="grid-line" x1="130" y1="30" x2="130" y2="210" stroke="#3A3A3A" strokeWidth="1.5" />
      <line className="grid-line" x1="230" y1="30" x2="230" y2="210" stroke="#3A3A3A" strokeWidth="1.5" />
      <line className="grid-line" x1="50" y1="110" x2="310" y2="110" stroke="#3A3A3A" strokeWidth="1.5" />

      {/* Color palette */}
      <circle className="palette" cx="100" cy="160" r="10" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="palette" cx="130" cy="160" r="10" fill="#E45454" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="palette" cx="160" cy="160" r="10" fill="#4DA3FF" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="palette" cx="190" cy="160" r="10" fill="#6BCF9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Pen tool */}
      <g id="pen-tool" transform="translate(230, 90)">
        <path
          d="M0 30 L30 0 L50 20 L20 50 Z"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="3"
        />
        <circle className="handle" cx="0" cy="30" r="5" fill="#3A3A3A" />
        <circle className="handle" cx="50" cy="20" r="5" fill="#3A3A3A" />
        <line x1="0" y1="30" x2="50" y2="20" stroke="#3A3A3A" strokeWidth="2" />
      </g>

      {/* Sparks */}
      <polygon className="spark" points="80,40 85,50 75,50" fill="#FCDC9B" />
      <polygon className="spark" points="300,80 305,90 295,90" fill="#FCDC9B" />
      <polygon className="spark" points="260,200 265,210 255,210" fill="#FCDC9B" />
    </svg>
  );
};

export default GraphicDesign;
