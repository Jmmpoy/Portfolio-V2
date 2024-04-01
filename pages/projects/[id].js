import React from "react";
import Container from "../../components/container";
import data from "../../api.js";
import Dates from "@/components/project/dates";
import Tags from "@/components/project/tags";
import Title from "@/components/project/title";
import Description from "@/components/project/desccription";
import Divider from "@/components/divider";
import ProjectImages from "@/components/project/projectImages";
import {motion} from "framer-motion"

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
            <Title
              link={link}
              name={name}
              classes="hero-font-size text-4xl sm=:text-4xl md:text-4xl  mt-8 md:mt-0 mb-0 uppercase font-sohneHalbfett tracking-tighter "
            />
            <Divider />
            <motion.div className="flex flex-col grow justify-end">
              <Description description={description} />
              <Divider />
              <Dates year={year} />
              <Divider />
              <Tags tags={tags} />
            </motion.div>
          </Container>

          <motion.div className="w-full md:mt-12 px-6 py-12 md:px-8 md:w-2/3 overflow-auto">
            <ProjectImages
            name={name}
              image={primaryImage}
              secondaryImage={secondaryImage}
              thirdImage={thirdImage}
              fourthImage={fourthImage}
            />
          </motion.div>
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
