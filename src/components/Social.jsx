import React from "react";
import { BsLinkedin, BsTelegram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Social() {
  return (
    <section
      className="social flex sm:flex-row flex-col justify-center items-center z-2 relative"
      data-scroll
      data-scroll-section
      data-scroll-speed=".3"
    >
        <h1 className="sm:text-2xl text-4xl w-[10%] sm:w-[4%] vertical uppercase font-[600] text-black  absolute right-0  ">
          My Social Profiles
        </h1>
      <div className="boxes flex sm:flex-col flex-row justify-start items-center sm:w-[100%] w-[100%] sm:h-[80%] h-[100vh]">
        <div className="box sm:flex sm:flex-row justify-center items-center w-[100%] sm:h-[40%] h-[100%] ">
          {[
            {
              name: "Github",
              link: "https://github.com/whoisrahulmehta",
              icon: <FaGithub size="7rem" />,
              color: "text-black"
            },
            {
              name: "FaceBook",
              link: "https://www.facebook.com/mehta.rahul.rm007?mibextid=JRoKGi",
              icon: <FaFacebookF size="7rem" />,
              color: "text-blue-400"
            },
            {
              name: "Instagram",
              link: "https://www.instagram.com/whoisrahulmehta?igsh=cTJvZWY1MTE5N2li",
              icon: <FaInstagram size="7rem" />,
              color:"text-pink-600"
            },
            {
              name: "X",
              link: "https://x.com/whoisrahulmehta?t=elIjxyqHdnPX7zgdVhgixg&s=08",
              icon: <FaTwitter size="7rem" />,
              color: "text-blue-500"
            },
          ].map((ic, i) => (
            <div
            key={i}
            className={`socialIcon h-[12rem] w-[12rem] hover:cursor-pointer rounded-full hover:${ic.color} `}
          >
            <a href={ic.link} target="_blank" className={`w-[100%] h-[100%]  `}>
              {ic.icon}
              <span className=" bottom-[-2%] text-lg font-[600]  uppercase left-[50%] translate-x-[-50%] ">
                {ic.name}
              </span>
            </a>
          </div>
          ))}
        </div>
        <div className="box sm:flex sm:flex-row justify-center items-center w-[100%] sm:h-[40%] h-[100%] ">
          {[
            {
              name: "Youtube",
              link: "https://m.youtube.com/@himalayan_hulk?fbclid=PAZXh0bgNhZW0CMTEAAabBqjeJT1BA9n3Po-FXP8yDBnn0lxm2yCUy8A5hxEhU7xKH8WUEOKsXKDY_aem_18t3NrjujmftslSnAxfNKg",
              icon: <BsYoutube size="7rem" />,
              color: "text-red-400"
            },
            { name: "LinkedIn", link: "", icon: <BsLinkedin size="7rem" />, color: "text-blue-500" },
            {
              name: "Whatsapp",
              link: "https://wa.me/+917278866777",
              icon: <BsWhatsapp size="7rem" />,
              color: "text-green-500"
            },
            {
              name: "Telegram",
              link: "t.me/rahulmehta070",
              icon: <BsTelegram size="7rem" />,
              color: "text-blue-500"
            },
          ].map((ic, i) => (
            <div
              key={i}
              className={`socialIcon h-[12rem] w-[12rem] hover:cursor-pointer rounded-full hover:${ic.color} `}
            >
              <a href={ic.link} target="_blank" className={`w-[100%] h-[100%]  `}>
                {ic.icon}
                <span className=" top-[-2%] text-lg font-[600]  uppercase left-[50%] translate-x-[-50%] ">
                  {ic.name}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Social;
