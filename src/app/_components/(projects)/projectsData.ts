import { StaticImageData } from "next/image";
import { trioImages } from "./projectsImages";

export const projects: {
  id: number;
  title: string;
  logo: StaticImageData;
  images?: StaticImageData[];
  brief : string;
  details ? : string;
}[] = [
  {
    id: 1,
    title: "Trio - Marketing Agency",
    logo: trioImages.logo,
    images: trioImages.images,
    brief : "We created some and succeeded in some",
  },
  {
    id: 2,
    title: "Test - Marketing Agency",
    logo: trioImages.logo,
    images: trioImages.images,
    brief : "We created some and succeeded in some",
  },
  {
    id: 3,
    title: "Test2 - Marketing Agency",
    logo: trioImages.logo,
    images: trioImages.images,
    brief : "We created some and succeeded in some",
  },
  {
    id: 4,
    title: "Test3 - Marketing Agency",
    logo: trioImages.logo,
    images: trioImages.images,
    brief : "We created some and succeeded in some",
  },
];
