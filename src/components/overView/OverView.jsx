import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OverView = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container mx-auto w-full h-full md:p-5 md:px-10 mt-10 md:mt-0">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-center p-5 md:px-10 md:mt-10">
        <div className="w-full">
          <img
            src={require("../../assets/newImages for home/overView.png")}
            alt="OverView"
            className="object-cover"
            data-aos="fade-right"
          />
        </div>
        <div
          className="w-full flex flex-col md:items-start md:ps-10 "
          data-aos="fade-up"
        >
          <h1 className="textGradient1 text-[24px] md:text-[30px] font-bold text-TextColor pt-12 md:pt-0">
            Over View
          </h1>
          <div className="mt-4 text-[14px] text-[#808080]">
            The 41 edition on the theme "Beyond Borders- Fostering Management
            Excellence" will be held on January 18 & 19, 2024, at The Grand
            Hyatt, Cochin, Kerala. This international edition presents an
            excellent opportunity for brands to connect with an august audience,
            and we invite you to partner with the KMA Convention.
          </div>
          <div className="mt-4 text-[14px] text-[#808080]">
            KMA's Annual Management Convention, with over 1000 delegates, is a
            renowned event, attracting CEOs, CXOs, Entrepreneurs, Managers,
            B-School students, and Academicians.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
