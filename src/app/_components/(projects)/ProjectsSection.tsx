import clsx from "clsx";
import ProjectsContent from "./ProjectsContent";
import Link from "next/link";
import { aref, poppins } from "@/app/fonts";
import { useIsArabic } from "../shared components/useIsArabic";

export default function ProjectsSection() {
  const { isArabic } = useIsArabic();
  return (
    <div className="w-full min-h-screenflex flex-col bg-[#F4FCFD] py-2.5 lg:py-9">
      <h2
        className={clsx(
          "text-center text-5xl lg:text-7xl font-semibold text-[#143C58]",
          isArabic ? aref.className : poppins.className
        )}
      >
        {isArabic ? "مشاريعنا" : "Our Projects"}
      </h2>
      <ProjectsContent />
      <div className="w-full flex px-2.5">
        <Link
          className="w-full py-2.5 rounded-md bg-[#1E3B4E] hover:bg-[#143C58] transition-all duration-150 text-center text-white"
          href="/projects"
        >
          {isArabic ? "المشاريع الكاملة" : "See All Projects"}
        </Link>
      </div>
    </div>
  );
}
