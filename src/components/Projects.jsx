import { motion } from "framer-motion";
import React from "react";
import { BsBrowserChrome } from "react-icons/bs";

function Projects() {
  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className="Projects w-[100%] min-h-[100%] relative  sm:px-9 px-4 sm:py-[25vh] pb-[30vh]"
    >
      <h1 className="sm:text-2xl text-4xl w-[8%] h-[10%] sm:w-[2%] vertical uppercase font-[700] text-black flex flex-col justify-between items-evenly   absolute left-0  ">
        <p className="text-4xl sm:2xl font-[800]"> Projects </p>
      </h1>
      <section className="grid m-0 w-[100%] h-[100%] sm:grid-cols-2 grid-cols-1 ">
        {[
          {
            name: "Money Verse",
            horizon: "moneyverse.PNG",
            verti1: "",
            video: "moneyverse.mp4",
            link: "https://whoisrahulmehta.github.io/moneyverse/",
          },
          {
            name: "TICTACTOE",
            horizon: "tictactoeh.PNG",
            verti1: "",
            video: "tictactoe.mp4",
            link: "https://whoisrahulmehta.github.io/livetictactoe/",
          },
          {
            name: "Textify",
            horizon: "textifyhome.PNG",
            verti1: "",
            video: "tictactoe.mp4",
            link: "https://whoisrahulmehta.github.io/textify/",
          },
          {
            name: "exchange360",
            horizon: "exchange360.PNG",
            verti1: "",
            video: "tictactoe.mp4",
            link: "https://whoisrahulmehta.github.io/exchange360/",
          },
          {
            name: "Lazy cal",
            horizon: "lazycal.PNG",
            verti1: "",
            video: "tictactoe.mp4",
            link: "https://whoisrahulmehta.github.io/lazycal/",
          },
          {
            name: "Tazaakhabar",
            horizon: "taazakhabar.PNG",
            verti1: "",
            video: "tazaakhabar.mp4",
            link: "https://whoisrahulmehta.github.io/tazaakhabar/",
          },
          {
            name: "taskbook",
            horizon: "taskbook.PNG",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://whoisrahulmehta.github.io/taskbook/",
          },
          {
            name: "worldweatherwebb",
            horizon: "worldweatherwebb.PNG",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://whoisrahulmehta.github.io/worldweatherwebb/#/",
          },
          {
            name: "super calculator",
            horizon: "supcal.PNG",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://whoisrahulmehta.github.io/supcalculator/",
          },
          {
            name: "Wordzwizz3.0",
            horizon: "wordzwizz.PNG",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://whoisrahulmehta.github.io/wordzwizz3.0/",
          },
          {
            name: "IBEX",
            horizon: "ibex.PNG",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://whoisrahulmehta.github.io/ibex/",
          },
          {
            name: "Bloggy",
            horizon: "bloggy.PNG",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://whoisrahulmehta.github.io/bloggy/#/",
          },
          {
            name: "Palais De L'amour",
            horizon: "palace.PNG",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://whoisrahulmehta.github.io/thepalace/#/",
          },
          {
            name: "New Coming Soon",
            horizon: "mypicture.jpg",
            verti1: "",
            video: "taskbook.mp4",
            link: "https://github.com/whoisrahulmehta",
          },
        ].map((proj, pI) => (
          <div
            key={pI}
            className=" project w-[100%] sm:h-[50vh] h-[60vh]  flex flex-col sm:justify-between sm:items-evenly relative"
          >
            <motion.div
              initial={{ y: "-100%", x: "-100%", opacity: 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
              className="w-full h-full absolute imagebg"
            >
              {/* <img src={`/rahulmehta/public/${proj.horizon}`} alt="img" /> */}
              <img
                src={`https://github.com/whoisrahulmehta/assetsforwebsites/raw/29959e1613289ad0dd2ca03bfd71d96be05cdb62/portassets/${proj.horizon}`}
                alt="img"
              />
              {/* https://github.com/whoisrahulmehta/assetsforwebsites/blob/29959e1613289ad0dd2ca03bfd71d96be05cdb62/portassets/exchange360.PNG */}
              {/* <img src={`/rahulmehta/public/${proj.horizon}`} alt="img" /> */}
            </motion.div>
            {/* <a href={proj.link} target="_black" className="hoverME absolute left-[-50%] bottom-[3%] translate-x-[-50%]  btn-primary px-1 h-[30px] w-[80px] py-0 font-[900] z-[999] uppercase">visit Now</a> */}
            <div className="hoverME sm:absolute ps-5 border border-white sm:ps-0  h-[fit-content]  w-[100px]  flex flex-col justify-start items-start sm:text-7xl text-2xl z-4 whitespace-nowrap uppercase text-white ">
              <div className="infobox flex  gap-3  items-center">
                <p className="font-[900] z-[999]">
                  {proj.name.split("").map((a, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: `.1${i}`,
                        ease: "linear",
                      }}
                      className="font-[900]"
                    >
                      {a}
                    </motion.span>
                  ))}
                </p>{" "}
                <a
                  className="text-white text-2xl"
                  href={proj.link}
                  target="_blank"
                >
                  <BsBrowserChrome />{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Projects;
/* 
1. [Money verse]()
2. [tictactoe]()
3. [Textify]()
4. [exchange360]()
5. [Lazy cal]()
6. [Tazaakhabar]()
7. [Wordzwizzard](https://whoisrahulmehta.github.io/wordzwizzard/)
8. [taskbook]()
9. [worldweatherwebb]()
10. [super calculator]()
11. [Wordzwizz3.0]()

### Vite Projects

1.  [IBEX]()
2.  [Palais De L'amour]()
3.  [Bloggy]()
*/
