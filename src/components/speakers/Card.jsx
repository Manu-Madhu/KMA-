import React from "react";

const Card = ({ title, content, color, image }) => {
  return (
    <>
      <div className="rounded-[10px] w-[250px] md:h-full">
        <div className="rounded-t-lg w-[400px] h-[30px] md:h-[84px] "></div>
        <div className="w-full flex items-center justify-center">
          <img className="w-[200px] " src={image} alt="icons" />
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-[18px] font-semibold text-TextColor">{title}</h1>
          <h5 className="text-[12px] text-[#777777] font-normal text-center">{content}</h5>
        </div>
      </div>
    </>
  );
};

export default Card;
