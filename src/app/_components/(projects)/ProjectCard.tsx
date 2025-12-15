import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import gsap from "gsap";

interface ProjectProps {
  id: number;
  url: StaticImageData;
  title: string;
}

export default function ProjectCard({ id, url, title }: ProjectProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize overlay as hidden
    gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "none" });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(overlayRef.current, {
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });
  };

  return (
    <div
      className="relative w-1/4 h-72"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image src={url} alt={title} fill className="absolute inset-0 object-cover z-10"/>
      <div ref={overlayRef} className="relative w-full h-full bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center gap-6 z-30 cursor-pointer">
        <h3 className="text-white text-center">{title}</h3>
        <Link href={`/projects/${id}`} className="p-2 bg-gray-50 text-gray-950">More Details</Link>
      </div>
    </div>
  );
}
