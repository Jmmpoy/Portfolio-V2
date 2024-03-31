import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/container";
import Link from "next/link";
import { fade } from "@/helpers/transitions";
import ScrollForMore from "@/components/scrollForMore";
import Availability from "@/components/availability";

export default function Hero({ message }) {
  const frenchContent = [
    { id: 1, text: "Mpoy Jean-Marc" },
    { id: 2, text: "Développeur Front End" },
    { id: 3, text: "Basé à Paris." },
  ];
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration:.3,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      // Inversez l'ordre de disparition des enfants
      duration:.5,
      staggerChildren: 0.1,
      staggerDirection: -1, // -1 pour inverser l'ordre
      delayChildren: 0.2,
    },
  },
};

  const Lines = () => {
    return (
      <>
        {frenchContent.map((item, index) => {
          const isGray = item.id === 3 ? "text-gray" : "text-black";
          return (
            <div key={index} className="overflow-hidden">
              <motion.li
                initial={{
                  y: `${70 * item.id}`,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.2 + item.id * 0.05, // Use index for a more uniform stagger effect
                    duration: 1.3, // Slightly faster duration
                    ease: [0.33, 1, 0.68, 1], // Custom cubic bezier for a smooth start and end
                  },
                }}
                // }}
                exit={{
                  y: 100,
                  transition: {
                    delay: `${0.1 * item.id}`,
                    duration: 0.5,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
                key={item.id}
                
                className={` ${isGray} hero-font-size  mb-0 uppercase font-sohneKraftig tracking-tighter xsm:text-3xl   sm:mb-1 sm:text-4xl   md:text-5xl lg:text-5xl`}
              >
                {item.text}
              </motion.li>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Container extraClasses="Hero-Container relative">
      <main className="flex flex-col justify-center relative ">
        <motion.div className="mt-32 pb-24">
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <Lines />
          </motion.ul>
        </motion.div>
        <div className="absolute bottom-0 flex sm:w-full justify-between flex-col sm:flex-row">
          <Availability />
          <ScrollForMore />
        </div>
      </main>
    </Container>
  );
}
