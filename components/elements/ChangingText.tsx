
import React, { useRef, useState } from "react";
import { roles } from "../../data";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ChangingText = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(1);
  const topRole = useRef(null);
  const bottomRole = useRef(null);

  useGSAP(() => {
    const timelineTop = gsap.timeline({repeat: -1, repeatDelay: 1});
    const timelineBottom = gsap.timeline({repeat: -1, repeatDelay: 1});
    timelineTop.fromTo(topRole.current, {opacity: "0%", y: 0}, {opacity: "100%", y: 40, duration: 1, ease: "sine.inOut"})
               .fromTo(topRole.current, {opacity: "100%", y: 40}, {opacity: "0%", y: 80, duration: 1, ease: "sine.inOut", onComplete: setIndex1, onCompleteParams: [(index1 + 1) % roles.length]}, "+=1")
    timelineBottom.fromTo(bottomRole.current, {opacity: "100%", y: 0}, {opacity: "0%", y: 40, duration: 1, ease: "sine.inOut", onComplete: setIndex2, onCompleteParams: [(index2 + 1) % roles.length]})
                  .fromTo(bottomRole.current, {opacity: "0%", y: -40}, {opacity: "100%", y: 0, duration: 1, ease: "sine.inOut"}, "+=1")
  },{scope: ".changing-text"});

  return (
    <div className="flex gap-2.5 mt-12 justify-center items-center">
      <p className="text-center font-montserrat text-3xl font-medium tracking-tighter text-white">
        and I am a {" "}
        <span className="underline underline-offset-4 decoration-2 font-covgrace tracking-wider text-cyan-400 text-4xl">
          Lighting
        </span>
      </p>
      <div className="changing-text relative -top-[20px] flex flex-col justify-center items-baseline underline underline-offset-4 decoration-2 font-covgrace tracking-wider text-cyan-400 text-4xl">
        <p id="top-role" className="opacity-0" ref={topRole}>{roles[index1]}</p>
        <p id="bottom-role" className="opacity-50" ref={bottomRole}>{roles[index2]}</p>
      </div>
    </div>
  );
};

export default ChangingText;
