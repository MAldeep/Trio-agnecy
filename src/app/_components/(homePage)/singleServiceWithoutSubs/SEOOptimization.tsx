import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SEOOptimization: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const searchBar = svg.querySelector("#searchBar");
    const magnifier = svg.querySelector("#magnifier");
    const graph = svg.querySelector("#graph");
    const bars = svg.querySelectorAll(".rankBar");
    const target = svg.querySelector("#target");
    const tags = svg.querySelectorAll(".tag");
    const stars = svg.querySelectorAll(".star");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : true
      },
    });

    // Search bar appears
    tl.from(searchBar, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
    });

    // Magnifying glass pops
    tl.from(
      magnifier,
      {
        opacity: 0,
        scale: 0.5,
        rotate: -30,
        transformOrigin: "center",
        duration: 0.45,
        ease: "back.out(2)",
      },
      "-=0.3"
    );

    // Graph appears
    tl.from(
      graph,
      {
        opacity: 0,
        scaleY: 0.5,
        transformOrigin: "bottom",
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // Ranking bars grow
    tl.from(
      bars,
      {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.35"
    );

    // Target slides in
    tl.from(
      target,
      {
        opacity: 0,
        scale: 0.7,
        duration: 0.5,
        ease: "back.out(2)",
      },
      "-=0.3"
    );

    // Tags pop
    tl.from(
      tags,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.35,
        ease: "back.out(2)",
      },
      "-=0.4"
    );

    // Stars sparkle
    tl.from(
      stars,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "back.out(2.2)",
      },
      "-=0.4"
    );
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
      {/* Search bar */}
      <rect
        id="searchBar"
        x="40"
        y="40"
        width="270"
        height="40"
        rx="20"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />
      <line x1="60" y1="60" x2="200" y2="60" stroke="#3A3A3A" strokeWidth="2" />

      {/* Magnifying glass */}
      <g id="magnifier" transform="translate(260,45)">
        <circle cx="0" cy="0" r="12" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
        <line x1="8" y1="8" x2="18" y2="18" stroke="#3A3A3A" strokeWidth="3" />
      </g>

      {/* Ranking graph */}
      <polyline
        id="graph"
        points="60,180 110,150 160,170 210,130 260,140"
        stroke="#3A3A3A"
        strokeWidth="3"
        fill="none"
      />

      {/* Bars */}
      <rect className="rankBar" x="90" y="120" width="20" height="60" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="rankBar" x="140" y="100" width="20" height="80" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="rankBar" x="190" y="110" width="20" height="70" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="rankBar" x="240" y="90" width="20" height="90" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Bullseye Target */}
      <g id="target" transform="translate(300,180)">
        <circle r="18" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="3" />
        <circle r="10" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
        <circle r="4" fill="#3A3A3A" />
      </g>

      {/* Keyword tags */}
      <rect className="tag" x="50" y="200" width="60" height="20" rx="10" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="tag" x="130" y="210" width="70" height="20" rx="10" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="tag" x="220" y="200" width="50" height="20" rx="10" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Stars */}
      <polygon className="star" points="80,45 85,55 75,55" fill="#FCDC9B" />
      <polygon className="star" points="290,75 295,85 285,85" fill="#FCDC9B" />
      <polygon className="star" points="180,190 185,200 175,200" fill="#FCDC9B" />
    </svg>
  );
};

export default SEOOptimization;
