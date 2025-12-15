import ProjectCard from "./ProjectCard";
import logo from "../../assets/images/trio-logo.png"
export default function ProjectsContent() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <ProjectCard
        id={1}
        url={logo}
        title="Trio"
      />
    </div>
  )
}
