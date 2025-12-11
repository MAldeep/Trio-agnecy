import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EventCoverageLiveStreaming: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const phone = svg.querySelector("#phone");
    const screen = svg.querySelector("#screen");
    const liveBadge = svg.querySelector("#live-badge");
    const camera = svg.querySelector("#camera");
    const lens = svg.querySelector("#lens");
    const waves = svg.querySelectorAll(".wave");
    const sparkles = svg.querySelectorAll(".sparkle");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : true
      }
    });

    tl.from(phone, {
      opacity: 0,
      y: 25,
      duration: 0.6,
      ease: "power3.out"
    });

    tl.from(
      screen,
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.3"
    );

    tl.from(
      camera,
      {
        opacity: 0,
        x: -20,
        duration: 0.45,
        ease: "power2.out"
      },
      "-=0.2"
    );

    tl.from(
      lens,
      {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "back.out(2)"
      },
      "-=0.2"
    );

    tl.from(
      liveBadge,
      {
        opacity: 0,
        y: -15,
        duration: 0.45,
        ease: "back.out(2)"
      },
      "-=0.2"
    );

    tl.from(
      waves,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "left center",
        stagger: 0.12,
        duration: 0.3,
        ease: "back.out(2)"
      },
      "-=0.1"
    );

    tl.from(
      sparkles,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "back.out(3)"
      },
      "-=0.25"
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
      {/* Phone frame */}
      <rect
        id="phone"
        x="110"
        y="40"
        width="140"
        height="200"
        rx="22"
        stroke="#3A3A3A"
        strokeWidth="4"
        fill="#F7F5F2"
      />

      {/* Streaming screen */}
      <rect
        id="screen"
        x="125"
        y="65"
        width="110"
        height="150"
        rx="14"
        fill="#FCDC9B"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* LIVE badge */}
      <g id="live-badge" transform="translate(135, 75)">
        <rect
          width="55"
          height="22"
          rx="6"
          fill="#E45454"
          stroke="#3A3A3A"
          strokeWidth="2"
        />
        <text
          x="27"
          y="15"
          textAnchor="middle"
          fontSize="12"
          fill="white"
          fontFamily="Arial, sans-serif"
        >
          LIVE
        </text>
      </g>

      {/* Camera */}
      <g id="camera" transform="translate(40, 120)">
        <rect
          x="0"
          y="10"
          width="70"
          height="40"
          rx="8"
          fill="#F7F5F2"
          stroke="#3A3A3A"
          strokeWidth="3"
        />

        {/* Lens */}
        <circle
          id="lens"
          cx="20"
          cy="30"
          r="10"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="3"
        />

        {/* Handle */}
        <rect
          x="55"
          y="15"
          width="25"
          height="30"
          rx="5"
          fill="#F7F5F2"
          stroke="#3A3A3A"
          strokeWidth="3"
        />
      </g>

      {/* Broadcast waves */}
      <path
        className="wave"
        d="M230 130 C255 120, 275 120, 300 130"
        stroke="#3A3A3A"
        strokeWidth="3"
      />
      <path
        className="wave"
        d="M235 145 C258 133, 278 133, 298 145"
        stroke="#3A3A3A"
        strokeWidth="3"
      />
      <path
        className="wave"
        d="M238 160 C260 148, 280 148, 295 160"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Sparkles */}
      <polygon
        className="sparkle"
        points="300,60 305,70 295,70"
        fill="#FCDC9B"
      />
      <polygon
        className="sparkle"
        points="260,200 268,215 252,215"
        fill="#FCDC9B"
      />
      <polygon
        className="sparkle"
        points="180,45 185,55 175,55"
        fill="#FCDC9B"
      />
    </svg>
  );
};

export default EventCoverageLiveStreaming;
