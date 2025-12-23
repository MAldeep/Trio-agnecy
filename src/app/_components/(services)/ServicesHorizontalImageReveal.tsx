import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

interface ServiceHorizontalProps {
  Component: React.ComponentType;
  serviceName: string;
  serviceBrief: string;
  bgColor: string;
  txtColor: string;
}

export default function ServicesHorizontalImageReveal({
  Component,
  serviceName,
  serviceBrief,
  bgColor,
  txtColor,
}: ServiceHorizontalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const briefRef = useRef<HTMLParagraphElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      // Split text into spans for subtle stagger (by words)
      const words = titleRef.current!.querySelectorAll("span");

      tl.fromTo(
        words,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.08,
        }
      )
        .fromTo(
          briefRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          mediaRef.current,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`relative w-full py-24 overflow-hidden ${bgColor}`}
    >
      <div className="relative w-full flex flex-col lg:flex-row gap-5 justify-start px-4 lg:px-16">
        {/* Text */}
        <div className="w-full lg:w-[60%] flex flex-col items-start gap-6">
          <h1
            ref={titleRef}
            className="text-4xl lg:text-7xl font-bold leading-tight tracking-tight text-start"
          >
            {serviceName.split(" ").map((word, i) => (
              <span key={i} className={`inline-block ${txtColor} mr-2`}>
                {word}
              </span>
            ))}
          </h1>

          <p
            ref={briefRef}
            className="text-lg lg:text-xl text-neutral-500 max-w-md text-start"
          >
            {serviceBrief}
          </p>
        </div>

        {/* Media / Image */}
        <div
          ref={mediaRef}
          className="w-full lg:w-[40%] rounded-2xl overflow-hidden shadow-2xl bg-neutral-100 hover:shadow-none transition-all duration-100"
        >
          <Component />
        </div>
      </div>
    </section>
  );
}
