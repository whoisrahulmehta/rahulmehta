import React from "react";
import Introduction from "../components/Introduction";
import Tools from "../components/Tools";
import Awards from "../components/Awards";
import { useNavigate } from "react-router-dom";
import Native from "../components/Native";
import Blog from "./Blog";
import LocomotiveScroll from "locomotive-scroll";

function About() {
  const locomotiveScroll = new LocomotiveScroll();

  const navigate = useNavigate();

  return (
    <>
      <section
        data-scroll
        className="About w-full h-full  flex flex-col justify-evenly items-center  mt-5 py-5"
      >
        <div className=" bg-white flex sm:flex-row flex-col justify-center items-center gap-[4%] greet w-[100%] h-[95vh] ">
          <p className="img md:w-[100%] w-full  sm:h-[100%] h-[100%]  flex flex-row justify-center items-center">
            <img
              className="w-[100%] h-[100%] sm:object-contain object-cover origin-center "
              // src="/rahulmehta/public/rahulme.jpg"
              src={`https://github.com/whoisrahulmehta/assetsforwebsites/raw/29959e1613289ad0dd2ca03bfd71d96be05cdb62/portassets/rahulme.jpg`}
              alt="img"
            />
          </p>
        </div>
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-.2"
          className="w-full itro px-6 text-left text-xl text-black flex flex-col items-center justify-center py-7"
        >
          <h1 className="text-5xl uppercase text-center w-full text-black italic font-[700] flex flex-row items-center justify-center ">
            About Me
          </h1>
          I am Rahul Mehta, a passionate Front-End Developer with a diverse and
          enriching background. My journey began with a solid foundation in web
          development during a one-year industry role at aSquare Logics, where I
          collaborated with a team to create user-friendly, interactive
          websites. This experience honed my skills in HTML, CSS, JavaScript,
          and optimized UI for web applications. <br />
          Following this, I dedicated three years to preparing for the UPSC
          Civil Services examination, a period that significantly enhanced my
          personal growth, values, and problem-solving abilities. Leveraging my
          prior knowledge, I advanced my expertise in front-end technologies,
          mastering modern tools like SASS, Tailwind, Bootstrap, and React.js.
          Throughout this journey, I have built and deployed numerous projects
          using Create React App and Vite, showcasing my proficiency in
          contemporary front-end development.
        </div>
        <Tools />
        <div className="w-full px-6 text-left text-xl text-black flex flex-col items-center justify-center py-7">
          <h1 className="text-5xl uppercase text-center w-full text-black italic font-[700] flex flex-row items-center justify-center ">
            Professional Experience
          </h1>
          <h1 className=" font-[600] text-2xl w-full textleft ps-1 py-2">
            Web Developer | aSquare Logics, Kurukshetra, Haryana{" "}
            <span className="text-sm">June 2020 - March 2021</span>
          </h1>
          <p className="text-left">
            Collaborated with a five-person team to develop user-friendly
            websites using JavaScript, CSS, and HTML.
            <br />
            Built scalable and attractive web applications with HTML5, CSS, and
            JavaScript.
            <br />
            Optimized UI for enhanced user experience.
          </p>
          <h1 className="text-5xl uppercase text-center w-full text-black italic font-[700] flex flex-row items-center justify-center ">
            Educational Background :
          </h1>
          <h1 className=" font-[600] text-2xl w-full textleft ps-1 py-2">
            Master of Science in Mathematics | Himachal Pradesh University,
            Shimla, Himachal Pradesh
            <span className="text-sm"> August 2019 - January 2022</span>
          </h1>
          <p className="text-left">
            Focused on Linear Algebra, Advanced Algebra, Solid Mechanics, and
            Advanced Discrete Mathematics.
            <br />
            Completed advanced research projects and rigorous coursework.
          </p>
          <h1 className=" font-[600] text-2xl w-full textleft ps-1 py-2">
            Bachelor of Science in Mathematics| Himachal Pradesh University,
            Shimla, Himachal Pradesh
            <span className="text-sm"> May 2016 - June 2019</span>
          </h1>
          <p className="text-left">
            Studied Transportation and Game Theory, Number Theory, Algebra,
            Linear Algebra, and Statistics.
            <br />
            Complemented mathematics studies with courses in Chemistry and
            Physics.
          </p>
          <h1 className=" font-[600] text-2xl w-full textleft ps-1 py-2">
            Diploma in Information Technology Enabled Services| Govt Boys Senior
            Secondary School, Rohru
            <span className="text-sm"> April 2014 - April 2016</span>
          </h1>
          <p className="text-left">
            Pursued ITES under the Skill India initiative. <br />
            Graduated with a diploma certified by NSDC and NASSCOM, achieving
            92%.
          </p>
          <br /> <br />
          <h1 className=" font-[600] text-2xl w-full textleft ps-1 py-2">
            My journey has been marked by a commitment to continuous learning
            and personal growth. I am now eager to contribute my skills and
            experience to a dynamic team as a Front-End Developer, creating
            impactful and innovative web solutions.
          </h1>
        </div>

        <button
          className="btn-primary px-3 mx-auto"
          onClick={() => navigate("/contact")}
        >
          Want to Contact me ?
        </button>
        <br />
        <br />
        <button
          className="btn-primary px-3 mx-auto"
          onClick={() => navigate("/portfolio")}
        >
          See My Projects ?
        </button>
        {/* <Native /> */}
        <Introduction />
        <Blog />
        <Awards />
      </section>
    </>
  );
}

export default About;
