import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SocialMediaDesign: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const phone = svg.querySelector("#phone");
    const cards = svg.querySelectorAll(".card");
    const bubbles = svg.querySelectorAll(".bubble");
    const notif = svg.querySelector("#notif");
    const sparkles = svg.querySelectorAll(".spark");
    const share = svg.querySelector("#shareIcon");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : 1,
      },
    });

    // Phone enters softly
    tl.from(phone, {
      opacity: 0,
      scale: 0.8,
      duration: 0.7,
      ease: "power2.out",
    });

    // Cards slide up one by one
    tl.from(
      cards,
      {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Floating bubbles scale in
    tl.from(
      bubbles,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "center",
        duration: 0.4,
        stagger: 0.12,
        ease: "back.out(2)",
      },
      "-=0.4"
    );

    // Notification badge pop
    tl.from(
      notif,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "center",
        duration: 0.35,
        ease: "back.out(2.2)",
      },
      "-=0.3"
    );

    // Sparkles appear
    tl.from(
      sparkles,
      {
        opacity: 0,
        scale: 0,
        transformOrigin: "center",
        stagger: 0.1,
        duration: 0.25,
        ease: "back.out(1.8)",
      },
      "-=0.4"
    );

    // Share icon slide
    tl.from(
      share,
      {
        opacity: 0,
        x: 15,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 260"
      width="330"
      height="200"
      className="w-full h-auto"
      fill="none"
    >
      {/* Smartphone Frame */}
      <rect
        id="phone"
        x="60"
        y="20"
        width="160"
        height="220"
        rx="25"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Feed Cards */}
      <rect
        className="card"
        x="80"
        y="45"
        width="120"
        height="40"
        rx="8"
        fill="#EDEBE7"
        stroke="#3A3A3A"
        strokeWidth="2"
      />
      <rect
        className="card"
        x="80"
        y="100"
        width="120"
        height="40"
        rx="8"
        fill="#EDEBE7"
        stroke="#3A3A3A"
        strokeWidth="2"
      />
      <rect
        className="card"
        x="80"
        y="155"
        width="120"
        height="40"
        rx="8"
        fill="#EDEBE7"
        stroke="#3A3A3A"
        strokeWidth="2"
      />

      {/* Notification Badge */}
      <circle
        id="notif"
        cx="200"
        cy="35"
        r="12"
        fill="#FF4D4F"
        stroke="#3A3A3A"
        strokeWidth="2"
      />
      <text
        x="196"
        y="40"
        fontSize="10"
        fill="white"
        fontWeight="bold"
      >
        3
      </text>

      {/* Reaction Bubbles */}
      <circle className="bubble" cx="265" cy="80" r="18" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <text x="258" y="88" fontSize="16" fill="#3A3A3A">❤️</text>

      <circle className="bubble" cx="260" cy="135" r="16" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <text x="254" y="142" fontSize="15" fill="#3A3A3A">👍</text>

      <circle className="bubble" cx="250" cy="185" r="14" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <text x="244" y="191" fontSize="12" fill="#3A3A3A">💬</text>

      {/* Share Icon */}
      <path
        id="shareIcon"
        d="M95 210 L115 200 L115 220 Z"
        fill="#3A3A3A"
      />

      {/* Sparkles */}
      <g fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5">
        <circle className="spark" cx="40" cy="70" r="5" />
        <circle className="spark" cx="55" cy="110" r="4" />
        <circle className="spark" cx="45" cy="160" r="5" />
      </g>
    </svg>
  );
};

export default SocialMediaDesign;
