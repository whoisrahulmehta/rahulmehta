import React from "react";

function Portlandpage() {
  return (
    <section
    data-scroll
    data-scroll-section
    data-scroll-speed = ".3"    
    className="Portfolio flex flex-col justify-center sm:justify-start items-center w-[100%] pt-[14%] h-[100vh]">
      <p className="italic ">whoisrahulmehta</p>
      <h1 className="italic text-black text-7xl sm:text-[7rem] text-center w-[100%] h-[fit-content] leading-none  py-[0%] my-[0%] font-[600]">
        Quality Design & Web
      </h1>
      <h1 className="italic text-black text-7xl sm:text-[7rem] text-center w-[100%] h-[fit-content] leading-none  py-[0%] my-[0%] font-[600]">
        Development Synergy
      </h1>
      <p className="sm:text-md font-[500] text-lg px-[4%] sm:px-0  text-justify pt-[2%]">
        I create Intutive design for websites and apps, helping businesses

      </p>
      <p className="text-md px-[4%] sm:px-0 text-justify ">
      enhance user experience, boost key metrics and achieve digital leadership
      </p>
    </section>
  );
}

export default Portlandpage;
