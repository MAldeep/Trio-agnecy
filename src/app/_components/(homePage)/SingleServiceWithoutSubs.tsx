import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import React from "react";
gsap.registerPlugin(ScrollTrigger);
interface ContentProps {
  ContentTitle: string;
  Component: React.ComponentType;
  bgColor: string;
  txtColor: string;
}
export default function SingleServiceWithoutSubs({
  ContentTitle,
  Component,
  bgColor,
  txtColor,
}: ContentProps) {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "#single_container",
      start: "top bottom",
      end: "top top",
      scrub: true,
      onEnter: () => {
        gsap.fromTo(
          "#content_text",
          {
            opacity: 0.1,
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          }
        );
      },
      onEnterBack: () => {
        gsap.fromTo(
          "#content_text",
          {
            opacity: 0.1,
          },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power2.inOut",
          }
        );
      },
    });
  });
  return (
    <div
      className={`w-full h-screen lg:h-[80vh] flex flex-col justify-center itemscenter gap-9 ${bgColor} py-20`}
      id="single_container"
    >
      <h1
        className={`text-5xl lg:text-7xl font-semibold ${txtColor} text-center`}
        id="content_text"
      >
        {ContentTitle}
      </h1>
      <Component />
    </div>
  );
}
