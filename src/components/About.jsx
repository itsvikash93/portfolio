import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#191D23] text-[#DEDCDC] ">
      <div className="h-screen w-full flex">
        <div className="left-div w-[60%] h-full text-[7vw] leading-[6.5vw] tracking-tight font-semibold custom-font1 px-10 py-10">
          <h1>I'm</h1>
          <h1>vikash-</h1>
          <h1>
            a <span className="custom-font4"> creative</span>
          </h1>
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
