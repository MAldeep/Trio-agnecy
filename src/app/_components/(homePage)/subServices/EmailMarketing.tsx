import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EmailMarketing: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const envelope = svgRef.current.querySelector<SVGPathElement>("#envelope");
    const flap = svgRef.current.querySelector<SVGPathElement>("#flap");
    const sheet = svgRef.current.querySelector<SVGRectElement>("#sheet");
    const notifs = svgRef.current.querySelectorAll<SVGCircleElement>(".notif");
    const pulses = svgRef.current.querySelectorAll<SVGCircleElement>(".pulse");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 100%", // animate when entering viewport
        scrub : 1,
      }
    });

    // Envelope entrance
    tl.from(envelope, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out"
    });

    // Flap open animation
    tl.from(flap, {
      opacity: 0,
      rotateX: -90,
      transformOrigin: "top center",
      duration: 0.5,
      ease: "back.out(2)"
    }, "-=0.3");

    // Email sheet sliding out
    tl.from(sheet, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.2");

    // Notification pop
    tl.from(notifs, {
      scale: 0,
      transformOrigin: "center",
      duration: 0.3,
      stagger: 0.15,
      ease: "back.out(2)"
    }, "-=0.4");

    // Sending pulse rings
    tl.from(pulses, {
      scale: 0,
      opacity: 0,
      transformOrigin: "center",
      duration: 0.6,
      stagger: 0.2,
      ease: "power1.out"
    }, "-=0.2");
  }, []);

  return (
    <svg
      ref={svgRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 260"
      width="320"
      height="200"
      className="w-full h-auto"
      fill="none"
    >

      {/* Envelope body */}
      <path
        id="envelope"
        d="M40 140 L160 220 L280 140 L280 70 L40 70 Z"
        stroke="#F7F5F2"
        strokeWidth="4"
        fill="none"
      />

      {/* Envelope flap */}
      <path
        id="flap"
        d="M40 70 L160 150 L280 70"
        stroke="#F7F5F2"
        strokeWidth="4"
        fill="none"
      />

      {/* Email sheet */}
      <rect
        id="sheet"
        x="105"
        y="30"
        width="110"
        height="90"
        rx="8"
        stroke="#F7F5F2"
        strokeWidth="3"
      />

      {/* Lines on email sheet (represent text) */}
      <line x1="120" y1="55" x2="200" y2="55" stroke="#F7F5F2" strokeWidth="2" opacity="0.5" />
      <line x1="120" y1="75" x2="200" y2="75" stroke="#F7F5F2" strokeWidth="2" opacity="0.5" />
      <line x1="120" y1="95" x2="180" y2="95" stroke="#F7F5F2" strokeWidth="2" opacity="0.5" />

      {/* Notification bubbles */}
      <circle className="notif" cx="260" cy="55" r="10" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />
      <circle className="notif" cx="95" cy="160" r="10" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2" />

      {/* Sending pulse rings */}
      <circle className="pulse" cx="160" cy="30" r="10" stroke="#F7F5F2" strokeWidth="2" opacity="0.7" />
      <circle className="pulse" cx="160" cy="30" r="20" stroke="#F7F5F2" strokeWidth="2" opacity="0.4" />
      <circle className="pulse" cx="160" cy="30" r="30" stroke="#F7F5F2" strokeWidth="2" opacity="0.2" />

    </svg>
  );
};

export default EmailMarketing;
