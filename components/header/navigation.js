import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fade } from "@/helpers/transitions";
export default function Navigation({
  items,
  activeIndex,
}) {

  const Logo = () => {
    return (
      <Link href="/" className="relative">
        <motion.a
          variants={fade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="uppercase text-sm self-center font-sohneBuch cursor-pointer"
        >
          JM.M
        </motion.a>
      </Link>
    );
  };

  const Line = () => {
    return (
      <motion.div
        variants={fade}
        initial="initial"
        animate="enter"
        exit="exit"
        className="relative w-5"
      >
        <span className="line"></span>
      </motion.div>
    );
  };

  const Routes = () => {
    return (
      <motion.ul
        variants={fade}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" flex space-x-2 self-center"
      >
        {items.map(({ route, url }, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.li key={index} class="text-sm uppercase transition  ease-in-out duration-100 hover:text-gray">
              <Link href={url} class="relative">
                <a className="font-sohneBuch">
                  <span>{route}</span>
                </a>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    );
  };

  return (
    <motion.nav className="self-baseline flex  xsm:basis-1/2  md:flex items-center w-full  md:w-auto">
      <div className="flex">
        <Logo />
        <Line />
        <Routes/>
      </div>
    </motion.nav>
  );
}
