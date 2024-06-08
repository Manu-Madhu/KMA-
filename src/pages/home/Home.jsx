import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import LandingPage from "../../components/home/LandingPage";
import OverView from "../../components/overView/OverView";
import Speakers from "../../components/speakers/Speakers";
import Tickets from "../../components/tickets/Tickets";
import MembersBen from "../../components/memberBenefits/MembersBen";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className=" fixed top-0 w-full bg-white z-30">
        <img
          src={require("../../assets/newImages for home/Vector Smart Object (Double Click to Edit)_.png")}
          alt=""
          className="overflow-hidden top-0 absolute w-full h-[95px] object-cover"
        />
        <Nav />
      </div>
      <div className="w-full ">
        <div className="absolute w-full top-0 left-0 h-full">
          <div className="absolute w-full bottom-[0] h-[100px] bg-gradient-to-t from-white"></div>
          <img
            src={require("../../assets/newImages for home/Vector Smart Object (Double Click to Edit)_.png")}
            alt="bg_image"
            className="w-full object-cover h-full md:h-screen"
          />
        </div>
        <LandingPage />
      </div>
      <div className="w-full flex md:items-center">
        <OverView />
      </div>
      <div className="w-full h-full relative">
        <Speakers />
      </div>
      <div className="w-full ">
        <Tickets />
      </div>
      <div className="w-full ">
        <MembersBen />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
