import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnalyticsDashboard from "./AnalyticsDashboard ";
gsap.registerPlugin(ScrollTrigger);

const DigitalMarketing = () => {
  useGSAP(() => {
    const sections = gsap.utils.toArray([
      "#sub_ser1",
      "#sub_ser2",
      "#sub_ser3",
      "#sub_ser4",
    ]);
    const colors = ["#fcdc9b", "#8AAA79", "#D1D5DE", "black"];
    const textColors = ["#000000", "#ffffff", "#ffffff", "#ffffff"];
    gsap.set("#service", { backgroundColor: "black" });
    gsap.set("#service h2", { color: "#ffffff" });
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
      <div className="w-full px-0 lg:px-24 flex flex-col lg:flex-row relative">
        {/* sticky left */}
        <div className="w-full lg:w-1/2 h-[80vh] flex justify-center items-center lg:sticky top-0">
          <h2 className="text-5xl text-center">Digital Marketing</h2>
        </div>

        {/* scrolling right */}
        <div className="w-full lg:w-1/2">
          <div
            id="sub_ser1"
            className="w-full min-h-screen text-5xl flex justify-center items-center"
          >
            <AnalyticsDashboard/>
          </div>
          <div
            id="sub_ser2"
            className="w-full min-h-screen text-5xl flex justify-center items-center"
          >
            second
          </div>
          <div
            id="sub_ser3"
            className="w-full min-h-screen text-5xl flex justify-center items-center"
          >
            third
          </div>
          <div
            id="sub_ser4"
            className="w-full min-h-screen text-5xl flex justify-center items-center"
          >
            fourth
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
