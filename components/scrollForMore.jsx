import React from "react";
import {motion} from "framer-motion"

const ScrollForMore = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1,
          ease: [0.7, 0, 0.3, 1], 
        },
      }}
      exit={{
        opacity: 0,
        transition: { 
          duration: .5,
          ease: [0.7, 0, 0.3, 1] 
        },
      }}
      className="scrollformore-container h-4 group overflow-hidden relative"
    >
      <motion.span className="transition duration-700 ease-in-out">
        <p
          style={{ transformOrigin: "right center" }}
          className="text-left sm:text-center  origin-center font-sohneBuch uppercase text-xs transition-transform duration-500 ease-in-out will-change-transform group-hover:translate-y-[-20px]"
        >
          Scroll for more ↓
        </p>
        <p
          style={{ transformOrigin: "left center" }}
          className="text-left sm:text-center origin-left rotate-[20deg] font-sohneBuch uppercase text-xs transition-transform duration-500 ease-in-out will-change-transform group-hover:rotate-[0deg] group-hover:translate-y-[-16px]"
        >
          Scroll for more ↓
        </p>
      </motion.span>
    </motion.div>
  );
};

export default ScrollForMore;
