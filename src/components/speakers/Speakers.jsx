import React, { useEffect, useState } from "react";
import Card from "./Card";
import { data } from "../../data/Speakers";
import Arrow from "../../assets/Arrow 1.png";
import Aos from "aos";

const Speakers = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(5); // Number of visible cards at a time

  const handleNext = () => {
    if (visibleIndex + visibleCards < data.length) {
      setVisibleIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (visibleIndex > 0) {
      setVisibleIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1); // Change visible cards for mobile screens
      } else {
        setVisibleCards(5); // Reset visible cards for larger screens
      }
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    Aos.refresh(); 
  }, []);

  return (
    <div className="container mx-auto mx-w-screen-xl overflow-hidden ">
      <div className="left-0 absolute w-full top-[144%] h-[100px] bg-gradient-to-t from-[#ffff] z-10"></div>
      <div className="left-0 absolute w-full top-0 h-[100px] bg-gradient-to-b from-[#ffffff] z-10"></div>
      <img
        src={require("../../assets/newImages for home/Vector Smart Object (Double Click to Edit)_.png")}
        alt="bg_image"
        className="left-0 absolute w-full object-cover h-screen"
      />
      <div className="flex flex-col md:items-center justify-center relative px-5  md:px-10">
        <h1 className="textGradient1 text-[24px] md:text-[30px] font-bold text-TextColor mt-6 md:mt-10 z-20">
          Speakers
        </h1>
        <div className="container mx-auto md:flex h-full md:items-center relative " data-aos="fade-left">
          <div className="no-scrollbar w-full h-full overflow-auto flex justify-center items-center cursor-pointer md:gap-3 focus:outline-none">
            <div
              className="absolute left-0 md:left-5 rounded-full bg-red-500 p-3 text-white outline-none focus:outline-none"
              onClick={handlePrev}
            >
              <img
                src={Arrow}
                alt="arrow left"
                className="transform scale-x-[-1]"
              />
            </div>
            {data
              .slice(visibleIndex, visibleIndex + visibleCards)
              .map((items, index) => (
                <div key={index}>
                  <Card
                    title={items.title}
                    content={items.content}
                    color={items.color}
                    image={items.image}
                  />
                </div>
              ))}
            <div
              className="absolute right-0 md:right-5 rounded-full bg-red-500 p-3 text-white outline-none "
              onClick={handleNext}
            >
              <img src={Arrow} alt="arrow left" className="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
