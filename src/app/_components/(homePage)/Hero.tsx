"use client";
import { useGSAP } from "@gsap/react";
import { heroTimeline } from "./HeroTimeline";
import Link from "next/link";
import gsap, { ScrollTrigger } from "gsap/all";
import HeroImage from "./HeroImage";
import { useMediaQuery } from "react-responsive";
import { useTranslations } from "next-intl";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const isMobile =  useMediaQuery({ query: '(max-width: 768px)' });
  const anStart = isMobile ? "top top+=300" : "top top+=500";
  const t = useTranslations("Hero");
  useGSAP(() => {
    // starter animation
    heroTimeline
      .fromTo(
        ".word-up",
        { y: 50, scale: 0.8, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "startHero"
      )
      .fromTo(
        ".word-down",
        { y: -50, scale: 0.8, opacity: 0 },
        { y: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "startHero"
      )
      .fromTo(
        ".contact-button",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "startHero"
      );
    //scroll animation
    const scrollTl = gsap.timeline();
    scrollTl
      .to("#hero_text", {
        opacity: 0.4,
        position: "sticky",
        top: "20vh",
        duration: 1,
        scrollTrigger: {
          trigger: "#hero_image",
          start: anStart,
          end: "top center",
          scrub: 2,
        },
      })
      .to("#hero_image", {
        position: "sticky",
        top: "20vh",
        duration: 2,
        borderRadius: "20px",
        scrollTrigger: {
          trigger: "#hero_image",
          start: "top 40vh",
          end: "bottom top",
          scrub: 2,
        },
      })
      .to("#hero_image", {
        width: "99vw",
        height: "70vh",
        position: "sticky",
        top: "20vh",
        borderRadius: "0px",
        duration: 1,
        scrollTrigger: {
          trigger: "#hero_image",
          start: "center center",
          end: "bottom top",
          scrub: 4,
        },
      });
  });
  return (
    <div className=" w-full bg-[#F4FCFD] h-[300vh] flex flex-col justify-start items-center gap-5 z-30 pt-20 lg:pt-50">
      <div
        className=" flex flex-col gap-7 text-center items-center"
        id="hero_text"
      >
        <h1 className="text-3xl lg:text-7xl text-[#143C58] font-semibold text-center leading-snug">
          <span className="word-up inline-block mr-4 ">{t("first")}</span>
          <span className="word-up inline-block mr-4">{t("second")}</span>
          <span className="word-down inline-block mr-4">{t("third")}</span>
          <br />
          <span className="word-up inline-block mr-4">{t("fourth")}</span>
          <span className="word-down inline-block mr-4">{t("fifth")}</span>
          <span className="word-down inline-block mr-4">{t("sixth")}</span>
        </h1>
        <Link
          href={"/contact"}
          className="bg-[#1E3B4E] w-fit text-gray-100 px-6 py-3 rounded-md font-medium hover:bg-[#143C58] transition contact-button leading-snug"
        >
          {t("HeroBtn")}
        </Link>
      </div>
      <div
        className="w-full flex justify-center"
        id="hero_image"
        style={{ height: "60vh", width: "60vw" , borderRadius : "32px", overflow : "hidden"}}
      >
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
