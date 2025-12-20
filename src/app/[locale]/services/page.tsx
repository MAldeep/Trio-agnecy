"use client";
import { useEffect } from "react";
import Header from "../../_components/(homePage)/Header";
import { heroTimeline } from "../../_components/(homePage)/HeroTimeline";
import ServicesHero from "../../_components/(services)/ServicesHero";
// import Services from "../_components/(homePage)/Services";

export default function ServicePage() {
  useEffect(() => {
    heroTimeline.play();
  }, []);
  return (
    <div className="w-full">
      <Header />
      <ServicesHero />
      {/* <Services/> */}
    </div>
  );
}
