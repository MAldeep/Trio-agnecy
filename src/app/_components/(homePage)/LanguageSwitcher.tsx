"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "../../../../i18n/routing";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLSpanElement>(null);

  // 1. Magnetic & Glow Effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = buttonRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Move button slightly toward mouse
    gsap.to(btn, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: "power2.out",
    });

    // Move the inner "flare" glow
    gsap.to(flareRef.current, {
      x: x * 1.5,
      y: y * 1.5,
      opacity: 1,
      duration: 0.2,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
    gsap.to(flareRef.current, {
      opacity: 0,
      duration: 0.4,
    });
  };

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    
    const tl = gsap.timeline({
      onComplete: () => router.replace(pathname, { locale: nextLocale })
    });

    tl.to(textRef.current, {
      y: -15,
      opacity: 0,
      rotateX: 90,
      duration: 0.2,
      ease: "power2.in"
    });
  };

  useEffect(() => {
    gsap.fromTo(textRef.current, 
      { y: 15, opacity: 0, rotateX: -90 },
      { y: 0, opacity: 1, rotateX: 0, duration: 0.5, ease: "back.out(2)" }
    );
  }, [locale]);

  return (
    <div className="perspective-1000 flex items-center justify-center">
      <button
        ref={buttonRef}
        onClick={toggleLanguage}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        // Responsiveness: Smaller on mobile (px-4 py-1.5), larger on desktop (lg:px-8 lg:py-2.5)
        className="group relative overflow-hidden rounded-full border-2 border-[#143C58] bg-[#143C58] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#F0BA37] lg:px-8 lg:py-2.5 lg:text-sm"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Subtle Background Flare (Orange) */}
        <span 
          ref={flareRef}
          className="absolute inset-0 -z-10 bg-[#F0BA37] blur-xl opacity-0 transition-opacity pointer-events-none"
          style={{ width: '150%', height: '150%', left: '-25%', top: '-25%' }}
        />

        {/* Text Container */}
        <div ref={textRef} className="relative z-10 flex items-center gap-2">
          <span className="group-hover:text-[#F0BA37] transition-colors duration-300">
            {locale === "en" ? "ar" : "ar"}
          </span>
          
          {/* Decorative Dot */}
          <span className="h-1 w-1 rounded-full bg-[#F0BA37] shadow-[0_0_8px_#F0BA37]" />
        </div>
      </button>
    </div>
  );
}