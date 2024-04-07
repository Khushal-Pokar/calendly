import React, { useState } from "react";
import Logo from "../assets/logo_cropped.jpg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [productOpen, setProductOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center bg-white w-full h-24 mx-auto px-8 md:px-24 sticky top-0 md:relative md:top-auto z-50">
      <img className="w-[150px]" src={Logo} alt="" />
      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer font-bold">Individuals</li>
        <li className="p-4 cursor-pointer font-bold">Teams</li>
        <li className="p-4 cursor-pointer font-bold">Enterprise</li>
        <li
          className="flex items-center justify-between w-[106px] p-4 cursor-pointer font-bold"
          onClick={() => setProductOpen((prev) => !prev)}
        >
          Product{" "}
          {!productOpen ? (
            <FaChevronDown size={10} />
          ) : (
            <FaChevronUp size={10} />
          )}
        </li>
        <li className="p-4 cursor-pointer font-bold">Pricing</li>
        <li
          className="flex items-center justify-between w-[122px] p-4 cursor-pointer font-bold"
          onClick={() => setResourcesOpen((prev) => !prev)}
        >
          Resources{" "}
          {!resourcesOpen ? (
            <FaChevronDown size={10} />
          ) : (
            <FaChevronUp size={10} />
          )}
        </li>
      </ul>
      <div className="hidden md:flex">
        <button className="p-4 font-bold">Log In</button>
        <button className="px-6 py-4 text-white bg-blue-700 rounded-full hover:bg-blue-500 hover:scale-110 hover:duration-300">
          Get Started
        </button>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-16 w-[50%] h-full bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="p-6">
          <li className="p-4 border-b">Individuals</li>
          <li className="p-4 border-b">Teams</li>
          <li className="p-4 border-b">Enterprise</li>
          <li
            className="flex items-center justify-between w-[106px] p-4 cursor-pointer"
            onClick={() => setProductOpen((prev) => !prev)}
          >
            Product{" "}
            {!productOpen ? (
              <FaChevronDown size={10} />
            ) : (
              <FaChevronUp size={10} />
            )}
          </li>
          <li className="p-4 border-b border-t">Pricing</li>
          <li
            className="flex items-center justify-between w-[122px] p-4 cursor-pointer"
            onClick={() => setResourcesOpen((prev) => !prev)}
          >
            Resources{" "}
            {!resourcesOpen ? (
              <FaChevronDown size={10} />
            ) : (
              <FaChevronUp size={10} />
            )}
          </li>
          <li className="p-4 border-b border-t text-blue-700 font-semibold">Log In</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
