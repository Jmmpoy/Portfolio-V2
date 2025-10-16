import { motion } from "motion/react";

const Dates = ({ year }: { year: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(2px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { delay: 1.1, duration: 0.7, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        filter: "blur(2px)",
        transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
      }}
      className="Dates "
    >
      <span className="font-sohneBuch text-sm  uppercase w-full text-black ">{year}</span>
    </motion.div>
  );
};

export default Dates;
