import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PlanningStrategies: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const compass = svg.querySelector("#compass");
    const arrow = svg.querySelector("#growthArrow");
    const dart = svg.querySelector("#dart");
    const board = svg.querySelector("#board");
    const checks = svg.querySelectorAll(".check");
    const nodes = svg.querySelectorAll(".node");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : 1,
      }
    });

    // Compass scale-in
    tl.from(compass, {
      scale: 0,
      opacity: 0,
      transformOrigin: "center",
      duration: 0.6,
      ease: "back.out(1.8)"
    });

    // Growth arrow slide
    tl.from(arrow, {
      opacity: 0,
      x: -30,
      duration: 0.7,
      ease: "power3.out"
    }, "-=0.3");

    // Planning board fade-in
    tl.from(board, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");

    // Checklist items popping in
    tl.from(checks, {
      scale: 0,
      transformOrigin: "left center",
      opacity: 0,
      duration: 0.3,
      stagger: 0.15,
      ease: "back.out(2)"
    });

    // Dart hitting target
    tl.from(dart, {
      opacity: 0,
      x: 25,
      y: -25,
      rotate: 40,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4");

    // Tiny planning nodes
    tl.from(nodes, {
      scale: 0,
      opacity: 0,
      transformOrigin: "center",
      stagger: 0.1,
      duration: 0.25,
      ease: "back.out(2)"
    }, "-=0.5");
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

      {/* Compass (strategy) */}
      <circle id="compass" cx="85" cy="140" r="50" stroke="#F7F5F2" strokeWidth="4" />
      <polygon points="85,100 98,140 85,160 72,140" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />

      {/* Growth arrow */}
      <path
        id="growthArrow"
        d="M40 200 L120 150 L150 170 L200 110"
        stroke="#F7F5F2"
        strokeWidth="4"
        fill="none"
      />
      <polygon points="200,110 195,120 215,115" fill="#F7F5F2" />

      {/* Planning board */}
      <rect
        id="board"
        x="190"
        y="35"
        width="100"
        height="140"
        rx="10"
        stroke="#F7F5F2"
        strokeWidth="4"
      />

      {/* Checklist items */}
      <circle className="check" cx="210" cy="75" r="7" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <rect x="230" y="70" width="50" height="5" fill="#F7F5F2" opacity="0.7" />

      <circle className="check" cx="210" cy="110" r="7" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <rect x="230" y="105" width="50" height="5" fill="#F7F5F2" opacity="0.7" />

      <circle className="check" cx="210" cy="145" r="7" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <rect x="230" y="140" width="50" height="5" fill="#F7F5F2" opacity="0.7" />

      {/* Target with dart */}
      <circle cx="145" cy="80" r="28" stroke="#F7F5F2" strokeWidth="4" />
      <circle cx="145" cy="80" r="15" stroke="#FCDC9B" strokeWidth="3" />
      <circle cx="145" cy="80" r="6" fill="#FCDC9B" />

      {/* Dart */}
      <polygon
        id="dart"
        points="175,55 165,70 185,75"
        fill="#F7F5F2"
      />

      {/* Planning nodes */}
      <circle className="node" cx="60" cy="60" r="6" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="node" cx="110" cy="35" r="6" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="node" cx="30" cy="180" r="6" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />

    </svg>
  );
};

export default PlanningStrategies;
