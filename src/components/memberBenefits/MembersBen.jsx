import React from "react";
import Card from "./Card";
import { member } from "../../data/MemberBenefit";

const MembersBen = () => {
  return (
    <div className="container mx-auto w-full md:h-full p-5 md:px-10 pt-10 md:pt-36 overflow-hidden ">
      <div className="flex flex-col h-full">
        <div className="w-full flex flex-col md:items-center">
          <h1 className="textGradient1 text-[24px] md:text-[30px] font-bold text-TextColor">
            Member Benefits
          </h1>
          <h1 className="text-xs md:text-sm text-slate-400">
            KMA membership provides innumerable opportunities to enrich their
            experiences by participating in a variety of programs
          </h1>
        </div>

        <div className="no-scrollbar  w-full h-full flex items-start md:items-center justify-center gap-3 relative md:mt-10 overflow-auto md:overflow-hidden">
          {/* <div className="absolute w-full h-full top-0 bg-white/50 "></div> */}
          {member.map((items) => (
            <Card data={items} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersBen;
