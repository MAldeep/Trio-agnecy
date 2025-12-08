import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ECommerceSolutions: React.FC = () => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const cart = svg.querySelector("#cart");
    const products = svg.querySelectorAll(".product");
    const buyButtons = svg.querySelectorAll(".buy");
    const truck = svg.querySelector("#truck");
    const currency = svg.querySelectorAll(".currency");
    const sparkles = svg.querySelectorAll(".spark");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svg,
        start: "top 100%",
        scrub : 1,
      },
    });

    // Cart pops in
    tl.from(cart, {
      opacity: 0,
      scale: 0.8,
      transformOrigin: "center",
      duration: 0.7,
      ease: "back.out(1.7)",
    });

    // Product cards slide up
    tl.from(
      products,
      {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.4"
    );

    // Buy buttons pop
    tl.from(
      buyButtons,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.15,
        duration: 0.35,
        ease: "back.out(2)",
      },
      "-=0.4"
    );

    // Delivery truck slides in
    tl.from(truck, {
      opacity: 0,
      x: 50,
      duration: 0.6,
      ease: "power2.out",
    }, "-=0.3");

    // Currency icons appear
    tl.from(
      currency,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.25,
        ease: "back.out(2)",
      },
      "-=0.5"
    );

    // Sparkles pop
    tl.from(
      sparkles,
      {
        opacity: 0,
        scale: 0,
        stagger: 0.1,
        duration: 0.25,
        ease: "back.out(1.8)",
      },
      "-=0.5"
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
      {/* Shopping Cart */}
      <g id="cart">
        <rect x="50" y="50" width="80" height="60" rx="8" fill="#F7F5F2" stroke="#3A3A3A" strokeWidth="3" />
        <circle cx="60" cy="115" r="6" fill="#3A3A3A" />
        <circle cx="120" cy="115" r="6" fill="#3A3A3A" />
        <line x1="70" y1="50" x2="80" y2="30" stroke="#3A3A3A" strokeWidth="3" />
      </g>

      {/* Product Cards */}
      <rect className="product" x="150" y="40" width="80" height="40" rx="6" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="product" x="150" y="95" width="80" height="40" rx="6" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="product" x="150" y="150" width="80" height="40" rx="6" fill="#EDEBE7" stroke="#3A3A3A" strokeWidth="2" />

      {/* Buy Buttons */}
      <rect className="buy" x="240" y="50" width="60" height="25" rx="5" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="buy" x="240" y="105" width="60" height="25" rx="5" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <rect className="buy" x="240" y="160" width="60" height="25" rx="5" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Delivery Truck */}
      <g id="truck">
        <rect x="50" y="180" width="80" height="40" rx="6" fill="#EFEDE9" stroke="#3A3A3A" strokeWidth="2" />
        <circle cx="60" cy="225" r="6" fill="#3A3A3A" />
        <circle cx="120" cy="225" r="6" fill="#3A3A3A" />
      </g>

      {/* Currency / Coin Icons */}
      <circle className="currency" cx="300" cy="60" r="8" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />
      <circle className="currency" cx="310" cy="110" r="6" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="2" />

      {/* Sparkles */}
      <circle className="spark" cx="280" cy="180" r="5" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
      <circle className="spark" cx="320" cy="200" r="5" fill="#FCDC9B" stroke="#3A3A3A" strokeWidth="1.5" />
    </svg>
  );
};

export default ECommerceSolutions;
