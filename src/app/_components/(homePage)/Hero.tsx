"use client";
import Header from "./Header";
import { useGSAP } from "@gsap/react";
import { heroTimeline } from "./HeroTimeline";
import Link from "next/link";
import Image from "next/image";
import hero from "../../assets/images/hero.png";

const Hero = () => {
  useGSAP(() => {
    heroTimeline.fromTo(
      ".word-up",
      {
        y: 50,
        scale: 0.8,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      "startHero"
    );
    heroTimeline.fromTo(
      ".word-down",
      {
        y: -50,
        scale: 0.8,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      },
      "startHero"
    );
    heroTimeline.fromTo(".contact-button",
      {
        y: -20,
        opacity : 0,
      },
      {
        y : 0,
        opacity : 1,
        duration : 1,
        ease : "power4.out"
      }
    )
  }, []);
  
  return (
    <div className="relative w-full h-[300vh] z-0 bg-gray-100">
      <div className="w-full h-full absolute inset-0 flex flex-col gap-30">
        <Header />
        <div className="w-full h-[200vh] flex flex-col justify-start items-center relative gap-5 z-30">
          <h1 className="text-6xl text-gray-950 font-bold text-center sticky top-40 leading-snug">
            <span className="word-up inline-block mr-4">Triple</span>
            <span className="word-up inline-block mr-4">The</span>
            <span className="word-down inline-block mr-4">Ideas</span>
            <br />
            <span className="word-up inline-block mr-4">Triple</span>
            <span className="word-down inline-block mr-4">The</span>
            <span className="word-down inline-block mr-4">Impact</span>
          </h1>
          <Link href={"/contact"} className="bg-gray-950 text-gray-100 px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition contact-button sticky top-100 leading-snug">
            Get in Touch
          </Link>
          {/* as a remainder this image will be animation leader over the text and will be replaced later */}
          <Image src={hero} alt="Hero-image" className="z-50 h-[60vh] w-2/3"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
