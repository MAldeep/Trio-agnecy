import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnalyticsDashboard: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const bars = svgRef.current.querySelectorAll<SVGRectElement>(".bar");
    const line = svgRef.current.querySelector<SVGPathElement>("#analytics-line");
    const dots = svgRef.current.querySelectorAll<SVGCircleElement>(".dot");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 90%",
        scrub : true,
      }
    });

    tl.set(bars, { scaleY: 0, transformOrigin: "center bottom" })
      .fromTo(line, { strokeDasharray: 1000, strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 1.2, ease: "power2.out" })
      .to(bars, { scaleY: 1, stagger: 0.08, duration: 0.9, ease: "power3.out" }, "<")
      .fromTo(dots, { scale: 0 }, { scale: 1, stagger: 0.06, duration: 0.5, transformOrigin: "center" }, "<");
  }, []);

  return (
    <svg ref={svgRef} className="w-full h-auto js-svg-color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 200" width="360" height="200" fill="none">
      <g id="analytics-bars" stroke="#F7F5F2" strokeWidth="4" strokeLinecap="round">
        <rect className="bar" x="30" y="80" width="18" height="90" fill="none" />
        <rect className="bar" x="70" y="50" width="18" height="120" fill="none" />
        <rect className="bar" x="110" y="110" width="18" height="60" fill="none" />
        <rect className="bar" x="150" y="30" width="18" height="140" fill="none" />
        <rect className="bar" x="190" y="95" width="18" height="75" fill="none" />
        <rect className="bar" x="230" y="60" width="18" height="110" fill="none" />
      </g>
      <path id="analytics-line" d="M20 130 C60 100, 100 90, 140 110 S220 120, 300 70" stroke="#F7F5F2" strokeWidth="3" fill="none" strokeLinejoin="round" strokeLinecap="round" />
      <g id="analytics-dots" fill="#FCDC9B" stroke="#F7F5F2" strokeWidth="2">
        <circle className="dot" cx="20" cy="130" r="5" />
        <circle className="dot" cx="60" cy="110" r="5" />
        <circle className="dot" cx="100" cy="100" r="5" />
        <circle className="dot" cx="140" cy="120" r="5" />
        <circle className="dot" cx="220" cy="125" r="5" />
        <circle className="dot" cx="300" cy="75" r="5" />
      </g>
    </svg>
  );
};

export default AnalyticsDashboard;
