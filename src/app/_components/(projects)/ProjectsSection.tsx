import ProjectsContent from "./ProjectsContent";
import Link from "next/link";

export default function ProjectsSection() {
  return (
    <div className="w-full min-h-screenflex flex-col bg-gray-200 py-2.5 lg:py-9">
      <h2 className="text-center text-5xl lg:text-7xl font-semibold">
        Our Projects
      </h2>
      <ProjectsContent />
      <div className="w-full flex px-2.5">
        <Link
          className="w-full py-2.5 rounded-md bg-gray-950 hover:bg-gray-600 transition-all duration-150 text-center text-white"
          href="/projects"
        >
          See All Projects
        </Link>
      </div>
    </div>
  );
}
