"use client";
import Home from "@/components/Home";
import Highlights from "@/components/Highlights";
import AboutMe from "@/components/AboutMe";
import PastProjects from "@/components/PastProjects";
import ContactMe from "@/components/ContactMe";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { PiHamburger } from "react-icons/pi";
import { SpeedInsights } from "@vercel/speed-insights/next"

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export default function Page() {
  const transition = useRef<HTMLDivElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuDisplay, setMenuDisplay] = useState("none");
  const menuElement = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (ScrollTrigger.isTouch !== 1) {
      ScrollSmoother.create({
        smooth: 2,
        smoothTouch: 0,
        effects: true,
        normalizeScroll: true,
      });
    }

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

  const handleMenuClick = () => {
    if (!isMenuOpen) {
      handleOpenMenu();
    } else {
      handleCloseMenu();
    }
  };

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    setMenuDisplay("flex");
    gsap.fromTo(
      menuElement.current,
      { xPercent: 100 },
      { xPercent: 0, ease: "power1.out", duration: 0.5 }
    );
  };

  const handleCloseMenu = () => {
    gsap
      .fromTo(
        menuElement.current,
        { xPercent: 0 },
        { xPercent: 100, ease: "power1.in", duration: 0.5 }
      )
      .then(() => setIsMenuOpen(false))
      .then(() => setMenuDisplay("none"));
  };

  const handleLinkClick = (componentId: string) => {
    handleCloseMenu();
    const smooth = ScrollSmoother.get();
    smooth?.scrollTo(`#${componentId}`, true);
  };

  return (
    <>
      <div
        ref={mainElement}
        id="smooth-wrapper"
        className="overflow-auto scrollbar-hide overflow-x-hidden"
      >
        <div
          id="smooth-content"
          className="h-auto text-white"
          style={{ scrollBehavior: "smooth" }}
        >
          <Home />
          <Highlights id="highlights" />
          <AboutMe id="aboutMe" />
          <div className="w-screen relative -top-3 z-20">
            <div
              ref={transition}
              className="h-[100lvh] w-screen absolute overflow-hidden flex justify-center items-center"
            >
              <div className="bg-transparent z-50 rounded-full w-[100px] h-[100px] outline-[1500px] outline-black"></div>
              <FaArrowDown
                id="downArrow"
                className="absolute text-indigo-900 text-5xl"
              />
            </div>
          </div>
          <PastProjects id="pastProjects" />
          <ContactMe id="contactMe" />
        </div>
      </div>
      <div className="fixed top-6 md:top-8 lg:top-10 right-6 md:right-10 lg:right-12 z-50">
        <PiHamburger
          className=" text-4xl md:text-5xl lg:text-5xl text-indigo-500 hover:scale-110 transition-all"
          onClick={handleMenuClick}
        />
      </div>
      <div
        ref={menuElement}
        style={{ display: menuDisplay }}
        className="fixed w-screen md:w-[50vw] lg:w-[25vw] h-screen bg-gray-950/90 top-0 right-0 backdrop-blur-lg justify-center items-center"
      >
        <div className="flex flex-col justify-center items-baseline text-3xl font-montserrat font-semibold tracking-tight gap-4 w-4/5" style={{userSelect: "none"}}>
          <p
            className="hover:scale-105 hover:text-indigo-200 transition-all cursor-pointer"
            onClick={() => handleLinkClick("highlights")}
          >
            Highlights
          </p>
          <hr className="text-gray-500 h-1 w-full"></hr>
          <p
            className="hover:scale-105 hover:text-indigo-200 transition-all cursor-pointer"
            onClick={() => handleLinkClick("aboutMe")}
          >
            About Me
          </p>
          <hr className="text-gray-500 h-1 w-full"></hr>
          <p
            className="hover:scale-105 hover:text-indigo-200 transition-all cursor-pointer"
            onClick={() => handleLinkClick("pastProjects")}
          >
            Past Projects
          </p>
          <hr className="text-gray-500 h-1 w-full"></hr>
          <p
            className="hover:scale-105 hover:text-indigo-200 transition-all cursor-pointer"
            onClick={() => handleLinkClick("contactMe")}
          >
            Contact
          </p>
          <hr className="text-gray-500 h-1 w-full"></hr>
        </div>
      </div>
      <SpeedInsights />
    </>
  );
}
