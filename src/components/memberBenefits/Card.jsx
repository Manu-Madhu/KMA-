import React from "react";

const Card = ({ data }) => {
  return (
    <div className="cardData bg-[#F4F2FF] p-10 m-10 flex flex-col items-center gap-4 ">
      <img src={data.image} alt="bg" className="w-32" />
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-semibold ">{data.title}</h1>
        <p className="text-xs text-slate-400 ">{data.subject}</p>
      </div>
    </div>
  );
};

export default Card;
