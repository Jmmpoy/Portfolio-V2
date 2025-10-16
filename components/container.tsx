
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  extraClasses?: string;
}

export default function Container({ children, extraClasses = "" }: ContainerProps) {
  return (
    <motion.section className={`${extraClasses} px-6 mx-auto w-full  md:px-4`}>
      {children}
    </motion.section>
  );
}
