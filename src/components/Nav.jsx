import React from "react";
import { NavData } from "../data/NavData";

const Nav = () => {
  return (
    <div className="container mx-auto py-2 px-5 md:px-12 overflow-hidden">
      <div className="p-5 rounded-xl flex justify-between items-center">
        <img
          src={require("../assets/KMA-Logo 2.png")}
          alt="Logo"
          className="w-36 object-contain"
        />
        <div className="hidden md:flex items-center">
          {/* <div className="flex font-normal text-[16px] gap-5 cursor-pointer">
            {NavData.map((items) => <span className="hover:text-red-500" >{items.name}</span>)}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
