import React, { useEffect, useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Subscribe from "./Services";
import { ImTelegram } from "react-icons/im";
import { FaWolfPackBattalion } from "react-icons/fa";

function Navbar() {

  const [result, setResult] = React.useState("Sent");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e412f675-c579-4e4f-bfcf-b14799096740");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => setResult("Sent"), 6000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => setResult("Sent"), 6000); 
    }
  };

  const [expand, setExpand] = useState("off");
  const [showSub, setshowSub] = useState("off");

  const toggleExpand = () => {
    setExpand(expand === "off" ? "on" : "off");
  };
  const toggleShow = () => {
    setshowSub(showSub === "off" ? "on" : "off");
  };
  const options = [
    { id: 1, name: "Home", path: "/" },
    { id: 7, name: "About", path: "/about" },
    { id: 3, name: "Portfolio", path: "/Portfolio" },
    // { id: "4", name: "Subscribe", path: "/subscribe" },
    { id: 5, name: "Blog", path: "/blog" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  //   let scrollpos = window.scrollY;

  // useEffect(()=>{
  //   document.addEventListener("scroll" , ()=>{
  // let scrollposNew = window.screenY;
  // console.log(scrollpos , scrollposNew );
  //   })
  // },[]);

  return (
    <>
      <nav className="w-[100%] sm:h-[7vh] h-[10vh] fixed top-[0%]   flex flex-row justify-between items-center px-[3%] pe-[5%] font-[500]">
        <div className="brand md:w-[25%] sm:w-[20%] w-[70%] font-[700] flex flex-row justify-center items-center italic">
          <span className="w-[20%] h-[100%] imageLogo p-[1%] xl:p-[5%] sm:text-[4rem] text-[3rem]">
            <FaWolfPackBattalion size="3rem" />
          </span>
          <span className="whitespace-nowrap italic text-red-600 font-[700] font-sans ">
            Rahul Mehta
          </span>
        </div>
        <div className="navmenu sm:w-[60%] md:w-[50%]  hidden sm:flex flex-row justify-evenly items-center h-[100%]">
          {options.map((op, oI) => (
            <NavLink
              to={op.path}
              key={oI}
              className={`menuNavLink  text-md uppercase h-[100%] font-[600] flex flex-row justify-evenly items-center px-[1%] order-[${op.id}]`}
            >
              {op.name}
            </NavLink>
          ))}
          <button
            onClick={toggleShow}
            className={`menuNavLink hover:cursor-pointer  text-md uppercase h-[100%] font-[600] flex flex-row justify-evenly items-center px-[1%] hover:text-red-600 `}
          >
            <BsBellFill />
          </button>
        </div>
        <div className="toggleMenu sm:hidden  gap-[35%]  flex flex-row justify-center items-center h-[100%]">
        <button
            onClick={toggleShow}
            className={`menuNavLink hover:cursor-pointer text-md uppercase h-[100%] font-[600] flex flex-row justify-evenly items-center px-[1%] hover:text-red-600 `}
          >
            <BsBellFill />
          </button>
          <button className="menuNavLink  px-[12%]" onClick={toggleExpand} >
            <GiHamburgerMenu color={`${expand === "on" ? "red" : "black"}`} />
          </button>
        </div>
      </nav>
      {expand === "on" ? (
        <div className="expMenu z-[900] fixed top-[2%] sm:hidden flex flex-col justify-center items-center h-[100vh] w-[100%] py-[10vh]  backdrop-blur-sm ">
          <div className="navmenu w-[100%]  sm:hidden flex flex-col justify-evenly items-center h-[50%] py-[2%]">
            {options.map((op, oI) => (
              <NavLink
                to={op.path}
                key={oI}
                onClick={toggleExpand}
                className="menuNavLink  text-white font-[600] text-md uppercase h-[100%] w-[100%]  flex flex-row justify-evenly items-center px-[1%]"
              >
                {op.name}
              </NavLink>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {showSub === "on" ? (
        <section className="subscribe w-[100%] h-[100vh] fixed z-[999] sm:top-[7vh] top-[2%] ">
          <form className="sm:w-[30%] w-[90%] h-[80%] rounded-[19px] relative">
            <button
              onClick={toggleShow}
              className="btn-light px-[0.5vw] py-[0.2vw] rounded-[50px] absolute top-[2%] right-[5%] font-[700]"
            >
              x
            </button>
            <h1 className="w-[100%] h-[fit-content] text-xl text-center pt-[7%] font-[600] ">
              Let's take the First step
            </h1>
            <p className=" w-[100%] py-[1%] px-[2%] text-center">
              Fill out about your self here and you will keep recieving updates
              on new content over email / or join{" "}
              <b className="text-blue-400">
                {" "}
                <a href="t.me/rahulmehta070" target="_blank">
                  {" "}
                  telegram <ImTelegram />{" "}
                </a>
              </b>
              for connecting.
            </p>
            <label
              htmlFor="Fullname"
              className=" px-[2%] flex flex-col justify-center items-start w-[100%] h-[fit-content] py-[0.5%] bg-inherit "
            >
              <span>
                Fullname<i>*</i>
              </span>
              <input
                type="text"
                id="Fullname"
                name="Fullname"
                className="w-[100%] focus:border-0 focus:outline-0 py-[2%] focus:bg-slate-200"
              />
            </label>
            <label
              htmlFor="Email"
              className=" px-[2%] flex flex-col justify-center items-start w-[100%] h-[fit-content] py-[0.5%] bg-inherit "
            >
              <span>
                Email<i>*</i>
              </span>
              <input
                type="email"
                id="email"
                name="email"
                className="w-[100%] focus:border-0 focus:outline-0 py-[2%] focus:bg-slate-200"
              />
            </label>
            <label
              htmlFor="Position"
              className="  flex-wrap px-[2%] flex flex-row justify-between items-start w-[100%] h-[fit-content] py-[0.5%] bg-inherit "
            >
              <span className="w-[100%]">
                Position<i>*</i>
              </span>
              <input
                type="text"
                id="Position"
                name="Position"
                className="w-[48%] focus:border-0 focus:outline-0 py-[2%] focus:bg-slate-200"
              />
              <input
                type="text"
                id="company"
                name="company"
                className="w-[48%] focus:border-0 focus:outline-0 py-[2%] focus:bg-slate-200"
              />
            </label>
            <label
              htmlFor="massage"
              className=" px-[2%] flex flex-col justify-center items-start w-[100%] h-[fit-content] py-[0.5%] bg-inherit "
            >
              <span>Your massage </span>
              <textarea
                id="massage"
                name="massage"
                className="  resize-none w-[100%] cols-[4] focus:border-0 focus:outline-0 py-[1%] h-[20%] focus:bg-slate-200"
              ></textarea>
            </label>
            <label
              htmlFor="Email"
              className=" px-[2%] flex flex-row justify-center items-center w-[100%] h-[fit-content] py-[0.5%] bg-inherit "
            >
              <button
                className="btn-primary mt-[10%] w-[40%]"
                type="submit"
                onClick={toggleShow}
              >
                Submit{" "}
              </button>
            </label>
          </form>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
