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
    { id: 2, text: "Front-End Developer" },
    { id: 3, text: "Based in Paris." },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.9,
        delayChildren: 0.2,
      },
    },
  };

  const Lines = () => {
    return (
      <>
        {frenchContent.map((item, index) => {
          const isGray = item.id === 3 ? "text-gray" : "text-black";
          const currentStatus = item.id === 4;
          return (
            <div key={index} className="overflow-hidden">
              <motion.li
                initial={{
                  y: `${70 * item.id}`,
                  rotate: -10 * item.id,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  transition: {
                    delay: 0.2 + item.id * 0.05, // Use index for a more uniform stagger effect
                    duration: 1.2, // Slightly faster duration
                    ease: [0.39,0.57,0.56,1], // Custom cubic bezier for a smooth start and end
                  },
                }}
                // }}
                exit={{
                  y: 100,
                  transition: {
                    delay: `${0.1 * item.id}`,
                    duration: 0.8,
                    ease: "easeInOut",
                  },
                }}
                key={item.id}
                style={{ transformOrigin: "center right" }}
                className={` ${isGray} hero-font-size  mb-0 uppercase font-sohneKraftig tracking-tighter xsm:text-3xl   sm:mb-1 sm:text-4xl   md:text-6xl lg:text-7xl`}
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
