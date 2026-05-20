import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AppMaintenance: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const server = svg.querySelector("#server");
    const devices = svg.querySelectorAll(".device");
    const gears = svg.querySelectorAll(".gear");
    const wrench = svg.querySelector("#wrench");
    const notif = svg.querySelector("#notif");
    const updates = svg.querySelectorAll(".update");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : 1,
      },
    });

    // Server pops in
    tl.from(server, {
      opacity: 0,
      y: 20,
      scale: 0.85,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Devices fade in
    tl.from(
      devices,
      {
        opacity: 0,
        y: 15,
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.3"
    );

    // Gears rotate and pop
    tl.from(
      gears,
      {
        opacity: 0,
        scale: 0,
        rotate: -90,
        transformOrigin: "center",
        stagger: 0.15,
        duration: 0.5,
        ease: "back.out(2)",
      },
      "-=0.4"
    );

    // Wrench slides in
    tl.from(wrench, {
      opacity: 0,
      x: -20,
      rotate: -15,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.4");

    // Notifications pop
    tl.from(notif, {
      opacity: 0,
      scale: 0,
      duration: 0.35,
      ease: "back.out(2.2)",
    }, "-=0.35");

    // Update indicators fade in
    tl.from(
      updates,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.25,
        ease: "back.out(2)",
      },
      "-=0.4"
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
      {/* Server / Cloud */}
      <rect
        id="server"
        x="50"
        y="50"
        width="100"
        height="120"
        rx="10"
        fill="#F7F5F2"
        stroke="#3A3A3A"
        strokeWidth="3"
      />
      <line x1="50" y1="80" x2="150" y2="80" stroke="#3A3A3A" strokeWidth="2" />
      <line x1="50" y1="110" x2="150" y2="110" stroke="#3A3A3A" strokeWidth="2" />

      {/* Devices */}
      <rect className="device" x="180" y="40" width="60" height="90" rx="8" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="device" x="180" y="150" width="90" height="60" rx="8" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />

      {/* Gears */}
      <g className="gear" transform="translate(120, 200)">
        <circle r="12" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
        <path
          d="M0 -16 L4 -10 L16 0 L4 10 L0 16 L-4 10 L-16 0 L-4 -10 Z"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="2"
        />
      </g>
      <g className="gear" transform="translate(230, 120)">
        <circle r="8" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
        <path
          d="M0 -12 L3 -7 L12 0 L3 7 L0 12 L-3 7 L-12 0 L-3 -7 Z"
          fill="#FCDC9B"
          stroke="#3A3A3A"
          strokeWidth="2"
        />
      </g>

      {/* Wrench */}
      <path
        id="wrench"
        d="M280 50 L300 40 L310 50 L295 65 Z"
        fill="#3A3A3A"
      />

      {/* Notification Badge */}
      <circle id="notif" cx="290" cy="30" r="10" fill="#FF4D4F" stroke="#3A3A3A" strokeWidth="2" />
      <text x="285" y="35" fontSize="10" fill="white" fontWeight="bold">!</text>

      {/* Update Indicators */}
      <circle className="update" cx="50" cy="200" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
      <circle className="update" cx="70" cy="220" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
      <circle className="update" cx="90" cy="200" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
    </svg>
  );
};

export default AppMaintenance;
