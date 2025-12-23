import { useGSAP } from "@gsap/react";
import AboutUsText from "./AboutUsText";
import { heroTimeline } from "../(homePage)/HeroTimeline";
import { useTranslations } from "next-intl";

export default function AboutHero() {
  const t = useTranslations("About");
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
      className="w-full h-screen bg-[#F4FCFD] flex flex-col justify-center items-center rounded-2xl shadow-2xl"
      id="about_hero"
    >
      <span className="text-md text-gray-400">{t("story")}</span>
      <AboutUsText />
      {/* here the about text will be added */}
    </div>
  );
}
