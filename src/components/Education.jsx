import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Education = () => {
  const circle = useRef();
  const parent = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(circle.current, {
      rotate: -225,
      ease: "linear",
      scrollTrigger: {
        trigger: parent.current,
        start: "top 0%",
        end: "top -250%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
  });
  return (
    <div
      ref={parent}
      className="h-screen w-full bg-[#191D23] text-[#DEDCDC] flex items-center justify-start overflow-hidden"
    >
      <div
        ref={circle}
        className="h-[110vh] w-[110vh] rotate-[45deg] rounded-full border-2 -ml-[25%] relative"
      >
        <div className="absolute px-10 w-[120%] left-[102%] top-1/2 -translate-y-1/2 border-2 border-[#191D23]">
          <h1 className="text-4xl font-bold custom-font1">10th Education</h1>
          <h3 className="text-2xl custom-font3">
            Sanskar S S SEC SCH, Shahpura, Sikar, Rajasthan
          </h3>
          <h4 className="text-2xl custom-font3 font-semibold">2019</h4>
        </div>

        <div className="absolute px-10 w-[120%] rotate-[90deg] origin-top-center top-[153%] left-1/2 -translate-x-1/2 border-2 border-[#191D23]">
          <h1 className="text-4xl font-bold custom-font1">12th Education</h1>
          <h3 className="text-2xl custom-font3">
            Bal Bharati S SEC SCH, Sikar, Rajasthan
          </h3>
          <h4 className="text-2xl custom-font3 font-semibold">2021</h4>
        </div>

        <div className="absolute px-10 w-[120%] rotate-[180deg] right-[102%] top-1/2 -translate-y-1/2 border-2 border-[#191D23]">
          <h1 className="text-4xl font-bold custom-font1">B.Tech</h1>
          <h3 className="text-2xl custom-font3">
            Poornima College Of Engineering, Jaipur, Rajasthan
          </h3>
          <h4 className="text-2xl custom-font3 font-semibold">2022 - 2026</h4>
        </div>

        <span className="h-4 w-4 bg-white border-1 border-black left-full top-1/2 -translate-x-1/2 -translate-y-1/2 absolute rounded-full"></span>
        <span className="h-4 w-4 bg-white border-1 border-black top-full left-1/2 -translate-x-1/2 -translate-y-1/2 absolute rounded-full"></span>
        <span className="h-4 w-4 bg-white border-1 border-black right-full top-1/2 translate-x-1/2 -translate-y-1/2 absolute rounded-full"></span>
      </div>
    </div>
  );
};

export default Education;
