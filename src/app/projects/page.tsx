"use client";

import { useEffect } from "react";
import { heroTimeline } from "../_components/(homePage)/HeroTimeline";
import Header from "../_components/(homePage)/Header";
import ProjectsHead from "../_components/(projects)/ProjectsHead";
import ProjectsContent from "../_components/(projects)/ProjectsContent";

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
