import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const About = () => {
  const h1Ref = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(h1Ref.current, {
      width: 0,
      right: "50%",
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 65%",
        end: "top 60%",
        // markers: true,
        scrub: 1.2,
      },
    });
  });
  return (
    <div className="min-h-screen w-full bg-[#191D23] text-[#DEDCDC] ">
      <div className="h-screen w-full flex">
        <div className="left-div w-[60%] h-full text-[7vw] leading-[6.5vw] tracking-tight font-semibold custom-font1 px-10 py-10">
          <h1>I'm</h1>
          <h1>vikash-</h1>
          <div className="flex w-[57%] items-center gap-4 relative ">
            <h1>a</h1>
            <div ref={h1Ref} className="w-fit -top-2 right-0 absolute bg-[#57707A] overflow-hidden">
              <h1 className="px-2 py-2 custom-font4">creative</h1>
            </div>
          </div>
          <h1>web developer</h1>
        </div>
        <div className="right-div w-[40%] h-full flex flex-col justify-end items-center">
          <img
            src="/imgs/about.jpg"
            alt="about.jpg"
            className="h-52 w-[60%] object-cover object-[60%_25%] rounded-md "
          />
          <h3 className="w-[60%] my-5 custom-font3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </h3>
          <div className="w-[60%]">
            <button className="border-b-2 custom-font3">
              Hire Me <i className="ri-arrow-right-line " />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[50vh] w-full"></div>
    </div>
  );
};

export default About;
