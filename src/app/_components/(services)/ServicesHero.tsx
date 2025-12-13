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


export default function ServicesHero() {
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
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center flex-col py-10 gap-44">
      <div className="w-full flex flex-col gap-5 justify-center items-center">
        <span className="text-sm text-gray-400" id="service_span">
          Trio&apos;s Services
        </span>
        <h1 className="text-5xl lg:text-8xl font-semibold" id="service_title">
          Services
        </h1>
        
      </div>
      <div className="w-full">
          <ServicesHorizontalImageReveal
            Component={DigitalMarketing}
            serviceName="Digital Marketing"
            serviceBrief="Digital Marketing Brief"
            bgColor="bg-gray-200"
            txtColor="text-white"
          />
          <ServicesHorizontalImageReveal
            Component={GraphicDesign}
            serviceName="Graphic Design"
            serviceBrief="Graphic Design Brief"
            bgColor="bg-gray-400"
            txtColor="text-white"
          />
          <ServicesHorizontalImageReveal
            Component={WebMobileApps}
            serviceName="Web & Mobile Apps"
            serviceBrief="Web & Mobile Apps Brief"
            bgColor="bg-gray-200"
            txtColor="text-white"
          />
          <ServicesHorizontalImageReveal
            Component={ContentCreation}
            serviceName="Content Creation"
            serviceBrief="Content Creation Brief"
            bgColor="bg-gray-400"
            txtColor="text-white"
          />
          <ServicesHorizontalImageReveal
            Component={SEOOptimization}
            serviceName="SEO"
            serviceBrief="SEO Brief"
            bgColor="bg-gray-200"
            txtColor="text-white"
          />
          <ServicesHorizontalImageReveal
            Component={MediaBuying}
            serviceName="Media Buying"
            serviceBrief="Media Buying Brief"
            bgColor="bg-gray-400"
            txtColor="text-white"
          />
          <ServicesHorizontalImageReveal
            Component={MediaBuying}
            serviceName="Media Buying"
            serviceBrief="Media Buying Brief"
            bgColor="bg-gray-200"
            txtColor="text-white"
          />
          <ServicesHorizontalImageReveal
            Component={MediaProduction}
            serviceName="Media Production"
            serviceBrief="Media Production Brief"
            bgColor="bg-gray-400"
            txtColor="text-white"
          />
        </div>
    </div>
  );
}
