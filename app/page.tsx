"use client"
import Home from "@/components/Home";
import Highlights from "@/components/Highlights";
import AboutMe from "@/components/AboutMe";
import ComingSoon from "@/components/ComingSoon";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { PiArrowFatLinesDownFill } from "react-icons/pi"

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export default function Page() {

  const transition = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {

    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true 
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: transition.current,
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "+=75%",
        scrub: 0.3
      }
    })

    const downArrowTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#downArrow",
        pin: false,
        pinSpacing: false,
        start: "center center",
        end: "+=15%",
        scrub: 0.3
      }
    })

    timeLine.addLabel('start')
            .fromTo(transition.current, { scale: 1 }, { scale: (window.innerHeight > window.innerWidth ? window.innerHeight/100 + 3 : window.innerWidth/100 + 3) })
            .fromTo(transition.current, { opacity: "100%" }, { opacity: "0%", duration: 0.1 })
            .set(transition.current, {display: "none"})
            .addLabel('stop')

    downArrowTL.addLabel('start')
               .fromTo("#downArrow", {opacity: "100%"}, {opacity: "0%"})
  });

  return (
  <>
    <div id="smooth-wrapper" className="overflow-auto scrollbar-hide">
      <div id="smooth-content"
           className="h-auto text-white"
           style={{ scrollBehavior: "smooth" }}
      >
        <Home />
        <Highlights />
        <AboutMe />
        <div className="h-auto w-screen relative -top-3">
          <div ref={transition} className="h-[100svh] w-screen absolute overflow-hidden flex justify-center items-center">
            <div className="bg-transparent z-50 rounded-full w-[100px] h-[100px] outline-[1500px] outline-black"></div>
            <PiArrowFatLinesDownFill id="downArrow" className="absolute text-indigo-900 text-5xl"/>
          </div>
        </div>
        <ComingSoon />
      </div>
    </div>
  </>
  );
}
