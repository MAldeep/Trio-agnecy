import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContentCreation: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const documentEl = svg.querySelector("#document");
    const lines = svg.querySelectorAll(".line");
    const camera = svg.querySelector("#camera");
    const mic = svg.querySelector("#mic");
    const imageFrame = svg.querySelector("#imgFrame");
    const pen = svg.querySelector("#pen");
    const stars = svg.querySelectorAll(".star");
    const blocks = svg.querySelectorAll(".block");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : true,
      },
    });

    // Document fades and pops
    tl.from(documentEl, {
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      ease: "back.out(1.6)",
    });

    // Text lines fade in
    tl.from(
      lines,
      {
        opacity: 0,
        x: -15,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Camera pops in
    tl.from(camera, {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.45,
      ease: "back.out(1.8)",
    });

    // Microphone slides in
    tl.from(
      mic,
      {
        opacity: 0,
        x: 20,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.35"
    );

    // Image frame appears
    tl.from(
      imageFrame,
      {
        opacity: 0,
        y: 20,
        duration: 0.45,
        ease: "back.out(1.6)",
      },
      "-=0.4"
    );

    // Pen draws in
    tl.from(
      pen,
      {
        opacity: 0,
        rotate: -15,
        x: 25,
        y: -10,
        duration: 0.45,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Stars sparkle in
    tl.from(
      stars,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.35,
        ease: "back.out(2)",
      },
      "-=0.45"
    );

    // Floating blocks
    tl.from(
      blocks,
      {
        opacity: 0,
        y: 10,
        stagger: 0.1,
        duration: 0.35,
        ease: "power2.out",
      },
      "-=0.45"
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
      {/* Document */}
      <rect
        id="document"
        x="40"
        y="30"
        width="140"
        height="180"
        rx="10"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Text lines */}
      <line className="line" x1="55" y1="60" x2="165" y2="60" stroke="#3A3A3A" strokeWidth="2" />
      <line className="line" x1="55" y1="85" x2="165" y2="85" stroke="#3A3A3A" strokeWidth="2" />
      <line className="line" x1="55" y1="110" x2="165" y2="110" stroke="#3A3A3A" strokeWidth="2" />
      <line className="line" x1="55" y1="135" x2="165" y2="135" stroke="#3A3A3A" strokeWidth="2" />

      {/* Camera */}
      <rect id="camera" x="215" y="50" width="80" height="50" rx="8" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <circle cx="255" cy="75" r="12" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Microphone */}
      <g id="mic" transform="translate(230 130)">
        <rect x="-10" y="-20" width="20" height="40" rx="8" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
        <line x1="0" y1="20" x2="0" y2="40" stroke="#3A3A3A" strokeWidth="2" />
      </g>

      {/* Image Frame */}
      <rect id="imgFrame" x="200" y="150" width="100" height="70" rx="8" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="2" />
      <path d="M205 210 L230 180 L260 210 Z" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Pen */}
      <path
        id="pen"
        d="M170 200 L195 180 L205 190 L180 210 Z"
        fill="#3A3A3A"
      />

      {/* Stars */}
      <polygon className="star" points="180,45 185,55 175,55" fill="#FCDC9B" />
      <polygon className="star" points="280,120 285,130 275,130" fill="#FCDC9B" />
      <polygon className="star" points="260,190 265,200 255,200" fill="#FCDC9B" />

      {/* Floating content blocks */}
      <rect className="block" x="70" y="180" width="30" height="10" rx="3" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
      <rect className="block" x="110" y="200" width="40" height="12" rx="3" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
      <rect className="block" x="60" y="210" width="25" height="10" rx="3" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
    </svg>
  );
};

export default ContentCreation;
