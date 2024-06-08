import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Tickets = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
    Aos.refresh();
  }, []);
  return (
    <div className="container mx-auto w-full h-full p-5 md:px-10 pt-16 md:pt-36 overflow-hidden">
      <div className="flex flex-col ">
        <div className="w-full flex flex-col md:items-center z-20">
          <h1 className="textGradient1 text-[21px] md:text-[30px] font-bold text-TextColor">
            Register Now Needs To Be BIG Size
          </h1>
          {/* <h1 className="text-xs text-slate-400">Register Start Now</h1> */}
        </div>

        <div className="w-full h-full register flex items-center justify-evenly mt-16 relative z-20">
          <div className="absolute w-full h-full top-0 bg-white/50 "></div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 z-10 -mt-[6%]">
            <img
              src={require("../../assets/side/image 3.png")}
              alt="rate"
              className="rounded-2xl w-[250px]  md:w-[400px]"
              data-aos="fade-up"
            />
            <img
              src={require("../../assets/side/image 4.png")}
              alt="rate"
              className="rounded-2xl w-[250px]  md:w-[400px] "
              data-aos="fade-up"
            />
            <h1 className="text-slate-500 text-[10px] font-semibold">
              *Dinner on 18 Jan 2024 excluded
            </h1>
          </div>
          <div className="hidden w-full h-full left-0 relative lg:flex items-center">
            <div className="flex w-full h-full  items-end justify-end">
              <img
                src={require("../../assets/Intersect.png")}
                alt=""
                className="object-cover md:w-full"
                data-aos="fade-left"
              />
            </div>
            <div className="absolute w-full h-full flex flex-col items-center justify-center gap-2">
              <h1 className="text-white font-bold md:text-3xl">
                18 & 19 JAN 2024
              </h1>
              <h1 className="text-white font-bold md:text-3xl">
                GRAND HYATT, KOCHI.
              </h1>
              <div className="text-xs md:text-sm">
                <Link to="/registration">
                  <button className="bgGradient p-3 px-10 text-white rounded-md shadow-xl hover:scale-105 ease-in-out duration-300">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
