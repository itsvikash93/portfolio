import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const btnRef = useRef();
  const logoRef = useRef();
  const handleMenuClick = () => {
    setIsOpen(() => !isOpen);

    if (!isOpen) {
      gsap.to(btnRef.current, {
        opacity: 0,
        duration: 0.2,
      });
      gsap.to(logoRef.current, {
        y: "13%",
        // delay: 0.2,
        duration: 0.6,
      });
    }
    if (isOpen) {
      gsap.to(btnRef.current, {
        opacity: 1,
        delay: 1,
        duration: 0.3,
      });
      gsap.to(logoRef.current, {
        y: "-100%",
        delay: 0.6,
        duration: 0.6,
      });
    }
  };
  return (
    <div className="w-full fixed z-[999]">
      <div className="navbar absolute h-22 z-[899] w-full py-3 px-16 pt-10 flex items-center justify-between">
        <div className="logo h-8 overflow-hidden">
          <div ref={logoRef} className="h-full -translate-y-full">
            <img
              src="./imgs/logo_vikash_black.png"
              alt="logo"
              className="h-7"
            />
            <img
              src="./imgs/logo_vikash_white.png"
              alt="logo"
              className="h-8"
            />
          </div>
        </div>

        <div
          onClick={handleMenuClick}
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 ${
            isOpen && "bg-[#DEDCDC]"
          } w-14 h-14 p-1 rounded-full flex flex-col items-center justify-center cursor-pointer overflow-hidden`}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src="./imgs/close-window.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <img
                  src="./imgs/main-menu.png"
                  alt=""
                  className=" w-full h-full object-cover"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          <motion.div
            ref={btnRef}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="border-black rounded-full border-2 overflow-hidden"
          >
            <motion.button
              transition={{ duration: 0.2, ease: "easeOut" }}
              whileHover={{
                paddingRight: "42px",
              }}
              className="relative flex items-center bg-[#C8C8C8] px-[20px] hover:bg-[#000] hover:text-[#fff] cursor-pointer group transition duration-700 "
            >
              <h3 className="custom-font3 my-2">Let's Talk</h3>
              {hover && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute right-1 flex items-center justify-center w-8 h-8 rounded-full bg-[#7B919C]"
                >
                  <i className="ri-arrow-right-line text-white"></i>
                </motion.span>
              )}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="nav-details absolute z-[99] w-full h-screen top-0 bg-[#191D23] flex overflow-hidden"
          >
            <div className="left relative h-full w-1/2 text-7xl font-bold uppercase flex flex-col gap-2 items-center justify-center text-[#7B919C] custom-font1">
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Home</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">About</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Skills</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Projects</h1>
              <h1 className="hover:text-[#DEDCDC] cursor-pointer">Contacts</h1>
              <div className="absolute w-full h-10 bottom-10 font-normal text-base normal-case flex justify-center items-center gap-16 custom-font3">
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
                src="./imgs/hero1.jpg"
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
