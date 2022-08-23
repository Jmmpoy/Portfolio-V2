import FancyLink from "@/components/fancyLink";
import Container from "@/components/container";
import Navigation from "./navigation";
import OverlayMenu from "./menu";
import Link from "next/link";
import Burger from "./burger";
import Logo from "@/components/header/logo";

import { useState, useEffect } from "react";
import {
  motion,
  AnimateSharedLayout,
  AnimatePresence,
  useAnimation,
  useCycle,
} from "framer-motion";

export default function Header() {
  const [open, setOpen] = useCycle(false, true);
  const menuItems = [
    { route: "Projects,", url: "/projects" },
    { route: "Infos", url: "/infos" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [open]);

  const asideVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.9,
        ease: [0.79, 0.14, 0.15, 0.86],
        when: "afterChildren",
      },
    },
  };

  return (
    <header
      className="bg-white fixed  w-full  flex flex-col justify-center pt-2"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container">
      <Container extraClasses="Header-Section ">
        <div class="flex flex-col  h-full sm:justify-between   sm:flex-row">
          <AnimateSharedLayout>
            <Navigation items={menuItems} />
          </AnimateSharedLayout>

          <ul className=" hidden  sm:block sm:basis-1/2">
            <li className="uppercase text-sm font-founders  ">
              front end developer
            </li>
            <li className="uppercase text-sm font-founders text-gray">
              Nantes, France
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
}
