import { motion } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";

function Herobanner() {
  
  const navigate = useNavigate();
  return (
    <>
      <section className="banner w-[100%] h-[100vh] z-5 "  data-scroll data-scroll-section data-scroll-speed= "-.12">
        <div className=" z-10 cols w-[100%] h-[fit-content] py-[1%]">
          <motion.h1 
           initial={{x:"-100%" , opacity: 0}} whileInView={{opacity:1, x:0}} transition={{duration:1, ease: "easeIn"}}
           className="uppercase lg:text-7xl sm:text-5xl text-3xl font-[600] tracking-tight leading-sm italic ">

            Hello! i am rahul Mehta{" "}
          </motion.h1>
        </div>
        <div className=" z-10 cols w-[100%] h-[fit-content] py-[1%] sm:my-[0] my-[4%] " >
          <p className="font-[400] text-lg italic sm-px-[0] px-[4%] ">
            Here I share my Experiences, Techniques, Tips and more on my Journey
            as a Developer.
          </p>
        </div>
        <div className=" z-10 cols w-[100%] h-[fit-content]  py-[1%]">
          {[
            { name: "Blog", color: "light", click: "blog", p: "3" },
            { name: "Portfolio", color: "primary", click: "portfolio", p: "7" },
          ].map((b, i) => (
            <button
              key={i}
              className={` uppercase sm:mx-[0] mx-[3%]  px-[${b.p}%] py-[0.6%] btn-${b.color} `}
              onClick={() => navigate(`/${b.click}`)}
            >
              {b.name}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Herobanner;
