import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogoBold } from "react-icons/pi";
import PlayStore from "../assets/google-play-badge-logo.svg";
import AppStore from "../assets/app-store-logo.svg";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const languages = ["Japanese", "German", "Chinese"];

  return (
    <div className="w-full py-16 px-24 flex flex-col md:flex-row text-center md:text-start items-center md:items-start justify-around gap-20 text-[#092640]">
      <div className="">
        <h1 className="w-full text-5xl font-bold mb-4">Easy</h1>
        <h1 className="w-full text-5xl font-bold text-blue-500 mb-5">ahead</h1>
        <p className="text-lg py-4 mb-10">
          We take the work out of connecting with others so you can accomplish
          more.
        </p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full p-4 flex items-center justify-between text-lg font-bold border-2 border-gray-200 rounded-xl"
        >
          English
          {!isOpen ? <FaChevronDown /> : <FaChevronUp />}
        </button>
        {isOpen && (
          <div className="w-full mt-2 p-4 flex flex-col text-start items-start justify-between text-lg font-bold border-2 border-gray-200 rounded-xl">
            {languages.map((item, i) => (
              <div
                key={i}
                className="w-full p-4 hover:border-l-2 hover:border-l-black"
              >
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-around space-x-2 md:w-[75%]">
          <img className="w-40 cursor-pointer" src={AppStore} alt="" />
          <img className="w-40 cursor-pointer" src={PlayStore} alt="" />
        </div>
        <div className="flex justify-between md:w-[75%] mt-3">
          <FaXTwitter size={30} className="cursor-pointer" />
          <FaFacebookF size={30} className="cursor-pointer" />
          <FaInstagram size={30} className="cursor-pointer" />
          <FaLinkedinIn size={30} className="cursor-pointer" />
          <PiYoutubeLogoBold size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-4 justify-around w-full md:p-4 text-[#092640]">
        <div>
          <h6 className="text-2xl font-extrabold mb-3">About</h6>
          <ul>
            <li className="py-2 text-lg cursor-pointer">About Calendly</li>
            <li className="py-2 text-lg cursor-pointer">Contact Sales</li>
            <li className="py-2 text-lg cursor-pointer">Newsroom</li>
            <li className="py-2 text-lg cursor-pointer">Careers</li>
            <li className="py-2 text-lg cursor-pointer">Security</li>
          </ul>
        </div>
        <div>
          <h6 className="text-2xl font-extrabold mb-3">Solutions</h6>
          <ul>
            <li className="py-2 text-lg cursor-pointer">Customer Success</li>
            <li className="py-2 text-lg cursor-pointer">Sales</li>
            <li className="py-2 text-lg cursor-pointer">Recruiting</li>
            <li className="py-2 text-lg cursor-pointer">Information Technology</li>
            <li className="py-2 text-lg cursor-pointer">Marketing</li>
          </ul>
        </div>
        <div>
          <h6 className="text-2xl font-extrabold mb-3">Popular Features</h6>
          <ul>
            <li className="py-2 text-lg cursor-pointer">Embed Calendly</li>
            <li className="py-2 text-lg cursor-pointer">Availability</li>
            <li className="py-2 text-lg cursor-pointer">Sending Notifications</li>
            <li className="py-2 text-lg cursor-pointer">Using Calendly Mobile</li>
          </ul>
        </div>
        <div>
          <h6 className="text-2xl font-extrabold mb-3">Support</h6>
          <ul>
            <li className="py-2 text-lg cursor-pointer">Help Center</li>
            <li className="py-2 text-lg cursor-pointer">Video Tutorials</li>
            <li className="py-2 text-lg cursor-pointer">Cookie Settings</li>
          </ul>
        </div>
        <div>
          <h6 className="text-2xl font-extrabold mb-3">Add-Ons</h6>
          <ul>
            <li className="py-2 text-lg cursor-pointer">Download for Chrome</li>
            <li className="py-2 text-lg cursor-pointer">Download for Firefox</li>
          </ul>
        </div>
        <div>
          <h6 className="text-2xl font-extrabold mb-3">Developers</h6>
          <ul>
            <li className="py-2 text-lg cursor-pointer">Developer Tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
