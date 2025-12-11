import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimationMotionGraphics: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const timeline = svg.querySelector("#timeline");
    const playhead = svg.querySelector("#playhead");
    const keyframes = svg.querySelectorAll(".keyframe");
    const ball = svg.querySelector("#ball");
    const motionPath = svg.querySelector("#motion-path");
    const handles = svg.querySelectorAll(".handle");
    const curve = svg.querySelector("#easing-curve");
    const sparks = svg.querySelectorAll(".spark");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : true,
      }
    });

    // Timeline appears
    tl.from(timeline, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: "power2.out"
    });

    // Keyframes pop in
    tl.from(
      keyframes,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.35,
        ease: "back.out(2)"
      },
      "-=0.3"
    );

    // Playhead slides in
    tl.from(
      playhead,
      {
        opacity: 0,
        x: -20,
        duration: 0.4,
        ease: "power2.out"
      },
      "-=0.25"
    );

    // Motion path draws
    tl.from(
      motionPath,
      {
        opacity: 0,
        scale: 0.6,
        duration: 0.6,
        transformOrigin: "left center",
        ease: "power3.out"
      },
      "-=0.3"
    );

    // Ball pops in
    tl.from(
      ball,
      {
        opacity: 0,
        scale: 0,
        duration: 0.4,
        ease: "back.out(2)"
      },
      "-=0.3"
    );

    // Handles rise
    tl.from(
      handles,
      {
        opacity: 0,
        y: 15,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Easing curve
    tl.from(
      curve,
      {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.5,
        ease: "power2.out"
      },
      "-=0.2"
    );

    // Spark pops
    tl.from(
      sparks,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.08,
        duration: 0.25,
        ease: "back.out(3)"
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
      {/* Timeline */}
      <rect
        id="timeline"
        x="30"
        y="180"
        width="300"
        height="8"
        rx="4"
        fill="#3A3A3A"
      />

      {/* Keyframes */}
      <rect className="keyframe" x="50" y="170" width="12" height="28" rx="3" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="keyframe" x="130" y="170" width="12" height="28" rx="3" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="keyframe" x="210" y="170" width="12" height="28" rx="3" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="keyframe" x="290" y="170" width="12" height="28" rx="3" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Playhead */}
      <rect
        id="playhead"
        x="98"
        y="150"
        width="4"
        height="80"
        fill="#3A3A3A"
      />

      {/* Motion Path */}
      <path
        id="motion-path"
        d="M40 100 C120 40, 200 160, 320 100"
        stroke="#3A3A3A"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Moving Object */}
      <circle
        id="ball"
        cx="40"
        cy="100"
        r="12"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />

      {/* Handles */}
      <circle className="handle" cx="120" cy="40" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="handle" cx="200" cy="160" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Easing Curve */}
      <path
        id="easing-curve"
        d="M40 230 C120 180, 220 250, 320 200"
        stroke="#3A3A3A"
        strokeWidth="3"
        fill="none"
      />

      {/* Sparkles */}
      <polygon className="spark" points="85,75 90,85 80,85" fill="#FCDC9B" />
      <polygon className="spark" points="300,150 305,160 295,160" fill="#FCDC9B" />
      <polygon className="spark" points="180,30 185,40 175,40" fill="#FCDC9B" />
    </svg>
  );
};

export default AnimationMotionGraphics;
