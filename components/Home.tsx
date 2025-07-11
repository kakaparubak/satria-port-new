"use client";
import React from "react";
import ChangingText from "./elements/ChangingText";
import { IoMdArrowDown } from "react-icons/io";

const Home = () => {
  return (
    <div
      className="h-auto text-white scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <div className="h-screen w-screen flex items-center justify-center text-amber-50 bg-radial from-gray-800 to-gray-950 bg-center overflow-hidden">
        <video className="w-screen h-screen object-cover" autoPlay muted loop>
          <source src="/hero-vid.mp4" type="video/mp4"></source>
        </video>
        <div className="h-screen w-screen bg-gray-950 opacity-80 absolute"></div>
        <div className="absolute flex justify-center items-center flex-col">
          <h1 className="text-[40px] font-lexpeta tracking-tightest font-medium text-center text-white">
            Hello! My name is...
          </h1>
          <p className="text-center font-lacquer tracking-tight text-9xl font-bold mt-7 text-white text-shadow-spread text-shadow-amber-50/50">
            satrIa cHandRa
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
      <div className="h-screen w-screen bg-radial from-gray-900 to-gray-950 flex flex-col justify-center items-center relative">
        <h2 className="font-lexpeta tracking-tighter text-4xl font-bold absolute top-15">
          Past Experience
        </h2>
      </div>
    </div>
  );
};

export default Home;
