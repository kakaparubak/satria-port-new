"use client";
import Home from "@/components/Home";
import Highlights from "@/components/Highlights";
import AboutMe from "@/components/AboutMe";
import PastProjects from "@/components/PastProjects";
import ContactMe from "@/components/ContactMe";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export default function Page() {
  const transition = useRef<HTMLDivElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      smoothTouch: 0,
      effects: true,
      normalizeScroll: true,
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: transition.current,
        anticipatePin: 1,
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "+=90%",
        scrub: 0.3,
        snap: {
          snapTo: "labels", // snap to the closest label in the timeline
          duration: { min: 0.1, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.05, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "sine", // the ease of the snap animation ("power3" by default)
        },
      },
    });

    const downArrowTL = gsap.timeline({
      scrollTrigger: {
        trigger: transition.current,
        pin: false,
        pinSpacing: false,
        start: "top top",
        end: "+=45%",
        scrub: 0.3,
      },
    });

    timeLine
      .addLabel("start")
      .fromTo(
        transition.current,
        { scale: 1 },
        {
          scale:
            window.innerHeight > window.innerWidth
              ? window.innerHeight / 100 + 2.2
              : window.innerWidth / 100 + 2.2,
        }
      )
      .fromTo(
        transition.current,
        { opacity: "100%" },
        { opacity: "0%", duration: 0.05 }
      )
      .set(transition.current, { display: "none" })
      .addLabel("stop");

    downArrowTL.addLabel("start").fromTo("#downArrow", { y: 0 }, { y: 100 });
  });

  return (
    <>
      <div
        ref={mainElement}
        id="smooth-wrapper"
        className="overflow-auto scrollbar-hide"
      >
        <div
          id="smooth-content"
          className="h-auto text-white"
          style={{ scrollBehavior: "smooth" }}
        >
          <Home />
          <Highlights />
          <AboutMe />
          <div className="w-screen relative -top-3 z-20">
            <div
              ref={transition}
              className="h-[100svh] w-screen absolute overflow-hidden flex justify-center items-center"
            >
              <div className="bg-transparent z-50 rounded-full w-[100px] h-[100px] outline-[1500px] outline-black"></div>
              <FaArrowDown
                id="downArrow"
                className="absolute text-indigo-900 text-5xl"
              />
            </div>
          </div>
          <PastProjects />
          <ContactMe />
        </div>
      </div>
      <div className="fixed top-4 right-4">
        halo
      </div>
    </>
  );
}
