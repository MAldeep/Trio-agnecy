import Image, { StaticImageData } from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProjectProps {
  id: number;
  url: StaticImageData;
  title: string;
}

export default function ProjectCard({ id, url, title }: ProjectProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  const handleClick = () => {
    router.push(`/projects/${id}`);
  };

  return (
    <div
      className="relative w-full lg:w-1/4 h-72 overflow-hidden rounded-md cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Image src={url} alt={title} fill className="absolute inset-0 object-cover z-10"/>
      <div ref={overlayRef} className="relative w-full h-full bg-[rgba(0,0,0,0.4)] flex flex-col justify-center items-center gap-6 z-30">
        <h3 className="text-white text-center text-2xl">{title}</h3>
        <Link href={`/projects/${id}`} className="p-2 bg-gray-50 text-gray-950 rounded-md">More Details</Link>
      </div>
    </div>
  );
}
