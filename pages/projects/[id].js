import React from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../../components/container";
import data from "../../api.js";
import { motion } from "framer-motion";
import { delayedFade, fade } from "@/helpers/transitions";
import { useEffect, useState } from "react";

export default function Project({ project }) {
  const Title = ({
    animateDelay,
    animateDuration,
    exitDelay,
    exitDuration,
    classes,
  }) => {
    return (
      <motion.div className="overflow-hidden">
        <motion.a
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.7, duration: 0.7, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
          }}
          className={`${classes} relative`}
          href={project.link}
        >
          {project.name}
        </motion.a>
      </motion.div>
    );
  };

  const Description = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.9, duration: 0.7, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
        }}
        className="Description mt-8"
      >
        {project.description.map((item, index) => {
          const isGray = item.id === 3 ? "text-gray" : "text-black";
          return (
            <div key={index} className="overflow-hidden">
              <motion.p
                key={item.id}
                class="text-xs  font-sohneBuch text-[#373737]"
              >
                {item.text}
              </motion.p>
            </div>
          );
        })}
      </motion.div>
    );
  };

  const ProjectImages = ({
    image,
    secondaryImage,
    thirdImage,
    fourthImage,
  }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
        }}
        className="image-container min-h-[420px] sepia-[10%]  mx-auto flex flex-col  justify-center items-center gap-y-8   "
      >
        {image && (
          <motion.div className="basis-full project-image-card   ">
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

        {fourthImage && (
          <motion.div className="basis-full project-image-card  ">
            {fourthImage && (
              <Image
                src={fourthImage}
                blurDataURL={fourthImage.blurDataURL}
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

  const Dates = () => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.1, duration: 0.7, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.6, duration: 0.7, ease: "easeInOut" },
        }}
        className="Dates font-sohneBuch text-xs uppercase w-full text-[#373737] "
      >
        {project.year}
      </motion.div>
    );
  };

  const Tags = () => {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.3, duration: 0.7, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { delay: 0.8, duration: 0.7, ease: "easeInOut" },
        }}
        className=" Tags font-sohneBuch text-xs mb-4 sm:mb-0 sm:text-xs  "
      >
        {project.tags}
      </motion.p>
    );
  };

  const Divider = () => {
    return (
      <motion.hr
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: { duration: 1.3, ease: "easeInOut" },
        }}
        exit={{
          width: 0,
          transition: { duration: 1.3, ease: "easeInOut" },
        }}
        className="border-b-1 border-dashed border-black opacity-20 my-2"
      />
    );
  };

  return (
    <>
      <div className="Content-Container overflow-scroll sm:overflow-hidden relative custom-height-md">
        <div className="flex flex-col md:flex-row h-full">
          <Container extraClasses="w-full flex flex-col mt-12 py-12 md:w-1/3">
            <Title classes="hero-font-size text-4xl s=:text-5xl  mt-8 md:mt-0 mb-0 uppercase font-sohneKraftig tracking-tighter  transition duration-300 ease-in-out hover:text-[#505050]" />
            <Divider />
            <div className="flex flex-col grow justify-end">
              <Description />
              <Divider />
              <Dates />
              <Divider />
              <Tags />
            </div>
          </Container>

          <div className="w-full md:mt-12 px-6 py-12 md:px-8 md:w-2/3 overflow-auto">
            <ProjectImages
              image={project.primaryImage}
              secondaryImage={project.secondaryImage}
              thirdImage={project.thirdImage}
              fourthImage={project.fourthImage}
            />
          </div>
        </div>
      </div>
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
