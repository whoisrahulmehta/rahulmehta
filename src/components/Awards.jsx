import React from "react";
import LocomotiveScroll from "locomotive-scroll";

function Awards() {
const locomotiveScroll = new LocomotiveScroll;

  return (
    <section 
    data-scroll
    data-scroll-section
    data-scroll-speed = ".3"

    className="awards w-[100%] h-[fit-content] flex sm:flex-row flex-col sm:gap-2 gap-11 justify-evenly items-center  sm:py-10 py-[10rem]">
      {[
        {
          name: "Certificate of Merit",
          details:
            "Secured the 115th position in the Himachal Pradesh school board examination for 10th standard",
          by: "Himachal Pradesh Board of School Education, Dharamshala, Himachal Pradesh ",
          img: "10thcert.jpg",
        },
        {
          name: "Certificate of Merit",
          details:
            "Attained the 89th position in the Himachal Pradesh Board examination for 10+2",
          by: "Himachal Pradesh Board of School Education, Dharamshala, Himachal Pradesh ",
          img: "12thcert.jpg",
        },
        {
          name: "Certificate of Merit",
          details:
            "Attained the 2nd position in the End semester examination.",
          by: "Himachal Pradesh University, Shimla, Himachal Pradesh ",
          img: "clgcert.jpg",
        },
      ].map((a, i) => (
        <div key={i} className="images cert sm:w-[30%] w-full sm:h-[30vh] sm:px-1 px-5 h-[55vh]  relative flex flex-row justify-center items-center ">
          <img className="w-[100%] h-[100%] object-cover " src={a.img} alt={a.name} />
          <p className="Des w-[100%] h-[50%] px-[4%] absolute bottom-[2%]  flex  flex-col justify-end items-center ">
            <span className=" text-xs text-center w-full ">{a.name}</span>
            <span className=" text-xs text-center w-full ">For: {a.details}</span>
            <span className=" text-xs text-center w-full ">Awarded By :{a.by}</span>
          </p>
        </div>
      ))}
    </section>
  );
}

export default Awards;
