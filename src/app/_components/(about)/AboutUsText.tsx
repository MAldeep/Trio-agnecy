"use client";
import gsap from "gsap/all";
import { useEffect, useRef } from "react";

export default function AboutUsText() {
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    if (!h1Ref.current) return;

    const letters: NodeListOf<HTMLSpanElement> =
      h1Ref.current.querySelectorAll("#char");

    gsap.fromTo(
      letters,
      { filter: "brightness(50%)" },
      {
        filter: "brightness(180%)",
        stagger: {
          each: 0.1, // delay between letters
          repeat: -1, // infinite loop
          yoyo: true, // brighten → dim → brighten
        },
        duration: 0.6,
        ease: "power1.inOut",
      }
    );
  }, []);
  const text = "About Us".split("").map((char, i) => (
    <span key={i} className="inline-block" id="char">
      {char}
    </span>
  ));
  return (
    <h1
      ref={h1Ref}
      className="text-5xl lg:text-8xl text-gray-800 font-semibold"
    >
      {text}
    </h1>
  );
}
