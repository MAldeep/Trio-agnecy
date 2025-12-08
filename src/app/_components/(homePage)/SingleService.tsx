import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface SingleServiceProps {
  flex_dir: string;
  service_name: string;
  ComponentOfsub: React.ComponentType;
}

export default function SingleService({
  flex_dir,
  service_name,
  ComponentOfsub
}: SingleServiceProps) {

useGSAP(() => {
  const sections = gsap.utils.toArray<HTMLElement>("#service .sub-section");

  const colors = ["#fcdc9b", "#8AAA79", "#D1D5DE" , "#000000"];
  const textColors = ["#000000", "#ffffff", "#ffffff" , "#ffffff"];

  // cycle colors if needed
  const bgColors = sections.map((_, i) => colors[i % colors.length]);
  const txtColors = sections.map((_, i) => textColors[i % textColors.length]);

  sections.forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",       
      end: "bottom center",      
      scrub: true,

      onEnter: () => {
        gsap.to("#service", {
          backgroundColor: bgColors[i],
          duration: 1.2,
          ease: "power2.inOut"
        });
        gsap.to("#service h2", {
          color: txtColors[i],
          duration: 1.2,
          ease: "power2.inOut"
        });
      },

      onEnterBack: () => {
        gsap.to("#service", {
          backgroundColor: bgColors[i],
          duration: 1.2,
          ease: "power2.inOut"
        });
        gsap.to("#service h2", {
          color: txtColors[i],
          duration: 1.2,
          ease: "power2.inOut"
        });
      }
    });
  });

  ScrollTrigger.refresh();
}, []);


  return (
    <div className="w-full h-auto" id="service">
      <div className={`w-full px-0 flex flex-col ${flex_dir} relative`}>
        
        {/* Left sticky column */}
        <div className="w-full lg:w-1/2 h-[80vh] flex justify-center items-center lg:sticky top-0">
          <h2 className="text-5xl lg:text-7xl font-semibold text-center">
            {service_name}
          </h2>
        </div>

        <div className="w-[0.5px] h-full bg-gray-600" />

        {/* RIGHT COLUMN — must contain `.sub-section` blocks */}
        <ComponentOfsub />
      </div>
    </div>
  );
}
