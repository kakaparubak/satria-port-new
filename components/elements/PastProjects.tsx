'use client'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { projects } from '@/data';

gsap.registerPlugin(useGSAP);

const PastProjects = () => {
  const wrapper1 = useRef<HTMLDivElement>(null);
  const wrapper2 = useRef<HTMLDivElement>(null);
  const wrapper3 = useRef<HTMLDivElement>(null);
  const imageEl = useRef<HTMLImageElement>(null);
  const [image, setImage] = useState(projects[0][0].img);

  interface SpansProps {
    onHover: (arg0: string) => string,
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
    return "finished";
  }

  const Spans = ({ onHover, id }: SpansProps) => {
    const projectsArr = projects[Number(id)];
    return (
      <>
        <span id={projectsArr[0].id} onMouseEnter={() => onHover(projectsArr[0].img)} className="hover:text-white transition-all text-nowrap text-shadow-lg">{projectsArr[0].name}</span>
        <span id={projectsArr[1].id} onMouseEnter={() => onHover(projectsArr[1].img)} className="hover:text-white transition-all text-nowrap text-shadow-lg">{projectsArr[1].name}</span>
        <span id={projectsArr[2].id} onMouseEnter={() => onHover(projectsArr[2].img)} className="hover:text-white transition-all text-nowrap text-shadow-lg">{projectsArr[2].name}</span>
      </>
    )
  }
 
  return (
    <div className="h-[80svh] bg-radial from-gray-900 to-gray-950 relative flex items-center">
      <div className="absolute tracking-tightest transition cursor-default z-30 flex flex-col items-baseline justify-baseline">
        <div className='block w-fit'>
          <div id="wrapper1" ref={wrapper1} className="text-left font-extrabold text-stroke-2 text-stroke-white text-transparent text-9xl flex flex-nowrap gap-4 [word-spacing:-1rem] p-0 m-0 box-content">
              <Spans id='0' onHover={handleSpanHover}/>
              <Spans id='0' onHover={handleSpanHover}/>
          </div>
        </div>
        <div className='block w-fit'>
          <div id="wrapper1" ref={wrapper2} className="font-extrabold text-stroke-2 text-stroke-white text-transparent text-9xl flex flex-nowrap gap-4 [word-spacing:-1rem] p-0 m-0 box-content">
              <Spans id='1' onHover={handleSpanHover}/>
              <Spans id='1' onHover={handleSpanHover}/>
          </div>
        </div>
        <div className='block w-fit'>
          <div id="wrapper1" ref={wrapper3} className="font-extrabold text-stroke-2 text-stroke-white text-transparent text-9xl flex flex-nowrap gap-4 [word-spacing:-1rem] p-0 m-0 box-content">
              <Spans id='2' onHover={handleSpanHover}/>
              <Spans id='2' onHover={handleSpanHover}/>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-screen h-3/5' data-speed="0.95">
        <img src={image} className='h-[100%] object-cover aspect-[4/3] brightness-75 border-0 outline-0 rounded-3xl transition-all shadow-2xl shadow-amber-500/50' ref={imageEl} />
      </div>
    </div>
  )
}

export default PastProjects;