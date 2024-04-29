import React, {useEffect, useState} from "react";
import Container from "../../components/container";
import data from "../../api.js";
import Dates from "@/components/project/dates";
import Tags from "@/components/project/tags";
import Title from "@/components/project/title";
import Description from "@/components/project/desccription";
import Divider from "@/components/divider";
import ProjectImages from "@/components/project/projectImages";
import {motion, useAnimation} from "framer-motion"


export default function Project({ project }) {

  
  const {
    year,
    tags,
    name,
    link,
    description,
    primaryImage,
    secondaryImage,
    thirdImage,
    fourthImage,
  } = project;


  const Divider = () => {
    return (
      <motion.hr
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: { duration: .5, ease: "easeInOut" },
        }}
        exit={{
          width: 0,
          transition: { duration: .7, ease: "easeInOut" },
        }}
        className="border-b-1 border-dashed border-black opacity-20 my-2"
      />
    );
  };


  return (
    <>
       <motion.div className="Content-Container overflow-scroll sm:overflow-hidden relative custom-height-md">
        <motion.div className="flex flex-col md:flex-row h-full">    
          <Container extraClasses="w-full flex flex-col mt-12 py-12 md:w-1/3">
           {link && name &&  <Title key="project-title"
              link={link}
              name={name}
              classes="hero-font-size text-4xl sm=:text-4xl md:text-4xl  mt-8 md:mt-0 mb-0 uppercase font-sohneHalbfett tracking-tighter "
            />}
            <Divider key="project-divider-1" />
           {description && year && tags &&  <motion.div className="flex flex-col grow justify-end">
              <Description description={description} key="project-description" />
              <Divider key="project-divider-2" />
              <Dates year={year} key="project-year" />
              <Divider key="project-divider-3"/>
              <Tags tags={tags} key="project-tags" />
            </motion.div>}
          </Container>

         {name && primaryImage && secondaryImage && thirdImage &&  <motion.div className="w-full md:mt-12 px-6 py-12 md:px-8 md:w-2/3 overflow-auto">
            <ProjectImages key="project-images"
            name={name}
              image={primaryImage}
              secondaryImage={secondaryImage}
              thirdImage={thirdImage}
              fourthImage={fourthImage}
            />
          </motion.div>}
        </motion.div>
      </motion.div>
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
