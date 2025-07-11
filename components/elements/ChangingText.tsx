
import React, { useEffect, useRef, useState } from "react";
import { roles } from "../../data";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ChangingText = () => {
  const [index, setIndex] = useState([0, 1 % roles.length, 2 % roles.length, 3 % roles.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index.map(current => (current + 1) % roles.length));
    }, 2000);
    
    return () => clearInterval(interval);
  });

  const mostTopRole = useRef(null);
  const topRole = useRef(null);
  const mainRole = useRef(null);
  const bottomRole = useRef(null);

  useGSAP(() => {
    const timelineMostTop = gsap.timeline({repeat: -1, repeatDelay: 1});
    const timelineTop = gsap.timeline({repeat: -1, repeatDelay: 1});
    const timelineMain = gsap.timeline({repeat: -1, repeatDelay: 1});
    const timelineBottom = gsap.timeline({repeat: -1, repeatDelay: 1});
    timelineMostTop.fromTo(mostTopRole.current, {opacity: "0%", y: 0}, {opacity: "50%", y: 40, duration: 1, ease: "sine.inOut"})
                   .fromTo(mostTopRole.current, {opacity: "50%", y: 40}, {opacity: "100%", y: 80, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(mostTopRole.current, {opacity: "100%", y: 80}, {opacity: "50%", y: 120, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(mostTopRole.current, {opacity: "50%", y: 120}, {opacity: "0%", y: 160, duration: 1, ease: "sine.inOut"}, "+=1")
    timelineTop.fromTo(topRole.current, {opacity: "50%", y: 0}, {opacity: "100%", y: 40, duration: 1, ease: "sine.inOut"})
                   .fromTo(topRole.current, {opacity: "100%", y: 40}, {opacity: "50%", y: 80, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(topRole.current, {opacity: "50%", y: 80}, {opacity: "0%", y: 120, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(topRole.current, {opacity: "0%", y: -40}, {opacity: "50%", y: 0, duration: 1, ease: "sine.inOut"}, "+=1")
    timelineMain.fromTo(mainRole.current, {opacity: "100%", y: 0}, {opacity: "50%", y: 40, duration: 1, ease: "sine.inOut"})
                   .fromTo(mainRole.current, {opacity: "50%", y: 40}, {opacity: "0%", y: 80, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(mainRole.current, {opacity: "0%", y: -80}, {opacity: "50%", y: -40, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(mainRole.current, {opacity: "50%", y: -40}, {opacity: "100%", y: 0, duration: 1, ease: "sine.inOut"}, "+=1")
    timelineBottom.fromTo(bottomRole.current, {opacity: "50%", y: 0}, {opacity: "0%", y: 40, duration: 1, ease: "sine.inOut"})
                   .fromTo(bottomRole.current, {opacity: "0%", y: -120}, {opacity: "50%", y: -80, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(bottomRole.current, {opacity: "50%", y: -80}, {opacity: "100%", y: -40, duration: 1, ease: "sine.inOut"}, "+=1")
                   .fromTo(bottomRole.current, {opacity: "100%", y: -40}, {opacity: "50%", y: 0, duration: 1, ease: "sine.inOut"}, "+=1")
  },{scope: ".changing-text"})

  return (
    <div className="flex gap-2.5 mt-12 justify-center items-center">
      <p className="text-center font-montserrat text-3xl font-medium tracking-tighter text-white">
        and I am a {" "}
        <span className="underline underline-offset-4 decoration-2 font-covgrace tracking-wider text-cyan-400 text-4xl">
          Lighting
        </span>
      </p>
      <div className="changing-text relative -top-[20px] flex flex-col justify-center items-baseline underline underline-offset-4 decoration-2 font-covgrace tracking-wider text-cyan-400 text-4xl">
        <p className="opacity-0" ref={mostTopRole}>role1</p>
        <p className="opacity-50" ref={topRole}>role2</p>
        <p className="" ref={mainRole}>role3</p>
        <p className="opacity-50" ref={bottomRole}>role4</p>
      </div>
    </div>
  );
};

export default ChangingText;
