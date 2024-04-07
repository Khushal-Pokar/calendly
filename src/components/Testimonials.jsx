import React from "react";
import StackOverflow from "../assets/logo-stackoverflow.svg";
import TexasUniversity from "../assets/logo-texasuniversity.svg";
import Bitly from "../assets/bitly-logo-vector.svg";

const Testimonials = () => {
  return (
    <div className="flex flex-col justify-around items-center w-full px-24 py-16">
      <div className="flex flex-col justify-around items-center space-y-6">
        <h3 className="text-lg md:text-xl text-blue-500 font-semibold uppercase">
          success stories
        </h3>
        <h1 className="text-3xl md:text-6xl text-center text-[#092640] font-bold">
          Do more of what you do best
        </h1>
        <p className="text-lg md:text-3xl text-center text-[#46505b] md:w-[90%]">
          Eliminate scheduling hassles and interruptions so your organization
          accomplishes more.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="flex h-60 relative overflow-hidden">
            <img className="w-40 h-20 bg-white" src={StackOverflow} alt="/" />
            <div className="absolute -bottom-28 -right-14 w-64 h-64 bg-[#fdf8f3] rounded-full z-20"></div>
            <div className="absolute -bottom-36 -right-20 w-80 h-80 bg-[#fffbf6] rounded-full z-10"></div>
          </div>
          <div className="text-start font-medium w-full">
            <p className="py-2 mx-4 mt-8 text-blue-500 uppercase">
              customer story
            </p>
            <p className="text-xl py-2 mx-4">
              Stack Overflow's streamlined admin forges relationships with new
              recruits
            </p>
            <p className="text-lg font-bold text-blue-500 py-2 mx-4">Read now &gt;</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="flex h-60 relative overflow-hidden">
            <img className="w-40 h-20 bg-white" src={TexasUniversity} alt="/" />
            <div className="absolute -bottom-28 -right-14 w-64 h-64 bg-[#fef8f6] rounded-full z-20"></div>
            <div className="absolute -bottom-36 -right-20 w-80 h-80 bg-[#fbf6f1] rounded-full z-10"></div>
          </div>
          <div className="text-start font-medium">
            <p className="py-2 mx-4 mt-8 text-blue-500 uppercase">
              customer story
            </p>
            <p className="text-xl py-2 mx-4">
              Stack Overflow's streamlined admin forges relationships with new
              recruits
            </p>
            <p className="text-lg font-bold text-blue-500 py-2 mx-4">Read now &gt;</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className="flex h-60 relative overflow-hidden">
            <img className="w-20 h-20 left-0 bg-white" src={Bitly} alt="/" />
            <div className="absolute -bottom-28 -right-14 w-64 h-64 bg-[#fef8f8] rounded-full z-20"></div>
            <div className="absolute -bottom-36 -right-20 w-80 h-80 bg-[#fff4f1] rounded-full z-10"></div>
          </div>
          <div className="text-start font-medium">
            <p className="py-2 mx-4 mt-8 text-blue-500 uppercase">
              customer story
            </p>
            <p className="text-xl py-2 mx-4">
              Stack Overflow's streamlined admin forges relationships with new
              recruits
            </p>
            <p className="text-lg font-bold text-blue-500 py-2 mx-4">Read now &gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
