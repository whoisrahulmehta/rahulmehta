import React from "react";
import {
  FaCopyright,
  FaGithub,
  FaRegMoneyBillAlt,
  FaWolfPackBattalion,
} from "react-icons/fa";
import { FaComputer, FaDumbbell, FaRegChessKing } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();



  return (
    <>
      <footer className="w-full sm:h-[60vh] h-[100vh] sm:mt-[5%] flex flex-col justify-end items-center relative">
        <div className="notification sm:w-[60%] w-[95%] h-[15vh] mx-auto rounded-t-lg absolute top-[5%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[10%] ">
          <p className="w-[40%] text-lg font-[400]">
            Want to get notified when i post an update ?
          </p>
          <button className="btn-primary " onClick={() => navigate("/contact")}>
            Get Notifications
          </button>
        </div>

        <div className="fboxes flex sm:flex-row flex-col justify-center sm:justify-around items-center sm:w-[90%] w-[100%]  sm:h-[40%] h-[60%] mx-auto  text-white gap-[1%]">
          <div className="fbox w-[100%] sm:h-[30%] sm:w-[25%] h-[100%]  flex flex-col justify-center sm:items-start items-center ">
            <p className="w-[80%] sm:w-[100%] text-center sm:text-left px-[3%] sm:px-0 " >
              Men are happy, when they are building something. Keep Building
              Brothers!
            </p>
            <p className="w-[100%] flex  flex-row justify-center items-center uppercase text-red-800 whitespace-nowrap text-balance">
              WHO IS Rahul Mehta <FaRegChessKing size="2.4rem" />
            </p>
          </div>
          <div className="fbox w-[100%] sm:h-[30%] sm:w-[25%] h-[100%]  flex flex-col justify-center sm:items-start items-center ">
            <p className="sm:text-lg text-sm mx-[7%] sm:mx-0 font-[600]">
              You can contact me on the links provided above or DM me now !
            </p>
            <p>Learning never ends !</p>
            <p>Eat Sleep Create Repeat !</p>
            <p className="flex flex-row gap-4 text-red-800">
              <FaRegMoneyBillAlt size="3rem" />
              <FaComputer size="3rem" />
              <FaDumbbell size="3rem" />
            </p>
            <p> Thanks for visiting !</p>
          </div>
          <div className="fbox w-[100%] sm:h-[30%] sm:w-[25%] h-[100%]  flex flex-col justify-center sm:items-start items-center  hover:text-red-500">
            <FaWolfPackBattalion size="10rem" />
          </div>
          <div className="fbox w-[100%] sm:h-[30%] sm:w-[25%] h-[100%]  object-cover flex flex-col justify-center sm:items-start items-center  hover:text-red-500">
             <img
              className="sm:w-[100%] sm:h-[100%] w-[70%] h-[70%] object-contain -rotate-12 "
              src="/rahulmehta/public/whrmlogo.png"
              alt="logo"
            />
          </div>
        </div>
        <section className="bottom p-[1%] sm:text-sm text-xs sm:w-[80%] w-[100%] ">
          <p><FaCopyright /></p>
          <p>Front End </p>
          <p>2024</p>
          <p className="">Rahul Mehta</p>
          <p>All Rights Reserved</p>
          <p onClick={() => navigate("/about")}>About Me</p>
          <p>Privacy Policy</p>
        </section>
        <div className="muted font-[700] text-[1rem] mb-[10px] cursor-none flex flex-row gap-3 justify-center items-end">
          Powered By - Rahul Mehta | <FaGithub /> -{" "}
          <a
            href="https://www.github.com/whoisrahulmehta"
            className="text-white lowercase"
          >
            WHOISRAHULMEHTA
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
