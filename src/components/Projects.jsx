import { useGSAP } from "@gsap/react";
// import Shery from "sheryjs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Projects = () => {
  const parent = useRef();
  const center = useRef();
  const projectWindow = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to([center.current, projectWindow.current], {
      y: "-300%",
      scrollTrigger: {
        trigger: parent.current,
        pin: true,
        start: "top top",
        end: "top -300%",
        // markers: true,
        scrub: 1,
      },
    });
  });

  return (
    <div
      ref={parent}
      className="h-screen w-full relative bg-[#191D23] text-[#DEDCDC]"
    >
      <div className="h-full w-full overflow-hidden">
        <div ref={projectWindow} className="h-full w-full bg-green-900">
          <img
            src="/imgs/01project.jpg"
            alt=""
            className="h-screen w-full object-cover"
          />
          <img
            src="/imgs/02project.jpg"
            alt=""
            className="h-screen w-full object-cover"
          />
          <img
            src="/imgs/03project.jpg"
            alt=""
            className="h-screen w-full object-cover"
          />
          <img
            src="/imgs/04project.jpg"
            alt=""
            className="h-screen w-full object-cover"
          />
        </div>
      </div>

      <div className="absolute h-64 w-64 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-green-800 rounded-md overflow-hidden">
        <div ref={center} className="h-full w-full">
          <img
            src="/imgs/01project1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <img
            src="/imgs/02project1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <img
            src="/imgs/03project1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <img
            src="/imgs/04project.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
