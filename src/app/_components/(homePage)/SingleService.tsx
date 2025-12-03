import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnalyticsDashboard from "./AnalyticsDashboard ";
import SubService from "./SubService";
gsap.registerPlugin(ScrollTrigger);
interface SingleServiceProps {
  flex_dir: string;
  service_name : string;
}
const SingleService = ({flex_dir , service_name} : SingleServiceProps) => {
  useGSAP(() => {
    const sub_ser1 = document.querySelector("#sub_ser1") as HTMLElement;
    const sub_ser2 = document.querySelector("#sub_ser2") as HTMLElement;
    const sections = gsap.utils.toArray([
      sub_ser1,
      sub_ser2,
      "#sub_ser3",
      "#sub_ser4",
    ]);
    const colors = ["#fcdc9b", "#8AAA79", "#D1D5DE", "black"];
    const textColors = ["#000000", "#ffffff", "#ffffff", "#ffffff"];
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#service",
        start: "top 100%",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // --- FADE FROM BLACK TO FIRST SECTION COLOR ---
    tl.to(
      "#service",
      {
        backgroundColor: colors[0],
        ease: "power2.inOut",
        duration: 1,
      },
      0
    );

    tl.to(
      "#service h2",
      {
        color: textColors[0],
        ease: "power2.inOut",
        duration: 1,
      },
      0
    );

    // --- THEN FADE THROUGH THE REMAINING SECTIONS ---
    sections.forEach((section, i) => {
      if (i === 0) return;
      tl.to(
        "#service",
        {
          backgroundColor: colors[i],
          ease: "power2.inOut",
          duration: 1,
        },
        i
      );

      tl.to(
        "#service h2",
        {
          color: textColors[i],
          ease: "power2.inOut",
          duration: 1,
        },
        i
      );
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="w-full h-auto" id="service">
      <div className={`w-full px-0 flex flex-col ${flex_dir} relative`}>
        {/* sticky left */}
        <div className="w-full lg:w-1/2 h-[80vh] flex justify-center items-center lg:sticky top-0">
          <h2 className="text-5xl text-center">{service_name}</h2>
        </div>
        <div className="w-[0.5px] h-full bg-gray-600" />
        {/* scrolling right */}
        <div className="w-full lg:w-1/2">
          <SubService subText="analytics master" Component={AnalyticsDashboard}/>
          <SubService subText="analytics master" Component={AnalyticsDashboard}/>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
