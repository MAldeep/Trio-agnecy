import { useGSAP } from "@gsap/react";
import AboutUsText from "./AboutUsText";
import { heroTimeline } from "../(homePage)/HeroTimeline";

export default function AboutHero() {
  useGSAP(() => {
    // starter animation
    heroTimeline.fromTo(
      "#about_hero",
      {
        opacity: 0,
        scale: 0.4,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power4.out",
      }
    );
  });
  return (
    <div
      className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center rounded-2xl shadow-2xl"
      id="about_hero"
    >
      <span className="text-md text-gray-400">Trio&apos;s Story</span>
      <AboutUsText />
    </div>
  );
}
