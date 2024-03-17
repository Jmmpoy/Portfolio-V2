import React from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../../components/container";
import data from "../../api.js";
import { motion } from "framer-motion";
import { delayedFade, fade } from "@/helpers/transitions";
import { useEffect,useState } from "react";

export default function Project({ project }) {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  const Title = ({
    animateDelay,
    animateDuration,
    exitDelay,
    exitDuration,
    classes,
  }) => {
    return (
      <motion.div className="flex flex-col-reverse sm:flex-row">
        <motion.span
          
          className=" w-full"
        >
          <motion.p className="font-sohneBuch text-[10px] mb-4 sm:mb-0 sm:text-xs uppercase ">
            {project.tags}
          </motion.p>
          <motion.a className={`${classes} relative`} href={project.link}>
            {project.name}
          </motion.a>
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.7, 0, 0.3, 1],
            },
          }}
          className="font-sohneBuch text-xs uppercase text-left sm:text-right w-full text-[#373737]"
        >
          {project.year}
        </motion.div>
      </motion.div>
    );
  };

  const ProjectInfos = ({ titleStyle, contentStyle }) => {
    return (
      <motion.ul className=" mt-9 md:mt-3  overflow-hidden">
        <motion.li className="flex flex-col justify-evenly">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={titleStyle}
            >
              Rôle
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1.5,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.7,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={contentStyle}
            >
              {project.role}
            </motion.p>
          </div>
        </motion.li>
        <motion.li className="flex flex-col justify-evenly">
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={titleStyle}
            >
              Année
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 0 }}
              animate={{
                y: 0,
                transition: {
                  delay: 1.5,
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              exit={{
                y: 100,
                transition: {
                  delay: 0.7,
                  duration: 0.8,
                  ease: "easeInOut",
                },
              }}
              className={contentStyle}
            >
              {project.year}
            </motion.p>
          </div>
        </motion.li>
      </motion.ul>
    );
  };

  const Description = () => {
    return (
      <motion.div
        
        className="mt-8 text-left sm:text-right"
      >
        <motion.div className="mb-8 ">
          {project.description.map((item, index) => {
            const isGray = item.id === 3 ? "text-gray" : "text-black";
            return (
              <div key={index} className="overflow-hidden">
                <motion.p
                 
                  key={item.id}
                  class="text-sm  font-sohneBuch text-[#373737]"
                >
                  {item.text}
                </motion.p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    );
  };

  const ProjectImages = ({ image, secondaryImage, thirdImage }) => {
    return (
      <motion.div
       
        className="image-container min-h-[420px]  mx-auto  py-16 px-12  flex flex-col  gap-y-24  justify-center items-center  md:p-24 "
      >
        {image && (
          <motion.div className="basis-full project-image-card  ">
            <Image
              src={image}
              blurDataURL={image.blurDataURL}
              placeholder="blur"
              alt={project.name}
              class=" min-w-[320px]  image basis-full"
            />
          </motion.div>
        )}

        {secondaryImage && (
          <motion.div className="basis-full project-image-card  ">
            {secondaryImage && (
              <Image
                src={secondaryImage}
                blurDataURL={secondaryImage.blurDataURL}
                placeholder="blur"
                alt={project.name}
                class=" min-w-[320px]  image "
              />
            )}
          </motion.div>
        )}

        {thirdImage && (
          <motion.div className="basis-full project-image-card  ">
            {thirdImage && (
              <Image
                src={thirdImage}
                blurDataURL={thirdImage.blurDataURL}
                placeholder="blur"
                alt={project.name}
                class=" min-w-[320px]  image "
              />
            )}
          </motion.div>
        )}
      </motion.div>
    );
  };

  const projectTitle = [{ id: project.id, text: project.name }];

  return (
    <>
      <Container extraClasses="Content-Container relative pt-8 md:py-12">
        <motion.div initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: .5,
              ease: "easeInOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
              ease: [0.7, 0, 0.3, 1],
            },
          }} className="flex flex-col my-16 mb-12 overflow-hidden  md:mt-20">
          <Title classes="hero-font-size text-5xl mt-8 md:mt-0  mb-0 uppercase font-sohneKraftig tracking-tighter  xsm:text-7xl     md:text-9xl  lg:text-9xl transition duration-300 ease-in-out hover:text-[#505050]" />
          <Description />
        </motion.div>
      </Container>
      <ProjectImages
        image={project.primaryImage}
        secondaryImage={project.secondaryImage}
        thirdImage={project.thirdImage}
      />

      {/* <Description /> */}
      {/* <ProjectInfos
        titleStyle="text-base neueRegular  "
        contentStyle="text-xl font-neueRegular "
      /> */}
    </>
  );
}

export async function getStaticProps({ params }) {
  const projects = data.filter((p) => p.id.toString() === params.id);
  return {
    props: { project: projects[0] },
  };
}

export async function getStaticPaths() {
  const paths = data.map((project) => ({
    params: { id: project.id.toString() },
  }));
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
