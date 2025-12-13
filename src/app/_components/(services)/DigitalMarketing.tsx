import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DigitalMarketing: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const screens = svg.querySelectorAll(".screen");
    const megaphone = svg.querySelector("#megaphone");
    const chart = svg.querySelector("#chart");
    const target = svg.querySelector("#target");
    const sparks = svg.querySelectorAll(".spark");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 85%",
        scrub : true
      },
    });

    // Platforms appear
    tl.from(screens, {
      opacity: 0,
      y: 20,
      stagger: 0.12,
      duration: 0.45,
      ease: "power2.out",
    });

    // Megaphone slide
    tl.from(
      megaphone,
      {
        opacity: 0,
        x: -25,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // Growth chart draw
    tl.from(
      chart,
      {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.55,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Target pop
    tl.from(
      target,
      {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "back.out(2)",
      },
      "-=0.25"
    );

    // Conversion sparks
    tl.from(
      sparks,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.3,
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
      {/* Platform Screens */}
      <rect
        className="screen"
        x="40"
        y="40"
        width="90"
        height="60"
        rx="10"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />
      <rect
        className="screen"
        x="150"
        y="30"
        width="100"
        height="70"
        rx="10"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />
      <rect
        className="screen"
        x="90"
        y="115"
        width="120"
        height="70"
        rx="10"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Megaphone */}
      <g id="megaphone" transform="translate(30, 150)">
        <path
          d="M0 15 L35 0 L35 30 L0 20 Z"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="3"
        />
        <rect
          x="35"
          y="8"
          width="14"
          height="18"
          rx="4"
          fill="#F7F5F2"
          stroke="#3A3A3A"
          strokeWidth="3"
        />
      </g>

      {/* Growth Chart */}
      <polyline
        id="chart"
        points="110,200 150,175 190,185 230,155 280,165"
        stroke="#3A3A3A"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Target */}
      <g id="target" transform="translate(280, 60)">
        <circle r="18" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />
        <circle r="10" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="3" />
        <circle r="4" fill="#3A3A3A" />
      </g>

      {/* Sparks */}
      <polygon className="spark" points="210,40 215,50 205,50" fill="#FCDC9B" />
      <polygon className="spark" points="300,120 305,130 295,130" fill="#FCDC9B" />
      <polygon className="spark" points="170,210 175,220 165,220" fill="#FCDC9B" />
    </svg>
  );
};

export default DigitalMarketing;
