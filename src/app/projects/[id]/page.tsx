"use client";

import Header from "@/app/_components/(homePage)/Header";
import { heroTimeline } from "@/app/_components/(homePage)/HeroTimeline";
import { projects } from "@/app/_components/(projects)/projectsData";
import SingleProject from "@/app/_components/(projects)/SingleProject";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function SingleProjectPage() {
  const params = useParams();
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);
  useEffect(() => {
    heroTimeline.play();
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <Header />
      <SingleProject
        logo={project.logo}
        title={project.title}
        images={project.images}
        brief={project.brief}
      />
    </div>
  );
}
