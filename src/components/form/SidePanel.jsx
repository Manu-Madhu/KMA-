import React from "react";
import sideImage from "../../assets/facade.jpg";

import { sideData } from "../../data/SidePostData";
import { useState } from "react";

const SidePanel = () => {
  const [data, setData] = useState(sideData);
  const [select, setSelect] = useState("1");
  const [selectedData, setSelectedData] = useState(
    data.filter((items) => items.id === "1")
  );

  const clickHandler = (value) => {
    setSelect(value);
    setSelectedData(data.filter((items) => items.id === value))
  };
  return (
    <div className="hidden md:block fixed items-center md:w-[405px] h-screen right-0  bg-gradient-to-b from-[#E65758] to-[#771D32] z-50">
      <div className="relative">
        <img
          src={sideImage}
          alt="side_image"
          className="object-cover w-full h-[350px] "
        />
        <div className="absolute top-0 right-0 bg-black/50 w-full h-[350px]"></div>
        <div className="absolute top-10 right-10  flex flex-col text-white items-center justify-center">
          <h1 className="absolute top-10 left-32 font-bold text-[#FF1000]">
            ST
          </h1>
          <div className="flex items-center gap-5">
            <h1 className="text-[120px] font-semibold text-[#FF1000] ">41</h1>
            <h1 className="text-[25px] font-bold">
              Annual <br /> Management <br /> Convention
            </h1>
          </div>
          <div className="">
            <h2 className="text-[#FF1000]   font-bold text-xl">
              INTERNATIONAL EDITION
            </h2>
          </div>
          <div className="text-xs font-semibold">
            <h5>The most sought after Professional Managers Meet</h5>
          </div>

          <div className="flex mt-2 border-4 border-[#9D9E9E] items-center ">
            <div className="bg-[#9D9E9E]  px-2 font flex items-center gap-2">
              <h1 className="text-gray-900 font-bold text-xl">18 & 19</h1>
              <div className="text-gray-900 font-bold text-[11px]">
                 <h1>JAN</h1>
                 <h1>2024</h1>
              </div>
            </div>
            <div className="p-1 px-3">
              <h1 className="uppercase font-bold">grand Hyatt, Kochi</h1>
            </div>
          </div>
        </div>
        <div className="p-3 px-7 text-white flex items-center gap-2">
          <h1 className="text-xs">Know More</h1>
          <img
            src={require("../../assets/Arrow 1.png")}
            alt="ARROW"
            className="w-4 pt-1"
          />
        </div>
        <div className="flex w-20 ms-7 gap-2">
          {sideData.map((items) => (
            <div
               key={items.id}
              onClick={() => clickHandler(items.id)}
              className={`w-full p-1 rounded hover:bg-white cursor-pointer ${
                select === items.id ? "bg-white" : "bg-[#FFA1A1]"
              } `}
            ></div>
          ))}
        </div>
        <div className="relative">
          {selectedData.map((items) => (
            <div key={items.id} className="ms-7 text-white mt-10">
              {/* <div className="bgColor absolute top-[50%] right-[50%] z-0"></div> */}
              <h1 className="mb-3 font-semibold z-10 text-xs">{items?.caption}</h1>
              <img src={items?.img} alt="" className={`w-[300px] z-10 rounded-lg`} />
              {/* <img src={items?.img} alt="" className={`${items.id === "1" || items.id === "2" ? "w-[170px]": "w-[300px]"} z-10 rounded-lg`} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
