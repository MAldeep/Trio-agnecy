import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MediaBuying: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const screens = svg.querySelectorAll(".screen");
    const ads = svg.querySelectorAll(".ad");
    const coin = svg.querySelector("#coin");
    const cursor = svg.querySelector("#cursor");
    const graph = svg.querySelector("#graph");
    const sparkles = svg.querySelectorAll(".spark");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : true
      }
    });

    // Device screens appear
    tl.from(screens, {
      opacity: 0,
      y: 20,
      stagger: 0.15,
      duration: 0.5,
      ease: "power2.out"
    });

    // Ads slide in
    tl.from(
      ads,
      {
        opacity: 0,
        y: 15,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Coin pops
    tl.from(
      coin,
      {
        opacity: 0,
        scale: 0.4,
        rotate: -40,
        transformOrigin: "center",
        duration: 0.5,
        ease: "back.out(2)"
      },
      "-=0.25"
    );

    // Graph grows
    tl.from(
      graph,
      {
        opacity: 0,
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 0.6,
        ease: "power2.out"
      },
      "-=0.3"
    );

    // Cursor hits the ad (targeting)
    tl.from(
      cursor,
      {
        opacity: 0,
        x: -20,
        y: -10,
        duration: 0.4,
        ease: "power2.out"
      },
      "-=0.2"
    );

    // Spark effects
    tl.from(
      sparkles,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: "back.out(2)"
      },
      "-=0.3"
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
      {/* Screens / placements */}
      <rect className="screen" x="30" y="40" width="120" height="80" rx="8" stroke="#3A3A3A" strokeWidth="3" fill="#F7F5F2" />
      <rect className="screen" x="200" y="60" width="120" height="90" rx="8" stroke="#3A3A3A" strokeWidth="3" fill="#F7F5F2" />
      <rect className="screen" x="90" y="150" width="170" height="70" rx="8" stroke="#3A3A3A" strokeWidth="3" fill="#F7F5F2" />

      {/* Ad spaces */}
      <rect className="ad" x="45" y="55" width="90" height="20" rx="4" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="ad" x="215" y="80" width="90" height="20" rx="4" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="ad" x="110" y="165" width="130" height="25" rx="4" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Coin (budget) */}
      <g id="coin" transform="translate(300,40)">
        <circle r="18" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="3" />
        <text x="-6" y="6" fontSize="14" fill="#3A3A3A" fontWeight="bold">$</text>
      </g>

      {/* Graph for performance */}
      <polyline
        id="graph"
        points="60,220 110,190 160,200 210,170 260,180"
        stroke="#3A3A3A"
        strokeWidth="3"
        fill="none"
      />

      {/* Cursor targeting */}
      <g id="cursor" transform="translate(240,70)">
        <circle r="10" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
        <circle r="4" fill="#3A3A3A" />
      </g>

      {/* Spark success icons */}
      <polygon className="spark" points="80,45 85,55 75,55" fill="#FCDC9B" />
      <polygon className="spark" points="310,120 315,130 305,130" fill="#FCDC9B" />
      <polygon className="spark" points="180,165 185,175 175,175" fill="#FCDC9B" />
    </svg>
  );
};

export default MediaBuying;
