"use client";
import { useEffect } from "react";
import Header from "../../_components/(homePage)/Header";
import { heroTimeline } from "../../_components/(homePage)/HeroTimeline";
import AboutHero from "../../_components/(about)/AboutHero";

export default function AboutUs() {
  useEffect(() => {
    heroTimeline.play();
  }, []);
  return (
    <div className="w-full relative">
      <Header />
      <div className="p-2">
        <AboutHero />
      </div>
    </div>
  );
}
