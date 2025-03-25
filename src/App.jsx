import React, { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const lenis = useLenis();

  const homeRef = useRef();
  useGSAP(() => {
    if (homeRef.current)
      gsap.to(homeRef.current, {
        scale: 0.9,
        rotate: 12,
        scrollTrigger: {
          start: "55% 50%",
          end: "120% 50%",
          trigger: homeRef.current,
          // markers: true,
          scrub: 2,
        },
      });
  });

  return (
    <ReactLenis root>
      <div className=" relative ">
        <Navbar />
        <div className="overflow-hidden">
          <Home ref={homeRef} />
        </div>
        <About />
        <Projects />
        <Skills />

        {/* #191D23 */}
        {/* #57707A */}
        {/* #7B919C */}
        {/* #989DAA */}
        {/* #C5BAC4 */}
        {/* #DEDCDC */}
      </div>
    </ReactLenis>
  );
};

export default App;
