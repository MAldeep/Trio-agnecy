import { useGSAP } from "@gsap/react";
import gsap, { SplitText, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger);
const About = () => {
  useGSAP(() => {
    const split = new SplitText("#text_about", { type: "words" });
    gsap.fromTo(
      split.words,
      {
        opacity: 0.3,
      },
      {
        opacity: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#about_con",
          start: "top 60%",
          end: "top top",
          scrub : true,
        },
      }
    );
  }, []);
  return (
    <div
      className="w-full bg-[#fcdc9b] py-20"
      id="about_con"
    >
      <div className="w-full p-5 lg:p-20 flex flex-col gap-10">
        <p className="text-2xl text-gray-700">About Trio</p>
        <h2 className="text-2xl lg:text-5xl" id="text_about">
          Over the past three decades, Outten & Golden attorneys have zealously
          advanced the rights of employees from all walks of life. Through
          counseling, negotiation, and litigation, we stand as a guiding light
          for employees who face injustice, and an elite advocate for
          professionals who want a competitive edge in their careers.
        </h2>
      </div>
    </div>
  );
};

export default About;
