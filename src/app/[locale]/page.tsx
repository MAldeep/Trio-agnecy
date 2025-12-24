"use client";
import { useEffect } from "react";
import { heroTimeline } from "../_components/(homePage)/HeroTimeline";
import Header from "../_components/(homePage)/Header";
import Hero from "../_components/(homePage)/Hero";
import About from "../_components/(homePage)/About";
import Services from "../_components/(homePage)/Services";
import ProjectsSection from "../_components/(projects)/ProjectsSection";
import { useIsArabic } from "../_components/shared components/useIsArabic";

const Home = () => {
  const { locale } = useIsArabic();
  useEffect(() => {
    heroTimeline.play();
  }, []);
  return (
    <div className="w-full relative">
      <Header />
      <Hero />
      <About locale={locale} />
      <Services />
      <ProjectsSection />
    </div>
  );
};

export default Home;
