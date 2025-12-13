import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MediaProduction: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const camera = svg.querySelector("#camera");
    const reels = svg.querySelectorAll(".reel");
    const lens = svg.querySelector("#lens");
    const sliders = svg.querySelectorAll(".slider");
    const lights = svg.querySelectorAll(".light-ray");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 85%",
        scrub : true
      },
    });

    // Camera body
    tl.from(camera, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.out",
    });

    // Film reels
    tl.from(
      reels,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.12,
        duration: 0.35,
        ease: "back.out(2)",
      },
      "-=0.3"
    );

    // Lens focus
    tl.from(
      lens,
      {
        opacity: 0,
        scale: 0.7,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // Production sliders
    tl.from(
      sliders,
      {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left",
        stagger: 0.08,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // Light rays
    tl.from(
      lights,
      {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "top",
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.out",
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
      {/* Camera body */}
      <rect
        id="camera"
        x="70"
        y="90"
        width="200"
        height="90"
        rx="16"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="4"
      />

      {/* Lens */}
      <circle
        id="lens"
        cx="170"
        cy="135"
        r="30"
        fill="#1E1E1E"
        stroke="#3A3A3A"
        strokeWidth="4"
      />
      <circle cx="170" cy="135" r="14" fill="#FCDC9B" />

      {/* Film reels */}
      <circle className="reel" cx="110" cy="80" r="18" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />
      <circle className="reel" cx="230" cy="80" r="18" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />

      {/* Reel holes */}
      {[ -6, 0, 6 ].map((x, i) => (
        <circle key={i} cx={110 + x} cy={80} r="2.5" fill="#3A3A3A" />
      ))}
      {[ -6, 0, 6 ].map((x, i) => (
        <circle key={i} cx={230 + x} cy={80} r="2.5" fill="#3A3A3A" />
      ))}

      {/* Sliders */}
      <rect className="slider" x="90" y="190" width="60" height="6" rx="3" fill="#FCDC9B" />
      <rect className="slider" x="160" y="190" width="80" height="6" rx="3" fill="#E45454" />
      <rect className="slider" x="90" y="205" width="120" height="6" rx="3" fill="#4DA3FF" />

      {/* Light rays */}
      <line className="light-ray" x1="300" y1="100" x2="340" y2="80" stroke="#FCDC9B" strokeWidth="4" />
      <line className="light-ray" x1="300" y1="120" x2="340" y2="120" stroke="#FCDC9B" strokeWidth="4" />
      <line className="light-ray" x1="300" y1="140" x2="340" y2="160" stroke="#FCDC9B" strokeWidth="4" />
    </svg>
  );
};

export default MediaProduction;
