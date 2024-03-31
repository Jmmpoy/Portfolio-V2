// TODO : ADD INTERSECTION OBSERVER TO ADD OPACITY ANIM

import React, { useEffect, useRef } from "react";
import Container from "./container";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function Grid({ data }) {
  const delayedFade = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.7, 0, 0.3, 1],
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.7, 0, 0.3, 1],
      },
    },
  };

  const FadeInWhenVisible = ({ children }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({
      threshold: 0.3, // Trigger the animation when 30% of the component is in view
      triggerOnce: true, // Optional: Trigger animation only once
    });

    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y:0,
          transition: { duration: 0.7, ease: "easeInOut" },
        });
      } 
    }, [controls, inView]);

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y:10 }}
        className="overflow-hidden rounded cursor-pointer h-full"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <Container extraClasses=" pb-12 lg:pb-32 mt-8 bg-blue-300">
      <motion.div
        variants={delayedFade}
        initial="initial"
        animate="enter"
        exit="exit"
        className=" mt-4 gap-2 grid grid-cols-1 md:grid-cols-2 "
      >
        {data.map((project) => {
          return (
            <FadeInWhenVisible key={`project-${project.id}`}>
              <Link
                scroll={false}
                href={`/projects/[id]`}
                as={`/projects/${project.id}`}
                passHref
                className="link h-full"
              >
                <motion.div className="grid-element sepia-[10%] h-full relative text-opacity-20 ease-in-out duration-300 hover:text-opacity-100">
                  <Image
                    src={project.primaryImage}
                    blurDataURL={project.primaryImage.blurDataURL}
                    placeholder="blur"
                    alt={project.name}
                    objectFit="cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className=" hover:opacity-80 hover:scale-105 transition ease-in-out duration-700"
                  />
                  <p
                    className={`z-10  ${project.color} opacity-70  absolute bottom-4 left-4 transform uppercase  font-sohneKraftig text-sm`}
                  >
                    {project.name}
                  </p>
                </motion.div>
              </Link>
            </FadeInWhenVisible>
          );
        })}
      </motion.div>
    </Container>
  );
}
