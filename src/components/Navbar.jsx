import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full absolute z-[999]">
      <div className="navbar absolute h-22 z-[899] w-full py-3 px-16 pt-10 flex items-center justify-between">
        <img src="./logo_vikash_white.png" alt="logo" className="h-8" />

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#DEDCDC] w-12 h-12 rounded-full flex items-center justify-center"
        >
          <i className="ri-menu-line text-2xl cursor-pointer"></i>
        </div>

        <button
          className={`${
            isOpen ? "hidden" : "flex"
          } items-center bg-[#C8C8C8] border-2 border-black px-5 hover:px-1 py-1 rounded-full cursor-pointer group hover:bg-[#000] hover:text-white transition duration-300`}
        >
          <h3 className="text group-hover:ml-5 group-hover:mr-2 my-1">
            Let's Talk
          </h3>
          <span className="relative p-4 rounded-full bg-[#7B919C] hidden group-hover:block transition-all duration-300">
            <i className="ri-arrow-right-line absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white"></i>
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            className="nav-details absolute z-[99] w-full h-screen top-0 bg-[#191D23] flex overflow-hidden"
          >
            <div className="left relative h-full w-1/2 text-7xl font-bold uppercase flex flex-col gap-2 items-center justify-center text-[#7B919C]">
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Home</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">About</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Skills</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Projects</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Contacts</h1>
              <div className="absolute w-full h-10 bottom-10 font-normal text-base normal-case flex justify-center items-center gap-16">
                <a href="#" className="hover:text-[#DEDCDC]">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-[#DEDCDC]">
                  GitHub
                </a>
                <a href="#" className="hover:text-[#DEDCDC]">
                  Email
                </a>
              </div>
            </div>
            <div className="right w-1/2">
              <img
                src="./hero1.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
