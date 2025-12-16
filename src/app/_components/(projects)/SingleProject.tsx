"use client";
import { useGSAP } from "@gsap/react";
import Image, { StaticImageData } from "next/image";
import { heroTimeline } from "../(homePage)/HeroTimeline";

interface SingleProjectProps {
  title: string;
  logo: StaticImageData;
  images?: StaticImageData[];
  brief: string;
  details?: string;
}
export default function SingleProject({
  title,
  logo,
  images,
  brief,
  details,
}: SingleProjectProps) {
  useGSAP(() => {
    heroTimeline.fromTo(
      "#project_title",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.inOut",
      }
    );
    heroTimeline.fromTo(
      "#project_logo",
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.inOut",
      }
    );
    heroTimeline.fromTo(
      "#project_brief",
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.inOut",
      }
    );
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-100">
      {/* Project Head */}
      <div
        className="w-full py-5 px-5 lg:px-20 flex flex-col-reverse justify-between items-center lg:flex-row"
        id="project_head"
      >
        <div className="flex flex-col gap-9">
          <h1 className="text-3xl lg:text-5xl font-semibold" id="project_title">
            {title}
          </h1>
          <p id="project_brief">{brief}</p>
        </div>
        <Image
          src={logo}
          alt={`${title}'s Logo`}
          width={300}
          height={300}
          className="object-cover"
          id="project_logo"
        />
      </div>
      {/* The Details and images to be added */}
    </div>
  );
}
