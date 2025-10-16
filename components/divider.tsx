
import { motion } from "motion/react";

export const Divider = () => {
  return (
    <motion.hr
      initial={{ width: 0 }}
      animate={{
        width: "100%",
        transition: { duration: 1.3, ease: "easeInOut" },
      }}
      exit={{
        width: 0,
        transition: { duration: 1.3, ease: "easeInOut" },
      }}
      className="border-b-1 border-dashed border-black opacity-20 my-2"
    />
  );
};

export default Divider;
