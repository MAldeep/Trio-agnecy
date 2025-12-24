"use client";
import gsap from "gsap/all";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { useIsArabic } from "../shared components/useIsArabic";
import clsx from "clsx";
import { aref, poppins } from "@/app/fonts";

export default function AboutUsText() {
  const t = useTranslations("About");
  const { isArabic } = useIsArabic();
  const text: string = t("about");
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    if (!h1Ref.current) return;

    const words: NodeListOf<HTMLSpanElement> =
      h1Ref.current.querySelectorAll(".animated-word");

    gsap.fromTo(
      words,
      { filter: "brightness(50%)" },
      {
        filter: "brightness(220%)",
        stagger: {
          each: 0.3, // delay between words
          repeat: -1, // infinite loop
          yoyo: true,
        },
        duration: 0.8,
        ease: "power1.inOut",
      }
    );
  }, []);

  // Split by words (spaces) instead of characters to preserve Arabic letter connections
  const textElements = text.split(" ").map((word, i) => (
    <span key={i} className="inline-block animated-word mx-2">
      {word}
    </span>
  ));
  return (
    <h1
      ref={h1Ref}
      className={clsx(
        "text-5xl lg:text-8xl text-[#1E3B4E] font-semibold",
        isArabic ? aref.className : poppins.className
      )}
    >
      {textElements}
    </h1>
  );
}
