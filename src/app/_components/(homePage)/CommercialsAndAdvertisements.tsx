import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CommercialsAndAdvertisements: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const tv = svg.querySelector("#tv-frame");
    const screen = svg.querySelector("#tv-screen");
    const playBtn = svg.querySelector("#play-button");
    const megaphone = svg.querySelector("#megaphone");
    const rays = svg.querySelectorAll(".ray");
    const sparkles = svg.querySelectorAll(".sparkle");
    const glare = svg.querySelector("#glare");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : true,
      }
    });

    // TV frame
    tl.from(tv, {
      opacity: 0,
      y: 25,
      duration: 0.6,
      ease: "power3.out"
    });

    // Screen
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

    // Play button
    tl.from(
      playBtn,
      {
        opacity: 0,
        scale: 0,
        duration: 0.45,
        ease: "back.out(2)"
      },
      "-=0.2"
    );

    // Megaphone
    tl.from(
      megaphone,
      {
        opacity: 0,
        x: -20,
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.2"
    );

    // Sound rays
    tl.from(
      rays,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "left center",
        stagger: 0.08,
        duration: 0.25,
        ease: "back.out(3)"
      },
      "-=0.15"
    );

    // Sparkles
    tl.from(
      sparkles,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.25,
        ease: "back.out(3)"
      },
      "-=0.2"
    );

    // Screen glare sweep
    tl.from(
      glare,
      {
        opacity: 0,
        x: -40,
        duration: 0.7,
        ease: "power2.out"
      },
      "-=0.3"
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
      {/* TV Frame */}
      <rect
        id="tv-frame"
        x="30"
        y="40"
        width="300"
        height="180"
        rx="18"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="4"
      />

      {/* Screen */}
      <rect
        id="tv-screen"
        x="50"
        y="60"
        width="260"
        height="140"
        rx="10"
        fill="#FCDC9B"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Play button */}
      <polygon
        id="play-button"
        points="150,95 210,130 150,165"
        fill="#3A3A3A"
      />

      {/* Megaphone */}
      <g id="megaphone" transform="translate(35, 165)">
        <path
          d="M0 10 L30 0 L30 30 L0 20 Z"
          fill="#F7F5F2"
          stroke="#3A3A3A"
          strokeWidth="3"
        />
        <rect
          x="30"
          y="6"
          width="10"
          height="18"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="3"
        />
      </g>

      {/* Sound Rays */}
      <line className="ray" x1="90" y1="165" x2="115" y2="155" stroke="#3A3A3A" strokeWidth="3" />
      <line className="ray" x1="90" y1="180" x2="120" y2="180" stroke="#3A3A3A" strokeWidth="3" />
      <line className="ray" x1="90" y1="195" x2="115" y2="205" stroke="#3A3A3A" strokeWidth="3" />

      {/* Sparkles */}
      <polygon className="sparkle" points="300,50 305,60 295,60" fill="#FCDC9B" />
      <polygon className="sparkle" points="270,190 278,205 262,205" fill="#FCDC9B" />
      <polygon className="sparkle" points="200,40 205,50 195,50" fill="#FCDC9B" />

      {/* Screen glare */}
      <rect
        id="glare"
        x="50"
        y="60"
        width="60"
        height="140"
        fill="white"
        opacity="0.25"
        rx="10"
      />
    </svg>
  );
};

export default CommercialsAndAdvertisements;
