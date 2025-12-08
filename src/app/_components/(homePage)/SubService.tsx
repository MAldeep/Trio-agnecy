import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";

interface SubServiceProps {
  subText : string;
  Component : React.ComponentType;
  id : string;
  subTextColor : string;
}
gsap.registerPlugin(ScrollTrigger);
export default function SubService  ({subText , Component , id , subTextColor} : SubServiceProps){
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger : {
        trigger : ".sub-service",
        start: "top 100%",
        end : "top bttom",
        scrub: 1,
      }
    });
    tl.fromTo(".sub-text" , {
      opacity : 0,
      x : 10,
    } , {
      opacity : 1,
      x : 0,
      duration : 1.5,
      ease : "power2.inOut"
    })
  }, [])
  return (
    <div
      className={`w-full min-h-screen text-5xl flex flex-col justify-center items-center gap-5 p-5 sub-service ${id}`}
    >
      <p className={`text-4xl ${subTextColor} sub-text text-center font-semibold`}>
        {subText}
      </p>
      <Component/>
    </div>
  );
};

