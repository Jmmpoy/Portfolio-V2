import Container from "../../components/container";
import data from "@/api";
import Dates from "@/components/project/dates";
import Tags from "@/components/project/tags";
import Title from "@/components/project/title";
import Description from "@/components/project/desccription";
import ProjectImages from "@/components/project/projectImages";
import { motion } from "motion/react";
import { Project as ProjectType } from "@/types/project";

export default function Project({ project }: { project: ProjectType }) {
  const {
    year,
    tags,
    name,
    link,
    description,
    coverImage,
    secondaryImage,
    thirdImage,
    fourthImage,
    fifthImage,
    sixthImage,
    seventhImage,
    eighthImage,
    ninthImage,
    tenthImage,
    eleventhImage,
    coverVideo,
    objectFit,
  } = project;

  const media = [
    coverVideo,
    coverImage,
    secondaryImage,
    thirdImage,
    fourthImage,
    fifthImage,
    sixthImage,
    seventhImage,
    eighthImage,
    ninthImage,
    tenthImage,
    eleventhImage,
  ].filter((item): item is string => Boolean(item));

  const Divider = () => {
    return (
      <motion.hr
        initial={{ width: 0 }}
        animate={{
          width: "100%",
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        exit={{
          width: 0,
          transition: { duration: 0.7, ease: "easeInOut" },
        }}
        className="border-b-1 border-dashed border-black opacity-20 my-2"
      />
    );
  };

  return (
    <>
      <motion.div className="Content-Container overflow-scroll sm:overflow-hidden relative custom-height-md">
        <motion.div className="flex flex-col md:flex-row h-full">
          <Container extraClasses="w-full flex flex-col sm:mt-12 pt-12 md:w-1/3">
            {link && name && (
              <Title
                key="project-title"
                link={link}
                name={name}
                classes="hero-font-size text-4xl sm:text-4xl md:text-4xl  mt-8 md:mt-0 mb-0 uppercase font-sohneHalbfett tracking-tighter"
              />
            )}

            <Description description={description} key="project-description" />
            {description && year && tags && (
              <motion.div className="flex flex-col grow justify-end">
                <Divider key="project-divider-2" />
                <Dates year={year} key="project-year" />
                <Divider key="project-divider-3" />
                <Tags tags={tags} key="project-tags" />
              </motion.div>
            )}
          </Container>

          {media.length > 0 && (
            <motion.div className="w-full px-6 pt-[54px] md:px-4 md:w-2/3 overflow-auto">
              <ProjectImages key="project-images" name={name} media={media} objectFit={objectFit} />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const project = data.find((p) => p.id.toString() === params.id);
  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const paths = data
    .filter((project) => !project.inProgress)
    .map((project) => ({
      params: { id: project.id.toString() },
    }));
  return {
    paths,
    fallback: false,
  };
}
