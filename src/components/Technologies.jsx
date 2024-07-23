import React from "react";
import { BsBootstrap, BsGithub } from "react-icons/bs";
import { DiCss3Full, DiHtml5, DiJqueryLogo, DiSass } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiVite } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { RiBootstrapLine } from "react-icons/ri";

function Technologies() {
  return (
    <>
      <section
        className="social w-[100%] h-[100vh] flex flex-col justify-center items-center z-3 relative "
        data-scroll
        data-scroll-section
        data-scroll-speed=".6"
      >
        <h1 className="text-4xl vertical uppercase font-[600] text-red-800 absolute left-0  ">
          Technologies
        </h1>
        <div className="boxes flex sm:flex-col flex-row sm:justify-start justify-center items-center sm:w-[90%] w-[100%] sm:h-[100%] h-[100%]">
          <div className="box sm:flex sm:flex-row justify-center items-center w-[30%] sm:w-[100%] sm:h-[40%] h-[100%]  ">
            {[
              {
                name: "HTML 5",
                icon: <DiHtml5 size="7rem" />,
                color: "text-red-500",
              },
              {
                name: "CSS 3",
                icon: <DiCss3Full size="7rem" />,
                color: "text-blue-500",
              },
              {
                name: "Java Script",
                icon: <TbBrandJavascript size="7rem" />,
                color: "text-amber-600",
              },
              {
                name: "jQuery",
                icon: <DiJqueryLogo size="7rem" />,
                color: "text-blue-500",
              },
            ].map((ic, i) => (
              <div
                key={i}
                className={` socialIcon h-[12rem] sm:w-[12rem] w-[100%] hover:cursor-pointer rounded-full`}
              >
                <p className={`sm:w-[100%] sm:h-[100%] h-[70%] w-[70%] flex flex-row justify-center items-center hover:text-red-500 hover:${ic.color}`}>
                  {ic.icon}
                  <span className=" bottom-[-2%] text-lg font-[600] whitespace-nowrap uppercase left-[50%] translate-x-[-50%] ">
                    {ic.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="box sm:flex sm:flex-row flex-col justify-center items-center w-[30%] sm:w-[100%] sm:h-[40%] h-[100%] ">
            {[
              {
                name: "SASS",
                icon: <DiSass size="7rem" />,
                color: "text-pink-700",
              },
              {
                name: "Tailwind",
                icon: <BiLogoTailwindCss size="7rem" />,
                color: "text-blue-500",
              },

              {
                name: "Bootstrap",
                icon: <RiBootstrapLine size="7rem" />,
                color: "text-blue-500",
              },
            ].map((ic, i) => (
              <div
                key={i}
                className={` socialIcon h-[12rem] sm:w-[12rem] w-[100%] hover:cursor-pointer rounded-full`}
              >
                <p className={`sm:w-[100%] sm:h-[100%] h-[70%] w-[70%] flex flex-row justify-center items-center hover:text-red-500 hover:${ic.color}`}>
                  {ic.icon}
                  <span className=" bottom-[-2%] text-lg font-[600] whitespace-nowrap uppercase left-[50%] translate-x-[-50%] ">
                    {ic.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
          <div className="box sm:flex sm:flex-row justify-center items-center w-[30%] sm:w-[100%] sm:h-[40%] h-[100%]  ">
            {[
              {
                name: "React js",
                icon: <GrReactjs size="7rem" />,
                color: "text-blue-500",
              },
              {
                name: "Git hub",
                icon: <BsGithub size="7rem" />,
                color: "text-red-800",
              },
              {
                name: "Vite",
                icon: <SiVite size="7rem" />,
                color: "text-green-500",
              },
              {
                name: "Framer",
                icon: <FiFramer size="7rem" />,
                color: "text-blue-500",
              },
            ].map((ic, i) => (
              <div
                key={i}
                className={`socialIcon h-[12rem] sm:w-[12rem] w-[100%] hover:cursor-pointer rounded-full`}
              >
                <p className={`sm:w-[100%] sm:h-[100%] h-[70%] w-[70%] flex flex-row justify-center items-center hover:text-red-500 hover:${ic.color} `}>
                  {ic.icon}
                  <span className=" top-[-2%] text-lg font-[600] whitespace-nowrap uppercase left-[50%] translate-x-[-50%] ">
                    {ic.name}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Technologies;
