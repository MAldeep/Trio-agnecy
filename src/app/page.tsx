"use client";
import { useEffect } from "react";
import Hero from "./_components/(homePage)/Hero";
import { heroTimeline } from "./_components/(homePage)/HeroTimeline";
import Header from "./_components/(homePage)/Header";
const Home = () => {
  useEffect(() => {
    heroTimeline.play();
  }, [])
  return (
    <div className="w-full relative">
      <Header/>
      <Hero/>
    </div>
  );
}

export default Home
