import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();
const handleClick =(prop)=>{
  navigate(`${prop}`) ;
  console.log("btn clicked " );
}

  return (
    <section
      data-scroll
    data-scroll-section
    data-scroll-speed = ".3"
    className="services w-[100%] h-[100%] relative sm:px-9 px-2 py-10 ">
      <h1 className="sm:text-2xl text-4xl w-[8%] sm:w-[2%] vertical uppercase font-[700] text-black  absolute left-0  ">
        Services
      </h1>

      <section className="grid w-[100%] h-[100%] sm:grid-cols-2 grid-cols-1 py-[5rem]">
        {[
          {
            name: "UI/UX design",
            desc: "User Interfase development for websites and applications, design systems engineering",
            button:"/portfolio",
            btnname: "Check Examples"
          },
          {
            name: "Website Development",
            desc: "Creation of landing pages & websites for small and medium - sized businesses.",
            button: "/",
            btnname: "Contact Me"
          },
          {
            name: "Frontend Dev.",
            desc: "Layout and development of functionality on HTML CSS and JavaScript.",
            button: "/portfolio",
            btnname: "Check Examples"
          },
          {
            name: "UI/UX auditing",
            desc: "Product interface analysis and recommendations on UI/UX improvements.",
            button: "/contact",
            btnname: "Get Consultation"
          },
        ].map((ser, sI)=>(
          <div key={sI} className=" service  w-[100%] sm:h-[50vh] h-[30vh] p-[7%] flex flex-col justify-between items-evenly relative   ">
            <p className="sm:text-[2rem] text-[1.2rem] text-center sm:text-left ">{ser.desc}</p>
          <p className="hoverME sm:absolute ps-5 border border-white sm:ps-0  h-[fit-content]  w-[100px]  sm:text-7xl text-2xl z-4 whitespace-nowrap uppercase text-red-600 ">
          {
            ser.name.split("").map((a,i)=>(
              <span className="font-[900] " key={i} >{a}</span>
            ))
          } 
          </p>
          <button className="btn-primary mx-auto w-[30%] rounded-md" onClick={()=>handleClick(ser.button) }>{ser.btnname}</button>
        </div>
        ))
        }
      </section>
    </section>
  );
}

export default Services;
