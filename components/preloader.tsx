
import { motion, AnimatePresence, Variants } from "motion/react";
import { useEffect, useState } from "react";
import SplitTextFramer from "@/components/splitTextFramer";

const containerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 1.5,
    },
  },
};

const columnVariants: Variants = {
  initial: { scaleX: 1 },
  animate: {
    scaleX: 0,
    transition: {
      duration: 0.8,
      ease: [0.7, 0, 0.3, 1],
    },
  },
};

const logoVariants: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

export default function Preloader() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <motion.div variants={containerVariants} className="absolute inset-0 grid grid-cols-12">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            variants={columnVariants}
            className="h-full bg-[#EEEBE4]"
            style={{ originX: 0 }}
          />
        ))}
      </motion.div>

      <AnimatePresence>
        {showLogo && (
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10"
          >
            <SplitTextFramer
              text="jm.m"
              className="text-3xl font-bold text-black font-sohneKraftig tracking-[-0.05em]"
              delay={0.5}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
