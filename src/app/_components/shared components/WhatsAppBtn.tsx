"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function WhatsAppButton() {
  const phone = "01064661009";
  const message = "Hello, I’m interested!";
  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  const buttonRef = useRef<HTMLAnchorElement>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState(false);

  // Pulse animation
  useEffect(() => {
    if (!buttonRef.current) return;

    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.75,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  // Tooltip animation
  useEffect(() => {
    if (!tooltipRef.current) return;

    if (hovered) {
      gsap.fromTo(
        tooltipRef.current,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.25, ease: "power2.out" }
      );
    } else {
      gsap.to(tooltipRef.current, {
        opacity: 0,
        x: 10,
        duration: 0.2,
        ease: "power2.in",
      });
    }
  }, [hovered]);

  return (
    <div
      className="fixed bottom-6 right-6 flex items-center gap-2"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <span
        ref={tooltipRef}
        className={`px-3 py-1 bg-black text-white text-sm rounded-lg shadow pointer-events-none ${
          hovered ? "block" : "hidden"
        }`}
      >
        WhatsApp us
      </span>

      {/* Button */}
      <a
        ref={buttonRef}
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-lg"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
