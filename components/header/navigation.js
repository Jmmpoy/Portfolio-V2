import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { fade } from "@/helpers/transitions";
export default function Navigation({ items, activeIndex, setActiveIndex }) {
  return (
    <motion.nav className="self-baseline flex  xsm:basis-1/2  md:flex items-center w-full  md:w-auto">
      <div className="flex">
        <Link href="/" class="relative">
          <a className="uppercase text-sm self-center font-founders">
            {" "}
            Lucas Reteau{" "}
          </a>
        </Link>
        <div className="relative w-5">
          <span className="line"></span>
        </div>
        <motion.ul
          variants={fade}
          initial="initial"
          animate="enter"
          exit="exit"
          class=" flex space-x-2 self-center">
          {items.map(({ route, url }, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.li key={index} class="text-sm uppercase ">
                <Link href={url} class="relative">
                  <a className="font-founders">
                    <span>{route}</span>
                  </a>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.nav>
  );
}
