import React, { useEffect } from "react";
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
        duration: .6, 
        ease: [0.7, 0, 0.3, 1], 
        delay: .2 
      },
    },
    exit: {
      opacity: 0,
      transition: { 
        duration: .6,
        ease: [0.7, 0, 0.3, 1] 
      },
    },
  };
 
  
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
        className="overflow-hidden rounded cursor-pointer h-full"
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
    <Container extraClasses=" pb-12 lg:pb-32 mt-8 bg-blue-300">
      
      <motion.div variants={delayedFade}
        initial="initial"
        animate="enter" exit="exit" className=" mt-4 gap-4 grid grid-cols-1 md:grid-cols-2    lg:grid-cols-3">
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
                    className=" hover:opacity-70 hover:blur-[2px] transition ease-in-out duration-500"
                  />
                  <p className={`z-10  ${project.color}  absolute bottom-4 left-4 transform uppercase  font-sohneKraftig text-sm`}>
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
