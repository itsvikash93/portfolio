import React, { forwardRef, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Home = forwardRef((props, ref) => {
  const xTo = useRef();
  const yTo = useRef();
  const eyeImg = useRef();
  const eyeImgDiv = useRef();
  const eyeContainer = useRef();
  const hoverImg1 = useRef();
  const hoverImg2 = useRef();
  const hoverImg3 = useRef();
  const hoverImg4 = useRef();

  const { context, contextSafe } = useGSAP(
    () => {
      (xTo.current = gsap.quickTo(eyeImgDiv.current, "x", {
        duration: 0.8,
        ease: "power3",
      })),
        (yTo.current = gsap.quickTo(eyeImgDiv.current, "y", {
          duration: 0.8,
          ease: "power3",
        }));
    },
    { scope: eyeContainer }
  );

  const moveShape = contextSafe((e) => {
    eyeImg.current.src =
      e.movementX >= 0 ? "./imgs/eyes1.png" : "./imgs/eyes.png";
    xTo.current(e.clientX);
    yTo.current(e.clientY);
  });

  const handleMouseEnter = () => {
    gsap.to(eyeImgDiv.current, {
      opacity: 1,
      scale: 1,
      delay: 0.2,
      duration: 0.3,
    });

    gsap.to(hoverImg1.current, {
      display: "block",
      scale: 1,
    });

    gsap.to(hoverImg2.current, {
      display: "block",
      right: -10,
      rotate: -10,
    });

    gsap.to(hoverImg3.current, {
      display: "block",
      left: -10,
      rotate: -10,
    });

    gsap.to(hoverImg4.current, {
      display: "block",
      scale: 1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(eyeImgDiv.current, {
      opacity: 0,
      scale: 0.5,
      duration: 0.5,
    });
    gsap.to(hoverImg1.current, {
      display: "none",
      scale: 0,
    });
    gsap.to(hoverImg2.current, {
      display: "none",
      right: "-15%",
      rotate: 45,
    });
    gsap.to(hoverImg3.current, {
      display: "none",
      left: "-15%",
      rotate: 45,
    });
    gsap.to(hoverImg4.current, {
      display: "none",
      scale: 0,
    });
  };

  return (
    <div
      ref={ref}
      className="w-full h-screen bg-[#DEDCDC] relative origin-bottom-left flex items-center justify-center"
    >
      <div className="w-full h-[75%] flex justify-center items-center relative">
        <div className="home-text w-fit h-fit p-3 overflow-hidden flex justify-center items-center gap-5 relative z-[9] -mt-10">
          <h6 className="text-zinc-600 mt-8 custom-font3">Welcome to</h6>
          <div className="w-fit h-full relative overflow-hidden">
            <h1 className="font-bold custom-font1 text-[14vw] leading-[12.5vw] cursor-pointer">
              vikash
            </h1>

            <div
              ref={eyeImgDiv}
              className={`eye-div opacity-0 scale-[0.5] fixed z-[15] top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-26 h-26 rounded-full bg-[#7B919C] p-2`}
            >
              <img
                ref={eyeImg}
                src="./imgs/eyes.png"
                alt="eyes"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              ref={eyeContainer}
              onMouseEnter={handleMouseEnter}
              onMouseMove={(e) => moveShape(e)}
              onMouseLeave={handleMouseLeave}
              className="absolute bg-transparent cursor-pointer top-0 left-0 z-[25] w-full h-full"
            ></div>
          </div>
          <h6 className="text-zinc-600 mt-8 custom-font3">Portfolio</h6>
        </div>

        <div className="imgs absolute w-full h-full overflow-hidden z-[7]">
          <img
            ref={hoverImg1}
            src="./imgs/hero3.jpg"
            alt=""
            className="absolute hidden scale-0 top-16 left-20 h-32 w-32 object-cover rounded-md"
          />
          <img
            ref={hoverImg2}
            src="./imgs/hero2.jpg"
            alt=""
            className="absolute hidden top-16 -right-[15%] origin-bottom-right rotate-[35deg] h-52 w-44 object-cover rounded-md"
          />
          <img
            ref={hoverImg3}
            src="./imgs/hero1.jpg"
            alt=""
            className="absolute hidden bottom-16 origin-top-left -left-[15%] -rotate-[35deg] h-52 w-44 object-cover rounded-md"
          />
          <img
            ref={hoverImg4}
            src="./imgs/hero4.jpg"
            alt=""
            className="absolute hidden scale-0 bottom-16 right-20 h-32 w-32 object-cover rounded-md"
          />
        </div>
      </div>

      <div className="absolute w-full bottom-0 px-16 py-10 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <i className="ri-arrow-down-line inline-block animate-jump"></i>
          <h3 className="text-zinc-700 custom-font3">Scroll to Explore</h3>
        </div>
        <div className="">
          <h3 className="text-2xl text-center custom-font3">
            Designing interactive journeys through
          </h3>
          <h3 className="text-2xl text-center custom-font4">
            Modern Web Experiences
          </h3>
        </div>
        <div className="">
          <h3 className="text-zinc-700 custom-font3">Featured Projects</h3>
        </div>
      </div>
    </div>
  );
});

export default Home;
