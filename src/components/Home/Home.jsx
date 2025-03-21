import React from "react";
const Home = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-center">
      <div className="w-full h-[75%] flex justify-center items-center relative">
        <div className="home-text w-fit h-fit p-3 flex justify-center items-center gap-5 relative -mt-10">
          <h6 className="text-zinc-600 mt-15">Welcome to</h6>
          <h1 className="font-bold text-[14vw] leading-[11vw]">vikash</h1>
          <h6 className="text-zinc-600 mt-15">Portfolio</h6>
          <div className="smiley absolute top-2 w-20 h-20 rounded-full bg-[#7B919C] p-2">
            <img
              src="./smiley.png"
              alt="smiley"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="imgs absolute w-full h-full overflow-hidden">
          <img src="./hero3.jpg" alt="" className="absolute top-16 left-20 h-32 w-32 object-cover rounded-md" />
          <img src="./hero2.jpg" alt="" className="absolute top-16 right-2 -rotate-15 h-52 w-44 object-cover rounded-md" />
          <img src="./hero1.jpg" alt="" className="absolute bottom-16 left-2 -rotate-15 h-52 w-44 object-cover rounded-md" />
          <img src="./hero4.jpg" alt="" className="absolute bottom-16 right-20 h-32 w-32 object-cover rounded-md" />
        </div>
      </div>

      <div className="absolute w-full bottom-0 px-16 py-10 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <i className="ri-arrow-down-line inline-block animate-jump"></i>
          <h3 className="font-semibold text-zinc-600">Scroll to Explore</h3>
        </div>
        <div className="">
          <h3 className="text-2xl text-center font-semibold">
            Bringing brands to life through
          </h3>
          <h3 className="text-xl text-center">creative web solutions</h3>
        </div>
        <div className="">
          <h3 className="font-semibold text-zinc-600">Featured Projects</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
