"use client";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { heroTimeline } from "../(homePage)/HeroTimeline";

export default function ProjectsHead() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  useGSAP(() => {
    const split = new SplitText(titleRef.current, {
      type: "chars",
    });
    heroTimeline.fromTo(
      split.chars,
      {
        y: 40,
        x: 40,
        opacity: 0,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 1,
        stagger : 0.09,
        ease: "power2.inOut",
      }
    );
    return () => {
      split.revert();
    };
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <h2
        ref={titleRef}
        className="w-full text-center text-5xl lg:text-7xl text-gray-950 font-semibold"
      >
        Our Projects
      </h2>
    </div>
  );
}
