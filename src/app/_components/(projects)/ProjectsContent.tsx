import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";
export default function ProjectsContent() {
  return (
    <div className="w-full min-h-screen py-5 px-5 lg:px-20 flex flex-col lg:flex-row justify-between items-center flex-wrap gap-4">
      {
        projects.map((p) => (
          <ProjectCard
            key={p.id}
            id={p.id}
            url={p.logo}
            title={p.title}
          />
        ))
      }
    </div>
  )
}
