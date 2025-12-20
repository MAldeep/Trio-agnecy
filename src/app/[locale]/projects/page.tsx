"use client";

import Header from "@/app/_components/(homePage)/Header";
import { heroTimeline } from "@/app/_components/(homePage)/HeroTimeline";
import ProjectsContent from "@/app/_components/(projects)/ProjectsContent";
import ProjectsHead from "@/app/_components/(projects)/ProjectsHead";
import { useEffect } from "react";


export default function ProjectsPage() {
  useEffect(() => {
    heroTimeline.play();
  }, []);
  return (
    <div className="w-full">
      <Header />
      <ProjectsHead/>
      <ProjectsContent/>
    </div>
  );
}
