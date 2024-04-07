import React from "react";

const ContactSales = () => {
  return (
    <div className="flex flex-col items-center py-16 w-full bg-[#092640]">
      <div className="space-y-6 pb-10 w-1/2">
        <p className="text-white text-3xl md:text-5xl text-center font-bold">
          Secure connections, empowered teams
        </p>
        <p className="text-white text-lg md:text-xl text-center">
          Calendly enables teams across the organizations to do their jobs more
          efficiently, create better customer connections, and get more value
          from the tools they already rely on.
        </p>
      </div>
      <button className="px-4 md:px-10 py-4 text-white bg-[#092640] border-2 border-white rounded-full hover:scale-110 hover:duration-300">
        Talk with Sales
      </button>
    </div>
  );
};

export default ContactSales;
