import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SocialMediaMarketing: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const icons = svgRef.current.querySelectorAll<SVGPathElement>(".smm-icon");
    const notifs = svgRef.current.querySelectorAll<SVGCircleElement>(".notif");
    const lines = svgRef.current.querySelectorAll<SVGLineElement>(".burst-line");
    const phone = svgRef.current.querySelector<SVGRectElement>("#phone-body");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 100%", // animate when entering viewport
        scrub : 1, 
      }
    });

    // PHONE FADE + DRAW IN
    tl.fromTo(
      phone,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );

    // SOCIAL ICON FLOAT-IN
    tl.fromTo(
      icons,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

    // NOTIFICATION POP
    tl.fromTo(
      notifs,
      { scale: 0 },
      { scale: 1, stagger: 0.1, duration: 0.3, transformOrigin: "center", ease: "back.out(2)" },
      "-=0.4"
    );

    // BURST LINES (LIKE EFFECT)
    tl.fromTo(
      lines,
      { scaleX: 0, opacity: 0 },
      { scaleX: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power1.out" },
      "-=0.2"
    );
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 360"
      width="300"
      height="200"
      fill="none"
      className="w-full h-auto"
    >

      {/* Phone Body */}
      <rect
        id="phone-body"
        x="60"
        y="30"
        width="180"
        height="300"
        rx="28"
        stroke="#F7F5F2"
        strokeWidth="4"
      />

      {/* Screen */}
      <rect
        x="75"
        y="60"
        width="150"
        height="240"
        rx="20"
        stroke="#F7F5F2"
        strokeWidth="2"
      />

      {/* Heart icon */}
      <path
        className="smm-icon"
        d="M150 110c12-18 40-10 40 10 0 20-20 34-40 50-20-16-40-30-40-50 0-20 28-28 40-10z"
        stroke="#F7F5F2"
        strokeWidth="3"
      />

      {/* Comment bubble */}
      <path
        className="smm-icon"
        d="M120 180c0-18 18-32 40-32s40 14 40 32-18 32-40 32c-6 0-12-1-18-3l-14 9 4-17c-7-6-12-13-12-21z"
        stroke="#F7F5F2"
        strokeWidth="3"
      />

      {/* Share arrow */}
      <path
        className="smm-icon"
        d="M150 240l40-15-40-15v10c-25 0-45-15-60-35 10 30 30 55 60 55v10z"
        stroke="#F7F5F2"
        strokeWidth="3"
      />

      {/* Notifications */}
      <circle className="notif" cx="210" cy="105" r="10" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="notif" cx="100" cy="175" r="10" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="notif" cx="220" cy="240" r="10" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />

      {/* Burst lines behind heart */}
      <line className="burst-line" x1="150" y1="85" x2="150" y2="70" stroke="#F7F5F2" strokeWidth="3" />
      <line className="burst-line" x1="130" y1="90" x2="115" y2="80" stroke="#F7F5F2" strokeWidth="3" />
      <line className="burst-line" x1="170" y1="90" x2="185" y2="80" stroke="#F7F5F2" strokeWidth="3" />

    </svg>
  );
};

export default SocialMediaMarketing;
