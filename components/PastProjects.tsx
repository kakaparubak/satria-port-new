import { pastProjects } from "@/data";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const PastProjects = () => {
  const projectTileBack = useRef<HTMLDivElement>(null);
  const [isProjectTile, setIsProjectTile] = useState(
    pastProjects.map(() => false)
  );

  const handleProjectClick = (dataId: string, direction: number) => {
    if (!isProjectTile[Number(dataId)]) {
      handleOpenProjectTile(dataId, direction);
    } else {
      handleCloseProjectTile(dataId, direction);
    }
  };

  const handleOpenProjectTile = (dataId: string, direction: number) => {
    const timeline = gsap.timeline();
    const imgTimeline = gsap.timeline();
    timeline
      .to(`#tile-${dataId}`, {
        rotateY: 90 * direction,
        ease: "power2.in",
        duration: 0.3,
      })
      .set(`#tile-${dataId}`, { rotateY: -90 * direction })
      .set(`#tile-${dataId}-frontside`, { display: "none" })
      .set(`#tile-${dataId}-backside`, { display: "flex" })
      .to(`#tile-${dataId}`, { rotateY: 0, ease: "power2.out", duration: 0.3 });
    imgTimeline
      .to(`#tile-${dataId}-img1`, {
        x: -360 * direction,
        rotate: 8 * direction,
        ease: "power2.out",
        duration: 0.7,
      })
      .to(
        `#tile-${dataId}-img2`,
        {
          x: -600 * direction,
          y: -10,
          rotate: -5 * direction,
          ease: "power2.out",
          duration: 0.7,
        },
        "<"
      );
    const idArrIndex = Number(dataId);
    setIsProjectTile((prevArr) => {
      const newArr = [...prevArr];
      newArr[idArrIndex] = true;
      return newArr;
    });
  };

  const handleCloseProjectTile = (dataId: string, direction: number) => {
    const timeline = gsap.timeline();
    const imgTimeline = gsap.timeline();
    timeline
      .to(`#tile-${dataId}`, {
        rotateY: -90 * direction,
        ease: "power2.in",
        duration: 0.3,
      })
      .set(`#tile-${dataId}`, { rotateY: 90 * direction })
      .set(`#tile-${dataId}-frontside`, { display: "flex" })
      .set(`#tile-${dataId}-backside`, { display: "none" })
      .to(`#tile-${dataId}`, { rotateY: 0, ease: "power2.out", duration: 0.3 });
    imgTimeline
      .to(`#tile-${dataId}-img1`, {
        x: 0,
        rotate: 0,
        ease: "power2.in",
        duration: 0.4,
      })
      .to(
        `#tile-${dataId}-img2`,
        { x: 0, y: 0, rotate: 0, ease: "power2.in", duration: 0.4 },
        "<"
      );
    const idArrIndex = Number(dataId);
    setIsProjectTile((prevArr) => {
      const newArr = [...prevArr];
      newArr[idArrIndex] = false;
      return newArr;
    });
  };

  return (
    <div className="h-auto w-screen bg-white flex flex-col justify-baseline pb-8 items-center relative -z-10">
      <h1 className="mt-[100svh] font-poppins font-extrabold text-black text-center px-4 text-5xl md:text-6xl lg:text-7xl tracking-tight">
        PAST PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 mt-8">
        {pastProjects.map((current) => {
          return (
            <div
              key={`tile-${current.id}-wrapper`}
              className="flex justify-center items-center perspective-[1600px] transform-3d"
            >
              <div
                onClick={() =>
                  handleProjectClick(current.id, current.direction)
                }
                id={`tile-${current.id}`}
                key={`tile-${current.id}`}
                className="z-0 relative w-[350px] h-[350px] flex justify-center items-center"
              >
                <div
                  id={`tile-${current.id}-frontside`}
                  key={`tile-${current.id}-frontside`}
                  style={{
                    backgroundImage: current.img[0]
                      ? `url(${current.img[0]})`
                      : `url(/images/placeholderimg.svg)`,
                  }}
                  className="backface-hidden z-0 cursor-pointer w-[350px] h-[350px] flex flex-col justify-end items-baseline bg-center bg-no-repeat bg-cover shadow-xl shadow-black/30"
                >
                  <h3 className="font-bold font-poppins px-3 text-3xl text-shadow-lg text-shadow-black/40">
                    {current.name}
                  </h3>
                  <p className="font-semibold font-sans px-3 pb-2 text-xl text-shadow-md text-shadow-black/30">
                    as {current.myRole}
                  </p>
                </div>
                <div
                  id={`tile-${current.id}-backside`}
                  key={`tile-${current.id}-backside`}
                  ref={projectTileBack}
                  className="absolute z-0 bg-neutral-200 text-black cursor-pointer w-[350px] h-[350px] p-3 transition-all hidden flex-col justify-baseline items-center shadow-xl shadow-black/30"
                >
                  <h3 className="font-bold font-poppins pt-3 px-3 text-3xl">
                    {current.name}
                  </h3>
                  <p className="font-semibold font-sans px-3 pb-2 text-xl">
                    {current.myRole}
                  </p>
                  <p className="font-semibold font-sans px-5 pt-2 text-lg">
                    {current.about}
                  </p>
                </div>
              </div>
              <img
                id={`tile-${current.id}-img1`}
                alt=""
                key={`tile-${current.id}-img1`}
                src={
                  current.img[1] ? current.img[1] : "/images/placeholderimg.svg"
                }
                className="absolute -translate-z-[300px] -z-10 aspect-square w-[80%] shadow-lg"
              />
              <img
                id={`tile-${current.id}-img2`}
                alt=""
                key={`tile-${current.id}-img2`}
                src={
                  current.img[2] ? current.img[2] : "/images/placeholderimg.svg"
                }
                className="absolute -translate-z-[300px] -z-20 aspect-square w-[60%] shadow-lg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastProjects;
