import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto ">
      <footer class="bg-white  ">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div class="flex flex-col md:flex-row md:justify-between gap-2">
            <div className="w-full">
              <img
                src={require("../assets/KMA-Logo 2.png")}
                alt="Logo"
                className="w-36 object-contain"
              />
              <h1 className="text-[10px] md:text-xs text-slate-500  mt-2">
                Management House, Kerala Management Avenue,
                <br /> Panampilly Nagar PO, Kochi - 682036
              </h1>
              <h1 className="text-[10px] md:text-xs text-slate-500 ">
                Phone: 90727 75588, 0484 - 2317966 <br /> Email: info@kma.org.in
              </h1>
            </div>
            <div className="hidden w-full md:flex flex-col md:items-center md:gap-2">
              <div>
                <h1 className="textGradient1 md:text-xl font-bold">
                  Register Before
                </h1>
                <span className="text-xs text-slate-400">
                  January 17, 2024 11:59 pm
                </span>
              </div>
              <div className="text-center mt-3">
                <h1 className="font-semibold">Digital Partner</h1>
                <img
                  src={require("../assets/logo.png")}
                  alt="qmak logo"
                  className="object-cover w-56"
                />
              </div>
            </div>
            <div className=" my-3 md:hidden">
              <h1 className="font-semibold">Digital Partner</h1>
              <img
                src={require("../assets/logo.png")}
                alt="qmark_logo"
                className="object-cover w-48 mt-1"
              />
            </div>
            <div className="w-full flex flex-col md:items-end md:gap-2">
              <Link to="/registration" className="">
                <button className="bgGradient p-2 md:px-10 text-xs md:text-sm text-white rounded-md shadow-xl hover:scale-105 ease-in-out duration-300">
                  Register Now
                </button>
              </Link>
              <span className="text-xs text-slate-400 hidden md:block">
                Already Registered?
              </span>
            </div>
          </div>
          <hr class="my-6 border-gray-200 w-full dark:border-gray-700 lg:my-8" />
          <div class="flex flex-col sm:flex sm:items-center sm:justify-between">
            <span class="text-[10px] sm:text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a
                target="blank"
                href="https://www.kma.org.in"
                class="hover:underline"
              >
                KMA
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex">
              <ul class="text-gray-500 flex md:gap-2 dark:text-gray-400 text-[8px]  md:text-xs font-sm">
                <li class="sm:mb-2">
                  <a
                    href="/PrivacyAndPolicy"
                    class="hover:underline hover:text-red-400"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li class="sm:mb-2">
                  <a
                    href="/TeamsAndConditions"
                    class="hover:underline hover:text-red-400"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li class="sm:mb-2">
                  <a
                    href="/RefundPolicy"
                    class="hover:underline hover:text-red-400"
                  >
                    Cancellation &amp; Refund Policy
                  </a>
                </li>
                <li class="sm:mb-2">
                  <a
                    href="/ShopDelivery"
                    class="hover:underline hover:text-red-400"
                  >
                    Shipping &amp; Delivery Policy
                  </a>
                </li>
                <li class="sm:mb-2">
                  <a href="/Contact" class="hover:underline hover:text-red-400">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <span class="text-[7px] sm:text-[10px] text-gray-500 sm:text-center dark:text-gray-400">
              Developed by{" "}
              <a
                target="blank"
                href="https://qmarktechnolabs.com/"
                class="hover:underline"
              >
                Qmark Technolabs
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
