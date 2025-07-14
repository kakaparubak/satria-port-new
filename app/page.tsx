"use client"
import Home from "@/components/Home";
import Highlights from "@/components/Highlights";
import AboutMe from "@/components/AboutMe";
import PastProjects from "@/components/PastProjects";
import ComingSoon from "@/components/ComingSoon";
import Image from "next/image";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { pastProjects } from "@/data";

gsap.registerPlugin(useGSAP, ScrollSmoother, ScrollTrigger);

export default function Page() {

  const transition = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const mainElement = useRef<HTMLDivElement>(null);
  const [modalInfo, setModalInfo] = useState({name:"Title", role:"Role", img: "/images/placeholderimg.svg", about:"About"});
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useGSAP(() => {

    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      normalizeScroll: true 
    });

    const timeLine = gsap.timeline({
      scrollTrigger: {
        trigger: transition.current,
        pin: true,
        pinSpacing: false,
        start: "top top",
        end: "+=90%",
        scrub: 0.3,
        snap: {
          snapTo: 'labels', // snap to the closest label in the timeline
			    duration: { min: 0.1, max: 0.5 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
			    delay: 0.05, // wait 0.2 seconds from the last scroll event before doing the snapping
			    ease: 'sine' // the ease of the snap animation ("power3" by default)
        }
      }
    })

    const downArrowTL = gsap.timeline({
      scrollTrigger: {
        trigger: transition.current,
        pin: false,
        pinSpacing: false,
        start: "top top",
        end: "+=45%",
        scrub: 0.3
      }
    })

    timeLine.addLabel('start')
            .fromTo(transition.current, { scale: 1 }, { scale: (window.innerHeight > window.innerWidth ? window.innerHeight/100 + 2.2 : window.innerWidth/100 + 2.2) })
            .fromTo(transition.current, { opacity: "100%" }, { opacity: "0%", duration: 0.05 })
            .set(transition.current, {display: "none"})
            .addLabel('stop')

    downArrowTL.addLabel('start')
               .fromTo("#downArrow", {y: 0}, {y: 100})
  });

  const handleProjectClick = (id: string) => {
    const currentProject = pastProjects.find((current) => current.id == id);
    if (!currentProject) {
      return;
    }
    setModalInfo({name: currentProject?.name, role: currentProject?.myRole, about: currentProject?.about, img: currentProject?.img});
    modal.current?.showModal();
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    if (!modal.current) {
      return;
    }
    setIsModalOpen(false);
    modal.current?.close();
  }

  return (
  <>
    <div ref={mainElement} id="smooth-wrapper" className="overflow-auto scrollbar-hide">
      <div id="smooth-content"
           className="h-auto text-white"
           style={{ scrollBehavior: "smooth" }}
      >
        <Home />
        <Highlights />
        <AboutMe />
        <div className="h-auto w-screen relative -top-3">
          <div ref={transition} className="h-[100svh] w-screen absolute overflow-hidden flex justify-center items-center">
            <div className="bg-transparent z-50 rounded-full w-[100px] h-[100px] outline-[1500px] outline-black"></div>
            <FaArrowDown id="downArrow" className="absolute text-indigo-900 text-5xl"/>
          </div>
        </div>
        <PastProjects onProjectClick={(id) => handleProjectClick(id)} />
        <ComingSoon />
      </div>
    </div>
    <dialog ref={modal} className="h-[100vh] w-[100vw] max-h-screen max-w-screen justify-center items-center m-0 p-0 fixed backdrop-blur-lg bg-black/40 z-50 box-border" style={{display: isModalOpen ? "flex" : "none"}}>
      <RiCloseFill onClick={handleModalClose} className="absolute top-8 right-8 text-4xl text-white stroke-2 cursor-pointer"/>
      <div className="bg-gray-100 w-[80%] md:w-2/4 lg:w-[550px] p-8 md:p-10 lg:p-10 shadow-2xl">
        <Image src={modalInfo.img} width="400" height="400" alt="Project Image" className="w-full aspect-square object-cover" />
        <h2 className="font-bold font-poppins text-4xl mt-5">{modalInfo.name}</h2>
        <h3 className="font-semibold font-montserrat text-2xl mt-3">{modalInfo.role}</h3>
        <p className="font-medium font-sans text-lg mt-1.5 pb-3">{modalInfo.about}</p>
      </div>
    </dialog>
  </>
  );
}
