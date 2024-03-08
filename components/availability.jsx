import React from "react";
import { motion } from "framer-motion";

const Availability = () => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 1,
          ease: "easeInOut",
        },
      }}
      className="text-left sm:text-center  font-sohneBuch uppercase text-xs"
    >
      Available for work
    </motion.p>
  );
};

export default Availability;
