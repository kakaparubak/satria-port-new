"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RefObject, useRef, useState } from "react";
import { projects } from "@/data";
import Image from "next/image";
import { ClipLoader } from "react-spinners";

gsap.registerPlugin(useGSAP);

const PastProjects = () => {
  const wrapper1 = useRef<HTMLDivElement>(null);
  const wrapper2 = useRef<HTMLDivElement>(null);
  const wrapper3 = useRef<HTMLDivElement>(null);
  const imageEl = useRef<HTMLImageElement>(null);
  const timeline1 = useRef<GSAPTimeline>(null);
  const timeline2 = useRef<GSAPTimeline>(null);
  const timeline3 = useRef<GSAPTimeline>(null);
  const [image, setImage] = useState(projects[0][0].img);
  const [isLoaded, setIsLoaded] = useState(false);

  interface SpansProps {
    onHover: (arg0: string) => void;
    id: string;
  }

  useGSAP(() => {
    timeline1.current = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: { ease: "none" },
    });
    timeline2.current = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: { ease: "none" },
    });
    timeline3.current = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
      defaults: { ease: "none" },
    });
    timeline1.current
      .to(wrapper1.current, { xPercent: -50, duration: 55, ease: "none" })
      .set(wrapper1.current, { xPercent: 0, ease: "none" });
    timeline2.current
      .set(wrapper2.current, { xPercent: -50, ease: "none" })
      .to(wrapper2.current, { xPercent: 0, duration: 55, ease: "none" });
    timeline3.current
      .to(wrapper3.current, { xPercent: -50, duration: 55, ease: "none" })
      .set(wrapper3.current, { xPercent: 0, ease: "none" });
  });

  const handleSpanHover = (img: string) => {
    setImage(img);
  };

  const onPointerEnter = (timeline: RefObject<GSAPTimeline | null>) => {
    if (!timeline.current) return;
    gsap.to(timeline.current, { timeScale: 0.5 });
  };

  const onPointerLeave = (timeline: RefObject<GSAPTimeline | null>) => {
    if (!timeline.current) return;
    gsap.to(timeline.current, { timeScale: 1 });
  };

  const Spans = ({ onHover, id }: SpansProps) => {
    const projectsArr = projects[Number(id)];
    return (
      <>
        {projectsArr.map((project) => (
          <span
            key={project.id}
            id={project.id}
            onMouseEnter={() => onHover(project.img)}
            className="hover:text-white transition-all duration-300 text-nowrap p-0 m-0"
          >
            {project.name}
          </span>
        ))}
      </>
    );
  };

  const WrapperSpans = ({ id }: { id: string }) => {
    return (
      <div className="block w-fit">
        <div className="text-stroke-2 text-stroke-white text-transparent text-7xl md:text-8xl lg:text-8xl flex flex-nowrap gap-2 md:gap-4 lg:gap-4 [word-spacing:-0.5rem] md:[word-spacing:-0.25rem] lg:[word-spacing:-0.25rem] p-0 m-0 box-content">
          <Spans id={id} onHover={handleSpanHover} />
          <Spans id={id} onHover={handleSpanHover} />
        </div>
      </div>
    );
  };

  return (
    <div className="h-[65svh] bg-gradient-to-b from-gray-950 via-indigo-950 to-gray-950 relative flex items-center overflow-hidden">
      <div
        className="font-poppins sm:font-[700] md:font-[800] lg:font-[800] absolute tracking-tightest transition cursor-default z-30 flex flex-col items-baseline justify-baseline"
        data-speed="1.08"
        style={{ userSelect: "none", paintOrder: "stroke fill" }}
      >
        <div
          ref={wrapper1}
          onMouseEnter={() => onPointerEnter(timeline1)}
          onMouseLeave={() => onPointerLeave(timeline1)}
        >
          <WrapperSpans id="0" />
        </div>
        <div
          ref={wrapper2}
          onMouseEnter={() => onPointerEnter(timeline2)}
          onMouseLeave={() => onPointerLeave(timeline2)}
        >
          <WrapperSpans id="1" />
        </div>
        <div
          ref={wrapper3}
          onMouseEnter={() => onPointerEnter(timeline3)}
          onMouseLeave={() => onPointerLeave(timeline3)}
        >
          <WrapperSpans id="2" />
        </div>
      </div>
      <div
        className="relative flex justify-center items-center w-screen h-[80%]"
        data-speed="1.04"
      >
        {isLoaded && (
          <ClipLoader
            color="white"
            loading={!isLoaded}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
            className="absolute z-10"
          />
        )}
        <Image
          src={image}
          alt="Projects Image"
          ref={imageEl}
          width={600}
          height={400}
          quality={50}
          onLoad={() => setIsLoaded(true)}
          onLoadStart={() => setIsLoaded(false)}
          className="h-[90%] md:h-[100%] lg:h-[100%] max-w-[900px] w-[75%] min-w-[300px] object-cover brightness-75 border-0 outline-0 transition-all shadow-spread shadow-black"
        />
      </div>
    </div>
  );
};

export default PastProjects;
