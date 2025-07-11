import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const PastProjects = () => {
  return (
    <div className="h-[90svh] w-screen bg-radial from-gray-900 to-gray-950 flex flex-col justify-center items-center relative">
      <div className="absolute tracking-tightest transition cursor-default">
        <div className="font-extrabold text-stroke-2 text-stroke-white text-transparent text-8xl flex flex-nowrap gap-4 [word-spacing:-1rem]">
            <span className="hover:text-white transition-all text-nowrap ">BANK INDONESIA</span>
            <span className="hover:text-white transition-all text-nowrap ">PESTAPORA</span>
            <span className="hover:text-white transition-all text-nowrap ">DANGDUT MUSIKAL</span>
        </div>

      </div>
    </div>
  )
}

export default PastProjects;