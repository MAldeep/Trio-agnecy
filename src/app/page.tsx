"use client";
import { useEffect } from "react";
import Hero from "./_components/(homePage)/Hero";
import { heroTimeline } from "./_components/(homePage)/HeroTimeline";
import Header from "./_components/(homePage)/Header";
import About from "./_components/(homePage)/About";
import Services from "./_components/(homePage)/Services";
const Home = () => {
  useEffect(() => {
    heroTimeline.play();
  }, []);
  return (
    <div className="w-full relative">
      <Header/>
      <Hero/>
      <About/>
      <Services/>
    </div>
  );
}

export default Home
