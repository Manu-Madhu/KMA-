import React from "react";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-5">
        <img
          src={require("../../assets/KMA-Logo 2.png")}
          alt="Logo"
          className="flex items-center"
        />
        <h1 className="my-3 text-xl font-bold ">
          Admin Panel
        </h1>
      </div>
      <div>{<Outlet />}</div>
    </div>
  );
};

export default Admin;
