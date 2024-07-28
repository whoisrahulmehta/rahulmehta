import React from "react";
import Herobanner from "../components/Herobanner";
import Social from "../components/Social";
import LocomotiveScroll from "locomotive-scroll";
import Getintouch from "../components/Getintouch";
import Technologies from "../components/Technologies";
import Introduction from "../components/Introduction";
import Playingcard from '../components/Playingcard' ;

function Home() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Introduction  setOrder={'row'}/>
      <Playingcard />
      <Herobanner />
      <Social />
      <Getintouch />
      <Technologies />
    </>
  );
}

export default Home;
