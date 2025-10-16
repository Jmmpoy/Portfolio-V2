import { motion } from "motion/react";

const Tags = ({ tags }: { tags: string[] | string }) => {
  if (!tags || tags.length === 0) return null;

  return (
    <motion.p
      initial={{ opacity: 0, filter: "blur(2px)" }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: { delay: 1.3, duration: 0.7, ease: "easeInOut" },
      }}
      exit={{
        opacity: 0,
        filter: "blur(2px)",
        transition: { delay: 0.8, duration: 0.7, ease: "easeInOut" },
      }}
      className=" Tags font-sohneBuch text-sm mb-4 sm:mb-0 "
    >
      {Array.isArray(tags) ? tags.join(" / ") : tags}
    </motion.p>
  );
};

export default Tags;
