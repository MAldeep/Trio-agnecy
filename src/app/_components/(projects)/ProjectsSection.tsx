import React from "react";
import ProjectsContent from "./ProjectsContent";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="w-full flex flex-col">
      <ProjectsContent />
      <div className="w-full flex px-2.5">
        <Link
          className="w-full py-2.5 rounded-md bg-gray-950 text-center text-white"
          href="/projects"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}
