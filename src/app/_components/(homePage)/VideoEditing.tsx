import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoEditing: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const frame = svg.querySelector("#video-frame");
    const timeline = svg.querySelector("#timeline");
    const scissors = svg.querySelector("#scissors");
    const bars = svg.querySelectorAll(".adj-bar");
    const handles = svg.querySelectorAll(".handle");
    const sparkles = svg.querySelectorAll(".spark");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : true,
      },
    });

    // Video frame fade + slide
    tl.from(frame, {
      opacity: 0,
      y: -25,
      duration: 0.6,
      ease: "power2.out",
    });

    // Timeline draw effect
    tl.from(
      timeline,
      {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left",
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Adjustment bars
    tl.from(
      bars,
      {
        opacity: 0,
        y: 15,
        stagger: 0.08,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.25"
    );

    // Handles pop
    tl.from(
      handles,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "back.out(2)",
      },
      "-=0.25"
    );

    // Scissors cut animation
    tl.from(
      scissors,
      {
        opacity: 0,
        rotate: -25,
        transformOrigin: "center",
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.3"
    );

    // Sparkles pop
    tl.from(
      sparkles,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.25,
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
      {/* Video Frame Window */}
      <g id="video-frame" transform="translate(40,20)">
        <rect
          width="280"
          height="140"
          rx="12"
          fill="#F7F5F2"
          stroke="#3A3A3A"
          strokeWidth="3"
        />
        <rect
          x="15"
          y="20"
          width="250"
          height="100"
          rx="8"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="2"
        />
      </g>

      {/* Timeline Bar */}
      <rect
        id="timeline"
        x="40"
        y="185"
        width="280"
        height="8"
        rx="4"
        fill="#3A3A3A"
      />

      {/* Adjustment Bars */}
      <rect className="adj-bar" x="50" y="205" width="50" height="6" rx="3" fill="#3A3A3A" />
      <rect className="adj-bar" x="110" y="205" width="70" height="6" rx="3" fill="#3A3A3A" />
      <rect className="adj-bar" x="190" y="205" width="40" height="6" rx="3" fill="#3A3A3A" />
      <rect className="adj-bar" x="240" y="205" width="60" height="6" rx="3" fill="#3A3A3A" />

      {/* Handles */}
      <circle className="handle" cx="60" cy="185" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="handle" cx="160" cy="185" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="handle" cx="260" cy="185" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Scissors */}
      <g id="scissors" transform="translate(280,120)">
        <circle cx="0" cy="0" r="10" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />
        <circle cx="20" cy="0" r="10" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />
        <line x1="5" y1="5" x2="30" y2="20" stroke="#3A3A3A" strokeWidth="4" />
        <line x1="5" y1="-5" x2="30" y2="-20" stroke="#3A3A3A" strokeWidth="4" />
      </g>

      {/* Sparkles */}
      <polygon className="spark" points="90,160 95,170 85,170" fill="#FCDC9B" />
      <polygon className="spark" points="310,80 315,90 305,90" fill="#FCDC9B" />
      <polygon className="spark" points="180,40 185,50 175,50" fill="#FCDC9B" />
    </svg>
  );
};

export default VideoEditing;
