import { easeIn, motion } from "framer-motion";
import React from "react";

function Introduction({setOrder}) {
  return (
    <>
      <section
        data-scroll
        data-scroll-section
        data-scroll-speed="-.7"
        className={`intro h-[70vh] w-full my-[1%] flex sm:flex-${setOrder} flex-col justify-center items-center md:px-[5%] px-1`}
      >
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="imageBox sm:w-[30%] sm:h-[60%]  "
        >
          {/* <img src="/rahulmehta/public/mypicture.jpg" alt="mypic" /> */}
          <img src="https://github.com/whoisrahulmehta/assetsforwebsites/raw/29959e1613289ad0dd2ca03bfd71d96be05cdb62/portassets/mypicture.jpg" alt="img" />
          {/* https://github.com/whoisrahulmehta/assetsforwebsites/raw/29959e1613289ad0dd2ca03bfd71d96be05cdb62/portassets/${}.jpg */}

        </motion.div>
        <motion.p
          initial={{ x: "100%", opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="dsc h-[30%] sm:w-[60%] sm:text-3xl text-lg sm:py-0 py-[10%] text-center sm:text-left text-red-900 font-[400] px-[1%]  tracking-tight "
        >
          I bring a dynamic skill set encompassing HTML, CSS, JavaScript, and
          modern frameworks like React. With a keen eye for design and a
          commitment to cutting-edge technologies, I commit on transforming
          concepts into responsive, visually stunning web applications that push
          the boundaries of digital interaction.
        </motion.p>
      </section>
    </>
  );
}

export default Introduction;
