"use client";
import Image from "next/image";
import logo from "../../assets/images/trio-logo.png";
import { CiMenuFries } from "react-icons/ci";
import { NavLinks } from "./NavLinks";
import { useGSAP } from "@gsap/react";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { heroTimeline } from "./HeroTimeline";
import { useParams, usePathname } from "next/navigation";
import { Link } from "../../../../i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
const Header = () => {
  const params = useParams();
  const locale = params.locale as string;
  const isArabic = locale === "ar";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useGSAP(() => {
    // Basic Imports
    const introLogo = document.querySelector(".intro-logo") as HTMLElement;
    const headerLogo = document.querySelector(".logo") as HTMLElement;
    const overlay = document.querySelector(".intro-overlay") as HTMLElement;
    // Basic Calculations
    const calculatePositions = () => {
      const introRect = introLogo.getBoundingClientRect();
      const headerRect = headerLogo.getBoundingClientRect();
      const viewportCenterX = window.innerWidth / 2;
      const viewportCenterY = window.innerHeight / 2;
      const startX = viewportCenterX - (introRect.left + introRect.width / 1.8);
      const startY = viewportCenterY - (introRect.top + introRect.height / 2);
      const endX = headerRect.left - introRect.left;
      const endY = headerRect.top - introRect.top;
      const scaleRatio = headerLogo.clientWidth / introLogo.clientWidth;
      return { startX, startY, endX, endY, scaleRatio };
    };

    const pos = calculatePositions();

    // Fade-in overlay
    heroTimeline.fromTo(
      overlay,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );

    // Center + cinematic intro
    heroTimeline.fromTo(
      introLogo,
      {
        opacity: 0,
        scale: 3,
        rotate: -30,
        x: pos.startX,
        y: pos.startY,
        filter: "brightness(0.3) blur(15px)",
      },
      {
        opacity: 1,
        scale: 1.3,
        rotate: 0,
        x: pos.startX,
        y: pos.startY,
        filter: "brightness(1.1) blur(0px)",
        duration: 1.5,
        ease: "power4.out",
      }
    );

    // Slight camera push before moving
    heroTimeline.to(introLogo, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    });

    // Move from center → header position (pixel-perfect)
    heroTimeline.to(introLogo, {
      x: pos.endX,
      y: pos.endY,
      scale: pos.scaleRatio,
      duration: 2,
      ease: "power4.inOut",
    });

    // Remove overlay while finishing animation
    heroTimeline.to(
      overlay,
      {
        opacity: 0,
        y: -40,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => overlay.remove(),
      },
      "-=1"
    );

    // Animate nav links
    heroTimeline.fromTo(
      ".links > *",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    // Menu button
    heroTimeline.fromTo(
      ".menu",
      { x: 40, opacity: 0, rotate: 20 },
      {
        x: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.7,
        ease: "back.out(1.6)",
      },
      "-=0.6"
    );
  });

  return (
    <header className="w-full  flex justify-between items-center px-3 lg:px-11 sticky top-0 left-0 z-50 bg-gray-50 border-b-2 border-b-gray-200">
      <div className="intro-overlay fixed inset-0 bg-white flex items-center justify-center z-9999 ">
        <Image
          src={logo}
          height={200}
          width={200}
          alt="Intro Logo"
          className="intro-logo"
        />
      </div>
      <Link className="logo" href={"/"}>
        <Image src={logo} height={100} width={120} alt=" Logo" />
      </Link>
      <LanguageSwitcher/>
      {/* NavLinks */}
      <div className="w-1/2 lg:flex justify-between items-center hidden links">
        {NavLinks.map((el, idx) => {
          const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
          const isActive = pathWithoutLocale === el.to || (pathWithoutLocale.startsWith(el.to) && el.to !== "/")
          return (
            <Link
              href={el.to}
              key={idx}
              className={` text-[18px]  ${
                isActive ? "font-bold text-amber-400 text-shadow-gray-950" :
                "font-semibold text-black text-shadow-gray-950"
              }`}
            >
              {isArabic ? el.titleAr : el.titleEn}
            </Link>
          );
        })}
      </div>
      {/* Burger Menu */}
      <CiMenuFries
        className=" font-bold text-2xl block lg:hidden text-gray-950 menu"
        onClick={() => setIsOpen(!isOpen)}
      />
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
