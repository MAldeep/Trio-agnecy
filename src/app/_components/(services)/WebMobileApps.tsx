import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WebMobileApps: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const browser = svg.querySelector("#browser");
    const phone = svg.querySelector("#phone");
    const uiBlocks = svg.querySelectorAll(".ui-block");
    const arrows = svg.querySelectorAll(".sync-arrow");
    const dots = svg.querySelectorAll(".dot");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 85%",
        scrub : true
      },
    });

    // Browser window
    tl.from(browser, {
      opacity: 0,
      y: 20,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.out",
    });

    // Phone
    tl.from(
      phone,
      {
        opacity: 0,
        y: -20,
        scale: 0.9,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // UI blocks
    tl.from(
      uiBlocks,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.3,
        ease: "back.out(2)",
      },
      "-=0.25"
    );

    // Sync arrows
    tl.from(
      arrows,
      {
        opacity: 0,
        strokeDasharray: 80,
        strokeDashoffset: 80,
        stagger: 0.15,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.2"
    );

    // Dots (logic / flow)
    tl.from(
      dots,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.06,
        duration: 0.25,
        ease: "back.out(3)",
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
      {/* Browser */}
      <rect
        id="browser"
        x="30"
        y="40"
        width="200"
        height="140"
        rx="12"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="4"
      />
      <line x1="30" y1="70" x2="230" y2="70" stroke="#3A3A3A" strokeWidth="3" />

      {/* Browser UI blocks */}
      <rect className="ui-block" x="50" y="90" width="60" height="30" rx="6" fill="#FCDC9B" />
      <rect className="ui-block" x="120" y="90" width="80" height="30" rx="6" fill="#E45454" />
      <rect className="ui-block" x="50" y="130" width="150" height="30" rx="6" fill="#4DA3FF" />

      {/* Phone */}
      <rect
        id="phone"
        x="260"
        y="60"
        width="60"
        height="120"
        rx="14"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="4"
      />
      <circle cx="290" cy="165" r="4" fill="#3A3A3A" />

      {/* Mobile UI */}
      <rect className="ui-block" x="272" y="80" width="36" height="20" rx="5" fill="#6BCF9B" />
      <rect className="ui-block" x="272" y="108" width="36" height="20" rx="5" fill="#FCDC9B" />

      {/* Sync arrows */}
      <path
        className="sync-arrow"
        d="M230 110 C245 100, 255 100, 260 110"
        stroke="#3A3A3A"
        strokeWidth="3"
        fill="none"
      />
      <path
        className="sync-arrow"
        d="M260 130 C255 140, 245 140, 230 130"
        stroke="#3A3A3A"
        strokeWidth="3"
        fill="none"
      />

      {/* Logic dots */}
      <circle className="dot" cx="180" cy="200" r="5" fill="#FCDC9B" />
      <circle className="dot" cx="200" cy="220" r="4" fill="#E45454" />
      <circle className="dot" cx="160" cy="220" r="4" fill="#4DA3FF" />
    </svg>
  );
};

export default WebMobileApps;
