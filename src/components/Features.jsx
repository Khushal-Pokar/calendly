import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col justify-around items-center space-y-5 px-24 py-16 text-center md:text-start">
      <h3 className="text-md md:text-lg text-blue-500 font-semibold text- uppercase">
        Calendly Features
      </h3>
      <h1 className="text-2xl md:text-4xl text-[#092640] font-bold">
        Favorite Security Features
      </h1>
      <p className="text-lg md:text-2xl text-[#46505b]">
        Here's a closer look at some of the security features IT admins enjoy
        with Calendly.
      </p>
      <div className="flex flex-col space-y-4 md:flex-row justify-around md:justify-center md:items-baseline md:space-x-6">
        <button className="px-4 md:px-10 py-4 text-white rounded-full bg-[#006bfe] hover:bg-blue-500 hover:scale-110 hover:duration-300">
          Start for free
        </button>
        <button className="px-4 md:px-10 py-3.5 text-black bg-white border-2 border-black rounded-full hover:scale-110 hover:duration-300">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Features;
