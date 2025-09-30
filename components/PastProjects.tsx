import { pastProjects } from "@/data";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScriptProps } from "next/script";

gsap.registerPlugin(useGSAP);

const PastProjects = (props: ScriptProps) => {
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
    console.log("test");
    const timeline = gsap.timeline();
    const imgTimeline = gsap.timeline();
    if (window.innerWidth >= 1024) {
      timeline
        .to(`#tile-${dataId}`, {
          rotateY: 90 * direction,
          ease: "power2.in",
          duration: 0.3,
        })
        .set(`#tile-${dataId}`, { rotateY: -90 * direction })
        .set(`#tile-${dataId}-frontside`, { display: "none" })
        .set(`#tile-${dataId}-backside`, { display: "flex" })
        .to(`#tile-${dataId}`, {
          rotateY: 0,
          ease: "power2.out",
          duration: 0.3,
        });
      imgTimeline
        .to(`#tile-${dataId}-img1`, {
          x: -340 * direction,
          rotate: 8 * direction,
          ease: "power2.out",
          duration: 0.7,
        })
        .to(
          `#tile-${dataId}-img2`,
          {
            x: -600 * direction,
            rotate: -4 * direction,
            ease: "power2.out",
            duration: 0.7,
          },
          "<"
        );
    } else {
      timeline
        .to(`#tile-${dataId}`, {
          rotateX: 90,
          ease: "power2.in",
          duration: 0.3,
        })
        .set(`#tile-${dataId}`, { rotateX: -90 })
        .set(`#tile-${dataId}-frontside`, { display: "none" })
        .set(`#tile-${dataId}-backside`, { display: "flex" })
        .to(`#tile-${dataId}`, {
          rotateX: 0,
          ease: "power2.out",
          duration: 0.3,
        });
      imgTimeline
        .to(`#tile-${dataId}-img1`, {
          y: 355,
          ease: "power2.out",
          duration: 0.7,
        })
        .to(
          `#tile-${dataId}-img2`,
          {
            y: 655,
            ease: "power2.out",
            duration: 0.7,
          },
          "<"
        )
        .to(
          `#tile-${dataId}-wrapper`,
          { height: "+=500", duration: 0.7, ease: "power2.out" },
          "<"
        );
    }

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
    if (window.innerWidth >= 1024) {
      timeline
        .to(`#tile-${dataId}`, {
          rotateY: -90 * direction,
          ease: "power2.in",
          duration: 0.3,
        })
        .set(`#tile-${dataId}`, { rotateY: 90 * direction })
        .set(`#tile-${dataId}-frontside`, { display: "flex" })
        .set(`#tile-${dataId}-backside`, { display: "none" })
        .to(`#tile-${dataId}`, {
          rotateY: 0,
          ease: "power2.out",
          duration: 0.3,
        });
    } else {
      timeline
        .to(`#tile-${dataId}`, {
          rotateX: -90,
          ease: "power2.in",
          duration: 0.3,
        })
        .set(`#tile-${dataId}`, { rotateX: 90 })
        .set(`#tile-${dataId}-frontside`, { display: "flex" })
        .set(`#tile-${dataId}-backside`, { display: "none" })
        .to(`#tile-${dataId}`, {
          rotateX: 0,
          ease: "power2.out",
          duration: 0.3,
        });
    }

    imgTimeline
      .to(`#tile-${dataId}-img1`, {
        x: 0,
        y: 0,
        rotate: 0,
        ease: "power2.in",
        duration: 0.4,
      })
      .to(
        `#tile-${dataId}-img2`,
        { x: 0, y: 0, rotate: 0, ease: "power2.in", duration: 0.4 },
        "<"
      )
      .to(
        `#tile-${dataId}-wrapper`,
        { height: 350, duration: 0.6, ease: "power2.inOut" },
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
    <div className="h-auto w-screen bg-gray-200 flex flex-col justify-baseline pb-40 items-center relative z-10">
      <h1
        id={props.id}
        className="mt-[100svh] font-poppins font-extrabold text-black text-center px-4 text-5xl md:text-6xl lg:text-7xl tracking-tight"
      >
        MY PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-5 mt-8">
        {pastProjects.map((current) => {
          return (
            <div
              key={`tile-${current.id}-wrapper`}
              id={`tile-${current.id}-wrapper`}
              className=" w-[350px] h-[350px] flex flex-col justify-baseline lg:justify-center items-center perspective-[1600px] transform-3d"
            >
              <div
                onMouseDown={() =>
                  handleProjectClick(current.id, current.direction)
                }
                id={`tile-${current.id}`}
                key={`tile-${current.id}`}
                className="z-0 relative w-[350px] h-[350px] flex justify-center items-baseline"
              >
                <div
                  id={`tile-${current.id}-frontside`}
                  key={`tile-${current.id}-frontside`}
                  style={{
                    backgroundImage: `url(${current.img[0]})`,
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
                  className="absolute z-0 bg-blue-950 text-white cursor-pointer w-[350px] h-[350px] p-3 transition-all hidden flex-col justify-baseline items-baseline shadow-xl shadow-black/30"
                >
                  <h3 className="font-bold font-poppins pt-3 pb-2 px-4 text-3xl underline decoration-amber-300 underline-offset-4">
                    {current.name}
                  </h3>
                  <p className="font-semibold font-sans px-4 pb-1 text-xl">
                    {current.myRole}
                  </p>
                  <p className="font-semibold font-sans px-4 pt-1 text-md">
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
                width={280}
                height={280}
                className="absolute -translate-z-[300px] -z-10 aspect-square w-[80%] shadow-xl shadow-black/30 object-cover"
              />
              <img
                id={`tile-${current.id}-img2`}
                alt=""
                key={`tile-${current.id}-img2`}
                src={
                  current.img[2] ? current.img[2] : "/images/placeholderimg.svg"
                }
                width={280}
                height={280}
                className="absolute -translate-z-[300px] -z-20 aspect-square w-[80%] shadow-xl shadow-black/30 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PastProjects;
