"use client"
import Home from "@/components/Home";
import PastProjects from "@/components/PastProjects";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import ComingSoon from "@/components/ComingSoon";
import AboutMe from "@/components/AboutMe";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export default function Page() {
  
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true 
    });
  }, []);

  return (
  <>
    <div id="smooth-wrapper">
      <div id="smooth-content"
           className="h-auto text-white"
           style={{ scrollBehavior: "smooth" }}
      >
        <Home />
        <PastProjects />
        <AboutMe />
      </div>
    </div>
  </>
  );
}
