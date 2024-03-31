import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fade } from "@/helpers/transitions";
import Logo from '@/components/header/logo';
export default function Navigation({ items, activeIndex }) {
  // const Logo = () => {
  //   return (
  //     <Link  href="/" className="relative">
  //       <motion.a className="uppercase text-sm self-center font-sohneBuch cursor-pointer">
  //         JM.M
  //       </motion.a>
  //     </Link>
  //   );
  // };

  const Line = () => {
    return (
      <motion.div className="relative w-5">
        <span className="line"></span>
      </motion.div>
    );
  };

  const Routes = () => {
    return (
      <motion.ul className=" flex space-x-2 self-center">
        {items.map(({ route, url }, index) => {
          const isActive = index === activeIndex;
          return (
            <motion.li
              key={index}
              class="text-xs uppercase transition  ease-in-out duration-100 hover:text-gray"
            >
              <Link scroll={false} href={url} class="relative">
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
    <motion.nav
      variants={fade}
      initial="initial"
      animate="enter"
      exit="exit"
      className="self-baseline flex  xsm:basis-1/2  md:flex items-center w-full  md:w-auto"
    >
      <div className="flex">
      {/* <motion.a className="uppercase text-sm self-center font-sohneBuch cursor-pointer">
           JM.M
         </motion.a> */}
      <Logo width="h-4" />
        <Line />
        <Routes />
      </div>
    </motion.nav>
  );
}
