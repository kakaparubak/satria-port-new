import { pastProjects } from "@/data";

interface PastProjectsProps {
    onProjectClick: (arg: string) => void
}

const PastProjects = ({onProjectClick}: PastProjectsProps) => {

    return (
        <div className="h-auto w-screen bg-white flex flex-col justify-baseline pb-8 items-center relative -z-10">
          <h1 className="mt-[100svh] font-poppins font-extrabold text-black text-center px-4 text-5xl md:text-6xl lg:text-7xl tracking-tight">
            PAST PROJECTS
          </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6 mt-8">
          {pastProjects.map((current) => {
            return (
                <div onClick={() => onProjectClick(current.id)} key={current.id} style={{backgroundImage: current.img.length > 0 ? `url(${current.img})` : `url(/images/placeholderimg.svg)`}} className="cursor-pointer w-[350px] h-[350px] hover:scale-105 transition-all flex flex-col justify-end items-baseline bg-center bg-no-repeat bg-cover shadow-xl shadow-black/30">
                    <h3 className="font-bold font-poppins px-3 text-3xl text-shadow-lg text-shadow-black/40">{current.name}</h3>
                    <p className="font-semibold font-sans px-3 pb-2 text-xl text-shadow-md text-shadow-black/30">as {current.myRole}</p>  
                </div>
            );
          })}
          </div>
        </div>
    );
};

export default PastProjects;
