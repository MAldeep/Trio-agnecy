"use client";
import { useEffect } from "react";
import Hero from "./_components/(homePage)/Hero";
import { heroTimeline } from "./_components/(homePage)/HeroTimeline";
const Home = () => {
  useEffect(() => {
    heroTimeline.play();
  }, [])
  return (
    <div className="w-full">
      <Hero/>
    </div>
  );
}

export default Home
