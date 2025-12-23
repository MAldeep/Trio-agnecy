"use client";

import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { heroTimeline } from "../(homePage)/HeroTimeline";
import { useIsArabic } from "../shared components/useIsArabic";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { aref, poppins } from "@/app/fonts";

export default function ProjectsHead() {
  const isArabic = useIsArabic();
  const t = useTranslations("Projects");
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  useGSAP(() => {
    const split = new SplitText(titleRef.current, {
      type: "words",
    });
    heroTimeline.fromTo(
      split.words,
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
        stagger: 0.09,
        ease: "power2.inOut",
      }
    );
    return () => {
      split.revert();
    };
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F4FCFD]">
      <h2
        ref={titleRef}
        className={clsx(
          "w-full text-center text-5xl lg:text-7xl text-[#1E3B4E] font-semibold",
          isArabic ? aref.className : poppins.className
        )}
      >
        {t("head")}
      </h2>
    </div>
  );
}
