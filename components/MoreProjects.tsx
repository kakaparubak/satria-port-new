import { moreProjects } from "@/data";

const MoreProjects = () => {
  return (
    <div className="bg-gray-200 text-black w-screen h-auto flex flex-col justify-center items-center pb-40 relative z-10">
      <h2 className="font-bold font-poppins pt-3 pb-8 px-4 text-5xl underline decoration-amber-300 underline-offset-4">
        More Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-12">
        {moreProjects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-indigo-300 p-6 flex justify-center flex-col items-center shadow-2xl shadow-neutral-400"
          >
            <h3 className="font-semibold text-2xl text-center">{project.name}</h3>
            <p className="text-sm text-center text-gray-500">{project.as}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreProjects;
