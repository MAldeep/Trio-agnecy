import { useGSAP } from "@gsap/react";
import { heroTimeline } from "../(homePage)/HeroTimeline";
import ServicesHorizontalImageReveal from "./ServicesHorizontalImageReveal";
import DigitalMarketing from "./DigitalMarketing";
import GraphicDesign from "./GraphicDesign";
import WebMobileApps from "./WebMobileApps";
import ContentCreation from "../(homePage)/ContentCreation";
import SEOOptimization from "../(homePage)/SEOOptimization";
import MediaBuying from "../(homePage)/MediaBuying";
import MediaProduction from "./MediaProduction";
import { useTranslations } from "next-intl";
import { useIsArabic } from "../shared components/useIsArabic";
import clsx from "clsx";
import { aref, poppins } from "@/app/fonts";
// note : service brief will be added when data flow
export default function ServicesHero() {
  const { isArabic } = useIsArabic();
  const t = useTranslations("Services");
  useGSAP(() => {
    heroTimeline.fromTo(
      "#service_span",
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.inOut",
      }
    );
    heroTimeline.fromTo(
      "#service_title",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.inOut",
      }
    );
  }, []);
  return (
    <div className="w-full min-h-screen bg-[#F4FCFD] flex justify-center items-center flex-col py-10 gap-44">
      {/* the hero section */}
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <span className="text-sm text-gray-400" id="service_span">
          {t("TrioServices")}
        </span>
        <h1
          className={clsx(
            "text-5xl lg:text-8xl font-semibold",
            isArabic ? aref.className : poppins.className
          )}
          id="service_title"
        >
          {t("title")}
        </h1>
      </div>
      <div className="w-full">
        <ServicesHorizontalImageReveal
          Component={DigitalMarketing}
          serviceName={t("DigitalMarketing.title")}
          serviceBrief="Digital Marketing Brief"
          bgColor="bg-[#143C58]"
          txtColor="text-white"
        />
        <ServicesHorizontalImageReveal
          Component={GraphicDesign}
          serviceName={t("GraphicDesign.title")}
          serviceBrief="Graphic Design Brief"
          bgColor="bg-[#F0BA37]"
          txtColor="text-white"
        />
        <ServicesHorizontalImageReveal
          Component={WebMobileApps}
          serviceName={t("WebMobileAppsSubServices.title")}
          serviceBrief="Web & Mobile Apps Brief"
          bgColor="bg-[#1E3B4E]"
          txtColor="text-white"
        />
        <ServicesHorizontalImageReveal
          Component={ContentCreation}
          serviceName={t("ContentCreation")}
          serviceBrief="Content Creation Brief"
          bgColor="bg-[#000000]"
          txtColor="text-white"
        />
        <ServicesHorizontalImageReveal
          Component={SEOOptimization}
          serviceName={t("SEO")}
          serviceBrief="SEO Brief"
          bgColor="bg-[#143C58]"
          txtColor="text-white"
        />
        <ServicesHorizontalImageReveal
          Component={MediaBuying}
          serviceName={t("MediaBuying")}
          serviceBrief="Media Buying Brief"
          bgColor="bg-[#F0BA37]"
          txtColor="text-white"
        />
        {/* <ServicesHorizontalImageReveal
          Component={MediaBuying}
          serviceName={t("MediaProductionSubServices.title")}
          serviceBrief="Media Buying Brief"
          bgColor="bg-[#1E3B4E]"
          txtColor="text-white"
        /> */}
        <ServicesHorizontalImageReveal
          Component={MediaProduction}
          serviceName={t("MediaProductionSubServices.title")}
          serviceBrief="Media Production Brief"
          bgColor="bg-[#000000]"
          txtColor="text-white"
        />
      </div>
    </div>
  );
}
