import React, { useEffect, useState } from "react";
import { category } from "../../data/FormData";
import { Link } from "react-router-dom";
import { FormSubmit, phonepe } from "../../utils/EndPoint";
import { toast } from "react-toastify";
import { Validation } from "../../utils/Validation";
import { IoMdClose } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { Tooltip as ReactTooltip } from "react-tooltip";

import logo from "../../assets/KMA-Logo 2.png";
import logo1 from "../../assets/KMA-Logo white.png";
import SidePanel from "./SidePanel";
import axiosInstance from "../../utils/Axios";

const FormComponent = () => {
  const [resData, setResData] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: " ",
    email: "",
    categoryName: "",
    totalTicket: "1",
    organisation: "",
    role: "",
    KMAMemberNumber: "",
    gstnumber: "",
    delegate_occupancy: "",
  });

  const data = {
    merchantUserId: "MUID" + Date.now(),
  };

  const onchangeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "categoryName") {
      const selectedCategory = category.find(
        (item) => item.categoryName === value
      );
      if (selectedCategory) {
        setFormData({
          ...formData,
          [name]: value,
          fee: selectedCategory.amount.toString(),
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
          fee: "",
          gst: "",
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const validationError = Validation(formData);
      if (validationError) {
        if (Object.keys(validationError).length !== 0) {
          toast.error(validationError.message);
        } else {
          setLoading(true);
          const response = await axiosInstance.post(FormSubmit, formData);
          setResData(response.data);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          console.log(response.data);
        }
      }
    } catch (error) {
      console.log("Error Occurred :", error);
      toast.error(error.message || "An error occurred while submitting");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proceedHandler = async (e) => {
    console.log("Pay Now button clicked");
    e.preventDefault();
    try {
      const response = await axiosInstance.post(phonepe, { ...data });
      console.log(response);
      if (response) {
        console.log(response);
        toast.warning("Please do the payment");
        window.location.href = response.data.redirect_url;
      }
    } catch (error) {
      // console.log("Error Occurred :", error);
      toast.error(error.message || "An error occurred while submitting");
    }
  };

  return (
    <>
      <div className="w-full h-full">
        <div className="w-full flex flex-col md:flex-row ">
          <div className="relative w-full container mx-auto md:w-11/12 flex justify-center">
            <div className="absolute w-full flex  items-center justify-between md:top-6 py-2 px-7 md:ps-36  md:right-[2%] z-20">
              <Link to="/">
                <img src={logo} alt="logo" className="w-36 hidden sm:block" />
                <img src={logo1} alt="logo" className="w-36 sm:hidden" />
              </Link>
              <h1 className="text-[#8E8E8E] text-[8px] md:text-[14px]">
                To Know More About KMA !{" "}
                <Link
                  to="https://www.kma.org.in/"
                  className="text-[#B23C46] font-medium"
                >
                  Click Here
                </Link>
              </h1>
            </div>
            <form
              className="w-full md:w-2/3 flex flex-col items-center justify-center md:px-20 p-[53px] md:my-20"
              action=""
              onSubmit={submitHandler}
            >
              <div className="w-full flex flex-col items-center justify-center mb-2 md:mb-5">
                <img
                  src={require("../../assets/phone bg.png")}
                  alt=""
                  className="absolute -z-10 md:hidden top-0 object-cover"
                />
                <h1 className=" hidden md:block textGradient pb-2 md:pb-3  md:text-[26px] text-center font-bold md:font-bold p-10 uppercase">
                  KMA 41<sup className="textGradient text-[13px]">st</sup>{" "}
                  Convention <br /> <span>Registration</span>
                </h1>
                <h1 className="w-full  text-white md:hidden pb-2 md:pb-3  md:text-[26px] text-center font-bold md:font-bold py-10 uppercase">
                  KMA 41<sup className="md:textGradient text-[13px]">st</sup>{" "}
                  Convention <span>Registration</span>
                </h1>
                <hr className="h-[2px] md:bg-gradient-to-r from-[#E65758] to-[#771D32] w-2/3 md:w-1/3" />
              </div>

              {/* Name Email */}
              <div className="w-full mt-10 md:mt-3 md:w-2/3 flex flex-col md:flex-row gap-2 py-1">
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Full Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={onchangeHandler}
                    placeholder="Eg: Manu M"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={onchangeHandler}
                    placeholder="Eg: qmarktechnolabs@gmail.com"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
              </div>

              {/* Phone & Organization Name */}
              <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-2 py-1">
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    pattern="[0-9]*"
                    inputMode="numeric"
                    required
                    onChange={onchangeHandler}
                    placeholder="Eg: +91 75608 31210"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Organization Name
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    onChange={onchangeHandler}
                    placeholder="Eg: Qmark Technolabs"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
              </div>

              {/* Role Organization */}
              <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-2 py-1">
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Role At The Organization
                  </label>
                  <input
                    type="text"
                    name="role"
                    onChange={onchangeHandler}
                    placeholder="Eg: Teach Lead"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-2 py-1">
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Select a category*
                  </label>
                  <select
                    id=""
                    name="categoryName"
                    onChange={onchangeHandler}
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none
                   focus:outline-none focus:shadow-outline font-medium"
                  >
                    <option
                      name="categoryName"
                      className="text-xs ring-0 outline-none focus:outline-none"
                    >
                      Select a category
                    </option>
                    {category.map((items) => (
                      <option key={items?.id} value={items?.categoryName}>
                        {items?.categoryName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Total Delegates*
                  </label>
                  <input
                    type="number"
                    name="totalTicket"
                    min="1"
                    onChange={onchangeHandler}
                    placeholder="Eg: 10"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
              </div>

              {/* Enter KAM selection for the options */}
              <div
                className={`${
                  formData?.categoryName === "International delegate"
                    ? "block"
                    : "hidden"
                } w-full md:w-2/3 flex flex-col  gap-2 py-1`}
              >
                <div className="w-full space-y-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor=""
                      className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                    >
                      Single Occupancy
                    </label>
                    <CiCircleQuestion
                      className="cursor-pointer"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="per head including 2-night stay at Grand Hyatt."
                    />
                  </div>
                  <ReactTooltip id="my-tooltip" />
                  <input
                    type="radio"
                    name="delegate_occupancy"
                    value={"Single Occupancy"}
                    onChange={onchangeHandler}
                    placeholder="Eg: KMA 987 654 321"
                    className=""
                  />
                </div>
                <div className="w-full space-y-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor=""
                      className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                    >
                      Double Occupancy
                    </label>
                    <CiCircleQuestion
                      className="cursor-pointer"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="two person including 2-night stay at Grand Hyatt."
                    />
                  </div>
                  <input
                    type="radio"
                    name="delegate_occupancy"
                    value={"Double Occupancy"}
                    onChange={onchangeHandler}
                    placeholder="Eg: KMA 987 654 321"
                    className=""
                  />
                </div>
                <div className="w-full space-y-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor=""
                      className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                    >
                      Without Accommodation
                    </label>
                    <CiCircleQuestion
                      className="cursor-pointer"
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content="per head for the 2-day event. "
                    />
                  </div>
                  <input
                    type="radio"
                    name="delegate_occupancy"
                    value={"Without Accommodation"}
                    onChange={onchangeHandler}
                    placeholder="Eg: KMA 987 654 321"
                    className=""
                  />
                </div>
              </div>

              {/* Enter KAM Membership Number */}
              <div
                className={`${
                  formData?.categoryName === "KMA Member" ||
                  formData?.categoryName === "KMA Student Member"
                    ? "block"
                    : "hidden"
                } w-full md:w-2/3 flex flex-col md:flex-row gap-2 py-1`}
              >
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Membership Number
                  </label>
                  <input
                    type="text"
                    name="KMAMemberNumber"
                    onChange={onchangeHandler}
                    placeholder="Eg: KMA 987 654 321"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
              </div>

              {/* GST Number */}
              <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-2 py-1">
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    GST Number
                  </label>
                  <input
                    type="text"
                    name="gstnumber"
                    onChange={onchangeHandler}
                    placeholder="Eg: GSTIN 22AAAAA0000A1Z5"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
              </div>

              {/* Estimate Fee */}
              <div className="w-full md:w-2/3 flex flex-col md:flex-row gap-2 py-1">
                <div className="w-full space-y-2">
                  <label
                    htmlFor=""
                    className="text-[#777777] text-[12px] md:text-[13px] font-medium"
                  >
                    Estimated Fee for the event*
                  </label>
                  <input
                    type="text"
                    value={
                      formData?.fee
                        ? `Per Person ${formData.fee} INR + GST & Other Charges Applicable`
                        : ""
                    }
                    onChange={onchangeHandler}
                    placeholder="Fee Details"
                    className="border border-[#771D32]/40 w-full md:full p-2 md:p-3 text-gray-700 text-[10px] md:text-xs rounded  placeholder:text-xs ps-2 outline-none"
                  />
                </div>
              </div>

              {/* Check Mark */}
              <div className="flex gap-2 w-full  md:w-2/3 py-4">
                <input type="checkbox" required />
                <h1 className="text-xs">I agree to the Terms & Conditions</h1>
              </div>

              {/* Submit Button */}
              <div className="my-2  w-full flex items-center justify-center">
                <button
                  type="submit"
                  className="w-full md:w-2/3 p-2 md:p-3 px-5 text-white bg-gradient-to-r from-[#E65758] to-[#771D32] rounded text-sm hover:scale-105 ease-in-out duration-300"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>

              {/* Footer part */}
              <div className="w-full md:w-2/3 flex flex-col items-center justify-center gap-.5 mt-2">
                <h1
                  htmlFor=""
                  className="text-[#777777] text-[9px] md:text-[11px] font-medium"
                >
                  © 2023 KMA. All Rights Reserved.
                </h1>
                <h1
                  htmlFor=""
                  className="text-[#777777] text-[7px] md:text-[10px] font-medium"
                >
                  <Link
                    to="/PrivacyAndPolicy"
                    className="text-[#B23C46] hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  &{" "}
                  <Link
                    to="/TeamsAndConditions"
                    className="text-[#B23C46] hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  Click Here.
                </h1>
              </div>
            </form>
            <div className="absolute bottom-2 md:bottom-7 text-[#777777] text-[10px]">
              <h1>
                Developed by{" "}
                <Link
                  to="https://qmarktechnolabs.com/"
                  className="underline hover:text-[#B23C46]"
                >
                  {" "}
                  Qmark Technolabs
                </Link>
              </h1>
            </div>
          </div>
          <div className=" hidden md:block md:w-1/3 h-screen right-0 "></div>
          <SidePanel />
        </div>
      </div>
      {resData?.grandTotal && (
        <div className="fixed bg-black/50 w-full h-full top-0 z-50 flex items-center justify-center p-10">
          <div className="bg-white p-5 md:p-10 w-full md:w-1/3 h-1/2 md:h-2/3 shadow-2xl rounded flex flex-col items-center relative">
            <div className="payCard absolute w-full h-full top-0">
              <img
                src={require("../../assets/Bg.png")}
                alt=""
                className="w-full h-full "
              />
            </div>
            <div
              className="absolute top-0 right-1 border bg-red-700 text-white m-2 hover:cursor-pointer"
              onClick={() => setResData({})}
            >
              <IoMdClose />
            </div>
            <form
              onSubmit={proceedHandler}
              className="w-full h-full flex items-center justify-center"
            >
              <div className="w-full h-full flex flex-col items-start md:items-center justify-center gap-1 ">
                <div className="flex gap-3">
                  <h1 className="font-semibold">Name :</h1>
                  <h1 className="text-slate-500 ">{formData.name}</h1>
                </div>
                <div className="flex gap-3">
                  <h1 className="font-semibold">Ticket Price :</h1>
                  <h1 className="text-slate-500 ">
                    Rs. {resData.totalTicketRate}
                  </h1>
                </div>
                <div className="flex gap-3">
                  <h1 className="font-semibold">GST 18% + Other :</h1>
                  <h1 className="text-slate-500 ">
                    Rs.{" "}
                    {Math.floor(resData.grandTotal - resData.totalTicketRate)}
                  </h1>
                </div>
                <div className="flex gap-3">
                  <h1 className="font-semibold">TOTAL AMOUNT :</h1>
                  <h1 className="text-slate-500 ">Rs. {resData.grandTotal}</h1>
                </div>
                <button
                  type="submit"
                  className="bg-red-700 border p-3 w-full md:w-1/2 mt-5 rounded text-xs text-white hover:cursor-pointer z-50 hover:scale-105 ease-in-out duration-200"
                >
                  Pay Now
                </button>
                <div className="mt-2 bg-white p-2">
                  <h1 className="text-xs text-slate-600">
                    Note: After completing your payment, please check your
                    registered email. Confirm the receipt of the Virtual Pass in
                    your inbox. If you haven't received the email within 30
                    minutes, please contact us immediately.
                  </h1>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormComponent;
