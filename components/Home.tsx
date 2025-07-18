import ChangingText from "./elements/ChangingText";
import { IoMdArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <div className="relative h-svh w-screen flex items-center justify-center text-amber-50 bg-radial from-gray-800 to-gray-950 bg-center overflow-hidden">
      <video
        className="w-screen h-screen object-cover z-0 brightness-20"
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        data-speed="0.75"
      >
        <source
          src="https://pub-d15191339994413ea97910d3f097f601.r2.dev/highlights.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="absolute flex justify-center items-center flex-col">
        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-lexpeta tracking-tightest font-medium text-center text-white">
          Hello! My name is...
        </h1>
        <p className="text-center font-lexpeta tracking-tightest text-6xl md:text-8xl/tight lg:text-8xl/tight font-extrabold mt-8 px-5 py-5 text-white">
          Satria Chandra
        </p>
        <ChangingText />
      </div>
      <div className="absolute bottom-10 flex flex-col items-center justify-center">
        <p className="font-bold font-lexpeta tracking-tight text-gray-300">
          SCROLL
        </p>
        <IoMdArrowDown className="text-gray-300" size={30} />
      </div>
    </div>
  );
};

export default Home;
