import React, { useEffect } from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import data from "../api.js";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { delayedFade, fade } from "@/helpers/transitions";

export default function content() {
  function FadeInWhenVisible({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ margin: "70px" });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.div
        class={` project border-t-[0.2px] border-gray  h-24 md:h-32 flex justify-between items-center text-sm uppercase relative text-black hover:text-gray  transition duration-700`}
        ref={ref}
        animate={controls}
        initial="hidden"
        exit="exit"
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
        }}>
        {children}
      </motion.div>
    );
  }

  return (
    <Container extraClasses="Content-Container   py-12   lg:py-32">
      <motion.p
        variants={delayedFade}
        initial="initial"
        animate="enter"
        exit="exit"
        class="text-[16px] text-gray font-foundersLight ">
        Projets
      </motion.p>
      <motion.div class="h-full mt-4">
        {data.map((project, index) => {
          console.log(project);
          return (
            <FadeInWhenVisible key={`project-${project.id}`}>
              <Link
                href={`/projects/[id]`}
                as={`/projects/${project.id}`}
                passHref>
                <a
                  className={`  text-5xl xsm:text-6xl sm:text-7xl md:text-8xl font-foundersLight tracking-tight  `}>
                  {project.name}
                </a>
              </Link>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </FadeInWhenVisible>
          );
        })}
      </motion.div>
    </Container>
  );
}
