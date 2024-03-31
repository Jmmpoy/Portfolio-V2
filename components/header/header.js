import Container from "@/components/container";
import Navigation from "./navigation";

import { useEffect } from "react";
import {
  motion,
  AnimateSharedLayout,
  useCycle,
} from "framer-motion";
import { delayedFade } from "@/helpers/transitions";
import DateTime from "../dateTime";

export default function Header() {
  const menuItems = [{ route: "À Propos", url: "/about" }];


  return (
    <header
      className="bg-beige fixed  w-full  flex flex-col justify-center pt-2 z-10 h-12"
      data-scroll
      data-scroll-sticky
      data-scroll-target="#scroll-container">
      <Container extraClasses="Header-Section ">
        <motion.div className="flex flex-col  h-full sm:justify-between   sm:flex-row">
        <Navigation  items={menuItems} />

          <motion.ul
            variants={delayedFade}
            initial="initial"
            animate="enter"
            exit="exit"
            className=" hidden  sm:block sm:basis-1/2">
            <DateTime />
          </motion.ul>
        </motion.div>
      </Container>
    </header>
  );
}
