"use client";

import { IoCloseSharp } from "react-icons/io5";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import gsap from "gsap/all";
import { useEffect } from "react";
import { useParams } from "next/navigation";

type OpenProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};
const SideMenu = ({ isOpen, setIsOpen }: OpenProps) => {
  const params = useParams();
  const locale = params.locale as string;

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".link",
        {
          y: -100,
          x: 100,
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          ease: "power1.in",
          duration: 1,
          stagger : 0.3
        }
      );
    }
  }, [isOpen]);
  return (
    <div
      className={`fixed top-0 right-0 z-9999 h-full flex flex-col justify-center items-center w-full bg-black shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <IoCloseSharp
        className="text-4xl absolute top-2 left-2 text-white"
        onClick={() => setIsOpen(false)}
      />
      <div className="w-full px-5 flex flex-col justify-center items-center gap-7">
        {NavLinks.map((el, idx) => (
          <Link key={idx} href={`/${locale}/${el.to}`} className="text-2xl text-white link">
            {locale === "ar" ? el.titleAr : el.titleEn}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
