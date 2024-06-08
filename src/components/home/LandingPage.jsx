import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from 'aos'
import "aos/dist/aos.css";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh(); 
  }, []);

  return (
    <div className="relative container mx-auto max-w-screen-xl h-full p-5 md:px-10 pt-20 ">
      {/* Bg Image Part */}
      <div className=" flex items-center ">
        <div className="w-full md:p-10 md:py-28 relative">
          <div className="flex items-center">
            <h1 className="relative text-Base font-bold text-[100px] md:text-[180px]">
              41<sup className="absolute top-[30%] text-[20px]">st</sup>
            </h1>
            <div className="ms-8 text-[#3F3F3F] font-extrabold md:font-bold text-[20px] leading-6 md:text-[35px] md:leading-10">
              <h1>Annual</h1>
              <h1>Management</h1>
              <h1>Convention</h1>
            </div>
          </div>
          <div className="absolute md:top-[70%]">
            <h1 className="text-Base font-bold md:text-[32px]">
              INTERNATIONAL EDITION
            </h1>
            <h1 className="text-TextColor font-semibold text-[10px] md:text-lg ">
              Beyond Borders: Fostering Management Excellence
            </h1>
            <div className="mt-5 ">
              <Link to="/registration">
                <button className="bgGradient p-3 md:px-20 text-xs md:text-lg text-white rounded-md shadow-xl hover:scale-105 ease-in-out duration-300">
                  Register Now
                </button>
              </Link>
            </div>
            <h1 className="text-[6px] md:text-xs mt-1 md:mt-2 text-slate-400">*Terms and Condition Applicable</h1>
          </div>
        </div>
        <div className="w-full md:p-10 md:py-20 overflow-x-hidden">
          <div className="w-full overflow-x-hidden "  >
            <img
              src={require("../../assets/newImages for home/Shape_re4.png")}
              alt=""
              className="absolute left-[43%] top-44 md:top-9 w-[700px] transform  rotate-[-22.131deg] md:rotate-[-39.131deg] -z-10"
              
            />
          </div>

          <img
            src={require("../../assets/newImages for home/Ellipse 9.png")}
            alt=""
            className="absolute left-[25%] md:left-[48%] top-64 md:top-32 w-[500px]"
            data-aos="fade-left"
          />
          <img
            src={require("../../assets/newImages for home/Shape_re1.png")}
            alt=""
            className="absolute left-[20%]  md:left-[48%] top-[65%] h-[120px] "
          />
          <img
            src={require("../../assets/newImages for home/Shape_re2.png")}
            alt=""
            className="absolute right-[-60px] top-[85%] h-[120px] "
          />
          <img
            src={require("../../assets/newImages for home/Shape_re3.png")}
            alt=""
            className="absolute left-[15%] top-[105%] h-[70px] w-[40px] "
          />
        </div>
      </div>
      <div className="flex w-full justify-center md:p-10 mt-[110%] sm:mt-[60%] md:mt-28 py-5" data-aos="fade-right">
        <div className="border bg-white shadow-lg rounded-2xl md:w-1/2 h-1/2 flex flex-col items-center justify-center  z-10 p-5 md:py-5">
          {/* <h1 className="uppercase font-semibold text-xl text-TextColor">
            Day to go
          </h1> */}
          <h1 className="textGradient1 text-[30px] md:text-[50px] font-bold bg-">
            18 &19 JAN 2024
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
