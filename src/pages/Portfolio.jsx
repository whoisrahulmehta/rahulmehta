import React from 'react'
import Portlandpage from '../components/Portlandpage';
import Tools from '../components/Tools' ;
import Services from '../components/Services';
import Projects from '../components/Projects';
import Playingcard from '../components/Playingcard';
import LocomotiveScroll from 'locomotive-scroll';
import Social from '../components/Social';

function Portfolio() {
  const locomotiveScroll = new LocomotiveScroll ;
  return (
    <>
     <Portlandpage /> 
     <Tools />
     <Services />
     <Playingcard />
     <Projects />
     {/* <Tools /> */}
     {/* <Social /> */}
    </>
  )
}

export default Portfolio
