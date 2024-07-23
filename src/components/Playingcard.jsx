import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Playingcard() {
  const [angle, setAngle] = useState("");

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const deltax = x - window.innerHeight /2;
      const deltay = y - window.innerHeight /2;

      const degress = Math.atan2(deltay, deltax) * (180/Math.PI);

      setAngle(degress - 180);
      // console.log(deltax, deltay , window.innerHeight/2);
    });
    // return () => window.removeEventListener("mousemove");
  });

  return (
    <div className="Playingcard sm:flex flex-row justify-center items-center hidden z-10" data-scroll data-scroll-section data-scroll-speed="-.5" >
      <div className="square">
        <div className="container">
          <motion.div initial={{y:"-100%" , }} whileInView={{ y:0}} transition={{duration:1, ease: "easeIn"}} className="circle">
            <div className="innercircle">
            <div className="arm" style={{ transform: `rotate(${angle}deg)` }}>
                <div className="eye"></div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{y:"-100%" }} whileInView={{ y:0}} transition={{duration:1, ease: "easeIn"}} className="circle">
            <div className="innercircle">
              <div className="arm" style={{transition:"all ease", transform: `rotate(${angle}deg)` }}>
                <div className="eye"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Playingcard;
