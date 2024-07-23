import React from "react";
import { BsGithub } from "react-icons/bs";
import { DiCss3Full, DiHtml5, DiJqueryLogo, DiSass } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { SiVite } from "react-icons/si";
import { FiFramer } from "react-icons/fi";
import { RiBootstrapLine } from "react-icons/ri";

function Tools() {

  const icons = [
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
  ];

  return (
    <section 

    className="Tools overflow-x-auto flex flex-row justify-start items-center w-[100%] h-[30vh]   ">
      <p className="verTex  flex flex-row justify-center z-[11] items-center  left-0 top-[50%] translate-y-[-50%] w-[5%] font-[700] text-xl h-[100%] bg-red-500 tracking-widest ">
        TOOLS
      </p>

      <div className="Logos sm:min-w-[100%] min-w-[1100px] h-[100%] flex flex-row sm:justify-evenly justify-start   items-center ">
        {icons.map((ic, iI) => (
          <div
            key={iI}
            className="logo  sm:min-w-[9%]  w-[100px] h-[0%] flex flex-col justify-center items-center uppercase"
          >
            <p className="scale-[0.6] xs:scale-[0.6] sm:scale-[0.7] xl:scale-[0.9] hover:text-red-500 cursor-grabbing">{ic.icon}</p>
            <span>{ic.name}</span>
          </div>
        ))}
      </div>
      <div className="Logos sm:min-w-[100%] min-w-[1100px] h-[100%] flex flex-row sm:justify-evenly justify-start   items-center ">
        {icons.map((ic, iI) => (
          <div
            key={iI}
            className="logo  sm:min-w-[9%]  w-[100px] h-[0%] flex flex-col justify-center items-center uppercase"
          >
            <p className="scale-[0.6] xs:scale-[0.6] sm:scale-[0.7] xl:scale-[0.9] hover:text-red-500 cursor-grabbing">{ic.icon}</p>
            <span>{ic.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tools;
