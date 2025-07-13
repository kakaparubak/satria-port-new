'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { projects } from '@/data';
import Image from 'next/image';

gsap.registerPlugin(useGSAP);

const PastProjects = () => {
  const wrapper1 = useRef<HTMLDivElement>(null);
  const wrapper2 = useRef<HTMLDivElement>(null);
  const wrapper3 = useRef<HTMLDivElement>(null);
  const imageEl = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState(projects[0][0].img);

  interface SpansProps {
    onHover: (arg0: string) => void,
    id: string
  }

  useGSAP(() => {
    const timeline1 = gsap.timeline({repeat: -1, repeatDelay: 0, defaults: {ease: "none"}})
    const timeline2 = gsap.timeline({repeat: -1, repeatDelay: 0, defaults: {ease: "none"}})
    const timeline3 = gsap.timeline({repeat: -1, repeatDelay: 0, defaults: {ease: "none"}})
    timeline1.to(wrapper1.current, {xPercent: -50, duration: 55, ease:"none"})
             .set(wrapper1.current, {xPercent: 0, ease:"none"})
    timeline2.set(wrapper2.current, {xPercent: -50, ease:"none"})
             .to(wrapper2.current, {xPercent: 0, duration: 55, ease:"none"})
    timeline3.to(wrapper3.current, {xPercent: -50, duration: 55, ease:"none"})
             .set(wrapper3.current, {xPercent: 0, ease:"none"})
             
  })

  const handleSpanHover = (img:string) => {
    setImage(img);
  }

  const Spans = ({ onHover, id }: SpansProps) => {
    const projectsArr = projects[Number(id)];
    return (
      <>
        <span id={projectsArr[0].id} onMouseEnter={() => onHover(projectsArr[0].img)} className="hover:text-white transition-all duration-300 text-nowrap text-shadow-lg">{projectsArr[0].name}</span>
        <span id={projectsArr[1].id} onMouseEnter={() => onHover(projectsArr[1].img)} className="hover:text-white transition-all duration-300 text-nowrap text-shadow-lg">{projectsArr[1].name}</span>
        <span id={projectsArr[2].id} onMouseEnter={() => onHover(projectsArr[2].img)} className="hover:text-white transition-all duration-300 text-nowrap text-shadow-lg">{projectsArr[2].name}</span>
      </>
    )
  }
 
  return (
    <div className="h-[65svh] bg-radial from-gray-900 to-gray-950 relative flex items-center overflow-hidden">
      <div className="font-poppins sm:font-[700] md:font-[800] lg:font-[800] absolute tracking-tightest transition cursor-default z-30 flex flex-col items-baseline justify-baseline" data-speed="1.08" style={{ userSelect: "none", paintOrder: "stroke fill" }}>
        <div className='block w-fit'>
          <div id="wrapper1" ref={wrapper1} className="text-stroke-2 text-stroke-white text-transparent text-7xl md:text-8xl lg:text-8xl flex flex-nowrap gap-2 md:gap-4 lg:gap-4 [word-spacing:-0.5rem] md:[word-spacing:-0.25rem] lg:[word-spacing:-0.25rem] p-0 m-0 box-content">
              <Spans id='0' onHover={handleSpanHover}/>
              <Spans id='0' onHover={handleSpanHover}/>
          </div>
        </div>
        <div className='block w-fit'>
          <div id="wrapper1" ref={wrapper2} className="text-stroke-2 text-stroke-white text-transparent text-7xl md:text-8xl lg:text-8xl flex flex-nowrap gap-2 md:gap-4 lg:gap-4 [word-spacing:-0.5rem] md:[word-spacing:-0.25rem] lg:[word-spacing:-0.25rem] p-0 m-0 box-content">
              <Spans id='1' onHover={handleSpanHover}/>
              <Spans id='1' onHover={handleSpanHover}/>
          </div>
        </div>
        <div className='block w-fit'>
          <div id="wrapper1" ref={wrapper3} className="text-stroke-2 text-stroke-white text-transparent text-7xl md:text-8xl lg:text-8xl flex flex-nowrap gap-2 md:gap-4 lg:gap-4 [word-spacing:-0.5rem] md:[word-spacing:-0.25rem] lg:[word-spacing:-0.25rem] p-0 m-0 box-content">
              <Spans id='2' onHover={handleSpanHover}/>
              <Spans id='2' onHover={handleSpanHover}/>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center w-screen h-[70%]' data-speed="1.03">
        <Image src={image} alt='Projects Image' width={1200} height={900} className='h-[90%] md:h-[100%] lg:h-[100%] max-w-[650px] w-[70%] min-w-[300px] object-cover brightness-75 border-0 outline-0 rounded-3xl transition-all shadow-spread shadow-white/50' ref={imageEl}/>
      </div>
    </div>
  )
}

export default PastProjects;