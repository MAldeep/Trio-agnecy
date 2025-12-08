import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebsiteDevelopment: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const browser = svg.querySelector("#browser");
    const blocks = svg.querySelectorAll(".block");
    const brackets = svg.querySelectorAll(".bracket");
    const cursor = svg.querySelector("#cursor");
    const gears = svg.querySelectorAll(".gear");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : 1,
      },
    });

    // Browser frame fade/scale
    tl.from(browser, {
      opacity: 0,
      scale: 0.85,
      duration: 0.7,
      ease: "power2.out",
    });

    // Layout blocks slide upward
    tl.from(
      blocks,
      {
        opacity: 0,
        y: 25,
        stagger: 0.12,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Code brackets pop in
    tl.from(
      brackets,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "center",
        stagger: 0.15,
        duration: 0.4,
        ease: "back.out(2)",
      },
      "-=0.4"
    );

    // Gears rotate + fade in
    tl.from(
      gears,
      {
        opacity: 0,
        rotate: -90,
        scale: 0.6,
        transformOrigin: "center",
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Cursor slide in last
    tl.from(
      cursor,
      {
        opacity: 0,
        x: 20,
        y: -10,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.35"
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
      {/* Browser Window */}
      <rect
        id="browser"
        x="30"
        y="20"
        width="290"
        height="200"
        rx="12"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Browser Top Buttons */}
      <circle cx="55" cy="40" r="6" fill="#FF6B6B" stroke="#3A3A3A" strokeWidth="2" />
      <circle cx="75" cy="40" r="6" fill="#FFD66B" stroke="#3A3A3A" strokeWidth="2" />
      <circle cx="95" cy="40" r="6" fill="#6BFF99" stroke="#3A3A3A" strokeWidth="2" />

      {/* Header Block */}
      <rect
        className="block"
        x="50"
        y="60"
        width="250"
        height="30"
        rx="6"
        fill="#EFEDE9"
        stroke="#3A3A3A"
        strokeWidth="2"
      />

      {/* Sidebar */}
      <rect
        className="block"
        x="50"
        y="100"
        width="70"
        height="100"
        rx="6"
        fill="#EDEAE5"
        stroke="#3A3A3A"
        strokeWidth="2"
      />

      {/* Content Blocks */}
      <rect className="block" x="130" y="100" width="170" height="30" rx="6" fill="#EDEAE5" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="block" x="130" y="140" width="170" height="30" rx="6" fill="#EDEAE5" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="block" x="130" y="180" width="170" height="30" rx="6" fill="#EDEAE5" stroke="#3A3A3A" strokeWidth="2" />

      {/* Code Brackets */}
      <text className="bracket" x="20" y="130" fontSize="34" fontWeight="bold" fill="#3A3A3A">
        {"<"}
      </text>
      <text className="bracket" x="320" y="130" fontSize="34" fontWeight="bold" fill="#3A3A3A">
        {">"}
      </text>
      <text className="bracket" x="20" y="170" fontSize="34" fontWeight="bold" fill="#3A3A3A">
        {"/"}
      </text>

      {/* Gears */}
      <g className="gear" transform="translate(270, 50)">
        <circle r="10" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
        <path
          d="M0 -16 L3 -10 L10 -3 L16 0 L10 3 L3 10 L0 16 L-3 10 L-10 3 L-16 0 L-10 -3 L-3 -10 Z"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="2"
        />
      </g>

      <g className="gear" transform="translate(300, 90)">
        <circle r="7" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
        <path
          d="M0 -12 L2 -7 L7 -2 L12 0 L7 2 L2 7 L0 12 L-2 7 L-7 2 L-12 0 L-7 -2 L-2 -7 Z"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="2"
        />
      </g>

      {/* Cursor */}
      <path
        id="cursor"
        d="M110 200 L130 150 L150 205 L138 195 L130 220 Z"
        fill="#3A3A3A"
      />
    </svg>
  );
};

export default WebsiteDevelopment;
