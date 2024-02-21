import React, { useEffect } from "react";
import Container from "./container";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { delayedFade } from "@/helpers/transitions";
import Image from "next/image";

export default function Grid({ data }) {
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
        className="overflow-hidden rounded cursor-pointer"
        ref={ref}
        animate={controls}
        initial="hidden"
        exit="exit"
        transition={{ duration: 0.4 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 20 },
        }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Container extraClasses="Content-Container pb-12 lg:pb-32 mt-8 bg-blue-300">
      
      <motion.div className=" mt-4 gap-2 grid grid-cols-1   lg:grid-cols-2">
        {data.map((project) => {
          return (
            <FadeInWhenVisible key={`project-${project.id}`}>
              <Link
                href={`/projects/[id]`}
                as={`/projects/${project.id}`}
                passHref
                className="link h-full"
              >
                <div className="relative text-gray text-opacity-20 ease-in-out duration-300 hover:text-opacity-90">
                  <Image
                    src={project.primaryImage}
                    blurDataURL={project.primaryImage.blurDataURL}
                    placeholder="blur"
                    alt={project.name}
                    objectFit="cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className=" hover:opacity-90 transition ease-in-out duration-700"
                  />
                  <p className=" z-10  absolute bottom-8 left-8 transform  font-sohneKraftig text-sm">
                    {project.name}
                  </p>
                </div>
              </Link>
            </FadeInWhenVisible>
          );
        })}
      </motion.div>
    </Container>
  );
}
