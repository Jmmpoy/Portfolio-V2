
import { motion } from "motion/react";
import { fade } from "@/helpers/transitions";

const ScrollForMore = () => {
  return (
    <motion.div
      variants={fade}
      initial="initial"
      animate="enter"
      exit="exit"
      className="scrollformore-container h-4 group overflow-hidden relative"
    >
      <motion.span className="transition duration-700 ease-in-out">
        <motion.p
          style={{ transformOrigin: "right center" }}
          className="text-left sm:text-center  origin-center font-sohneBuch uppercase text-xs transition-transform duration-500 ease-in-out will-change-transform group-hover:translate-y-[-20px]"
        >
          Projets ↓
        </motion.p>
        <motion.p
          style={{ transformOrigin: "left center" }}
          className="text-left sm:text-center origin-left rotate-[20deg] font-sohneBuch uppercase text-xs transition-transform duration-500 ease-in-out will-change-transform group-hover:rotate-[0deg] group-hover:translate-y-[-16px]"
        >
          Projets ↓
        </motion.p>
      </motion.span>
    </motion.div>
  );
};

export default ScrollForMore;
