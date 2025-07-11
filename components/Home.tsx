"use client";
import React from "react";
import ChangingText from "./elements/ChangingText";
import PastProjects from "./elements/PastProjects";
import { IoMdArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <div
      className="h-auto text-white scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="h-svh w-screen flex items-center justify-center text-amber-50 bg-radial from-gray-800 to-gray-950 bg-center overflow-hidden">
        <video className="w-screen h-screen object-cover" autoPlay muted loop>
          <source src="/hero-vid.mp4" type="video/mp4"></source>
        </video>
        <div className="h-screen w-screen bg-gray-950 opacity-80 absolute"></div>
        <div className="absolute flex justify-center items-center flex-col">
          <h1 className="text-[40px] font-lexpeta tracking-tightest font-medium text-center text-white">
            Hello! My name is...
          </h1>
          <p className="text-center font-lexpeta tracking-tightest text-8xl/tight font-extrabold mt-8 px-10 py-5 text-white">
            Satria Chandra
          </p>
          <ChangingText />
        </div>
        <div className="absolute bottom-10 flex flex-col items-center justify-center">
          <p className="font-bold font-lexpeta tracking-tight text-gray-200">
            SCROLL
          </p>
          <IoMdArrowDown className="text-gray-100" size={30} />
        </div>
      </div>
      <PastProjects />
    </div>
  );
};

export default Home;
