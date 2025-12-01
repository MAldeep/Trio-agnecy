"use client";
import Image from "next/image";
import heroImage from "../../assets/images/hero.png";
import { useGSAP } from "@gsap/react";
import { heroTimeline } from "./HeroTimeline";
import gsap, { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const HeroImage = () => {
  useGSAP(() => {
    heroTimeline.fromTo(
      ".hero",
      {
        scale: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
    const heroImageTl = gsap.timeline();
    heroImageTl.to(".hero", {
      boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
      duration: 0.5,
      ease: "power2.in",
      scrollTrigger: {
        trigger: ".hero",
        start: "top center+=600",
        end: "top top",
        scrub: 2,
      },
    });
  }, []);
  return (
    <Image
      src={heroImage}
      alt="Hero-Image"
      className="object-cover w-full h-full hero"
    />
  );
};

export default HeroImage;
