import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black h-[14rem] w-[100%]">
      <div className="py-[2rem] flex items-center justify-between w-[80%] m-auto">
        <div className="">
          <div className="flex gap-[1.5rem] ">
            <p className="text-white">About us</p>
            <p className="text-white">Contact Us</p>
            <p className="text-white">FAQS</p>
            <p className="text-white">Media</p>
            <p className="text-white">Cancellation Policy </p>
            <p className="text-white">Return Policy</p>
            <p className="text-white">T&C</p>
          </div>
          <div className="flex gap-[1.5rem] pt-[10px]">
            <p className="text-white">Privacy Policy</p>
            <p className="text-white">Cookie Policy</p>
            <p className="text-white">Blog</p>
          </div>
        </div>
        <div className="flex align-middle gap-[0.4rem]">
          <BsTwitter style={{ color: "white" }} />
          <FaFacebookF style={{ color: "white" }} />
          <BsInstagram style={{ color: "white" }} />
        </div>
      </div>

      <div className="flex w-[80%] justify-between m-auto flex-start pt-[1rem]">
        <p className="text-white text-[13px]">Copyright © 2019 Stylease. All Rights Reserved</p>
        <p className="text-white text-[12px]">Powered By Ekommerce360</p>
      </div>
    </div>
  );
};

export default Footer;
