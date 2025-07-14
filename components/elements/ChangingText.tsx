
import React, { useRef, useState } from "react";
import { roles } from "../../data";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const ChangingText = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const topRole = useRef(null);
  const bottomRole = useRef(null);

  useGSAP(() => {
    const timelineTop = gsap.timeline({repeat: -1, repeatDelay: 1});
    const timelineBottom = gsap.timeline({repeat: -1, repeatDelay: 1});
    timelineTop.fromTo(topRole.current, {opacity: "0%", y: 0}, {opacity: "100%", y: 40, duration: 1, ease: "power4.inOut"})
               .fromTo(topRole.current, {opacity: "100%", y: 40}, {opacity: "0%", y: 80, duration: 1, ease: "power4.inOut", onComplete: setIndex2, onCompleteParams: [(i:number) => (i + 2) % roles.length]}, "+=1")
    timelineBottom.fromTo(bottomRole.current, {opacity: "100%", y: 0}, {opacity: "0%", y: 40, duration: 1, ease: "power4.inOut", onComplete: setIndex1, onCompleteParams: [(i:number) => (i + 2) % roles.length]})
                  .fromTo(bottomRole.current, {opacity: "0%", y: -40}, {opacity: "100%", y: 0, duration: 1, ease: "power4.inOut"}, "+=1")
  });

  return (
    <div className="relative md:left-6 lg:left-2.5 flex flex-col md:flex-row lg:flex-row md:gap-2.5 lg:gap-2.5 mt-8 justify-center items-center">
      <p className="relative text-center font-montserrat text-3xl font-medium tracking-tighter text-white">
        and I am a {" "}
      </p>
      <div className="md:w-[320px] lg:w-[320px] relative md:-top-5.5 lg:-top-5.5 text-center changing-text flex flex-col justify-center md:items-baseline lg:items-baseline items-center underline underline-offset-4 decoration-2 font-covgrace tracking-wider text-indigo-400 text-4xl">
        <p id="top-role" className="opacity-0" ref={topRole}>{roles[index2]}</p>
        <p id="bottom-role" className="opacity-50" ref={bottomRole}>{roles[index1]}</p>
      </div>
    </div>
  );
};

export default ChangingText;
