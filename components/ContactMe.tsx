import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScriptProps } from "next/script";
import React, { useRef } from "react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { RxArrowBottomRight } from "react-icons/rx";

gsap.registerPlugin(useGSAP);

const ContactMe = (props: ScriptProps) => {
  const marquee = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeLine = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: { ease: "none" },
    });
    timeLine
      .to(marquee.current, { xPercent: -50, duration: 55, ease: "none" })
      .set(marquee.current, { xPercent: 0, ease: "none" });
  });

  return (
    <div id={props.id} className="relative overflow-hidden">
      <div className="block w-fit absolute -top-3 z-50">
        <div
          ref={marquee}
          className="font-semibold text-neutral-800 text-8xl md:text-8xl lg:text-8xl flex flex-nowrap gap-2 md:gap-4 lg:gap-4 [word-spacing:-0.5rem] md:[word-spacing:-0.25rem] lg:[word-spacing:-0.25rem] p-0 m-0 box-content"
        >
          <p className="text-nowrap font-sans tracking-tighter">
            SATRIA CHANDRA SATRIA CHANDRA SATRIA CHANDRA SATRIA CHANDRA SATRIA
            CHANDRA SATRIA CHANDRA
          </p>
        </div>
      </div>
      <div className="h-screen w-screen bg-radial-[circle_at_50%_0%] from-indigo-500 via-indigo-300 to-indigo-600 from-10% via-55% to-100% relative flex flex-col justify-center items-baseline md:items-center lg:items-center grid-cols-2 text-white font-sans p-5 md:p-10 lg:p-10">
        <div data-speed={window.innerWidth < 768 ? "1" : "1.1"}>
          <h1 className="top-10 font-sans font-medium text-xl md:text-3xl lg:text-4xl pb-3 md:pb-0 lg:pb-0 italic">
            Let&apos;s get in touch!
          </h1>
          <div className="font-poppins tracking-tight text-xl md:text-5xl lg:text-7xl text-white flex justify-center items-center gap-3 underline underline-offset-0 decoration-0 decoration-transparent hover:decoration-4 hover:scale-105 hover:underline hover:underline-offset-4 hover:decoration-amber-300 transition-all w-full">
            <a
              href="mailto:contact@satriachandra.com"
              target="_blank"
              className="break-all"
            >
              CONTACT@SATRIACHANDRA.COM
            </a>
            <RxArrowBottomRight className="" />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row items-baseline md:items-center lg:items-center justify-between mt-4 gap-2 md:gap-0 lg:gap-0 text-lg md:text-xl lg:text-2xl">
            <div className="flex gap-2 justify-center items-center hover:scale-105 transition-all">
              <FaWhatsapp />
              <a href="https://wa.me/6287780008482" target="_blank">
                +62 877-8000-8482
              </a>
            </div>
            <div className="flex gap-2 justify-center items-center hover:scale-105 transition-all">
              <FaInstagram />
              <a
                href="https://www.instagram.com/satriaberchandra?utm_source=ig_web_button_share_sheet&igsh=MWMxa3EyZnExMXQxMA=="
                target="_blank"
              >
                satriaberchandra
              </a>
            </div>
            <div className="flex gap-2 justify-center items-center hover:scale-105 transition-all">
              <FaLinkedinIn />
              <a
                href="https://www.linkedin.com/in/satria-chandra-dharmaputra-a3a058260/"
                target="_blank"
              >
                Satria Chandra Dharmaputra
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
