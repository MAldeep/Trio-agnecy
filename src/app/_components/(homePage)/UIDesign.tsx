import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const UIDesign: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const frames = svg.querySelectorAll(".frame");
    const blocks = svg.querySelectorAll(".block");
    const buttons = svg.querySelectorAll(".button");
    const arrows = svg.querySelectorAll(".arrow");
    const cursor = svg.querySelector("#cursor");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : 1,
      },
    });

    // Frames pop in
    tl.from(frames, {
      opacity: 0,
      scale: 0.85,
      transformOrigin: "center",
      duration: 0.7,
      ease: "back.out(1.7)",
      stagger: 0.1,
    });

    // Layout blocks fade upward
    tl.from(
      blocks,
      {
        opacity: 0,
        y: 15,
        stagger: 0.15,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Buttons pop in
    tl.from(
      buttons,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.12,
        duration: 0.35,
        ease: "back.out(2)",
      },
      "-=0.4"
    );

    // Arrows slide in
    tl.from(
      arrows,
      {
        opacity: 0,
        x: -15,
        y: 5,
        stagger: 0.15,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Cursor slides in
    tl.from(cursor, {
      opacity: 0,
      x: 20,
      y: -10,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.35");
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 350 260"
      width="350"
      height="200"
      className="w-full h-auto"
      fill="none"
    >
      {/* Frames */}
      <rect className="frame" x="40" y="30" width="120" height="180" rx="10" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />
      <rect className="frame" x="200" y="50" width="120" height="160" rx="10" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />

      {/* Layout Blocks */}
      <rect className="block" x="50" y="50" width="100" height="25" rx="5" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="block" x="50" y="85" width="100" height="25" rx="5" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="block" x="50" y="120" width="100" height="25" rx="5" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="block" x="210" y="60" width="90" height="25" rx="5" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="block" x="210" y="100" width="90" height="25" rx="5" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />

      {/* Buttons */}
      <rect className="button" x="60" y="160" width="80" height="20" rx="5" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="button" x="220" y="140" width="60" height="20" rx="5" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Navigation Arrows */}
      <path className="arrow" d="M150 50 L170 40 L170 60 Z" fill="#3A3A3A" />
      <path className="arrow" d="M150 90 L170 80 L170 100 Z" fill="#3A3A3A" />
      <path className="arrow" d="M250 120 L270 110 L270 130 Z" fill="#3A3A3A" />

      {/* Cursor */}
      <path
        id="cursor"
        d="M80 200 L95 175 L110 205 L100 195 L95 215 Z"
        fill="#3A3A3A"
      />
    </svg>
  );
};

export default UIDesign;
