import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import Container from "../../components/container";
// import data from "../../data";

export default function Project() {
  // const router = useRouter();
  // console.log(router.query);
  // console.log(props);

  // const project = data.filter((project) => project.name === router.query.name);
  // console.log(project);

  return (
    <Container extraClasses="Content-Container  h-screen py-12 overflow-auto  md:overflow-hidden  ">
      <div className="grid  h-full mt-16  md:grid-cols-2 md:mt-32 ">
        <div className=" w-3/5 mx-auto md:w-4/5 md:min-w-[200px] md:m-0">
          {project && (
            <img
              src={project[0].url.src}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class=" w-full h-auto object-cover object-center aspect-auto"
            />
          )}
        </div>
        <div className="text-sm font-founders  w-4/5 mx-auto md:m-0 ">
          <p className="text-sm font-foundersLight">{project[0].description}</p>
          <p className="text-[12px] font-foundersLight mt-8 ">
            {project[0].name}
          </p>
          <p className="text-[12px] font-foundersLight mt-[-12px] ">
            {project[0].role}
          </p>
          <p className="text-[10px] font-foundersLight mt-[-12px]">
            {project[0].year}
          </p>
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {
      lists: [
        { dirId: "1", name: "Directory 1" },
        { dirId: "2", name: "Directory 2" },
        { dirId: "3", name: "Directory 3" },
        { dirId: "4", name: "Directory 4" },
      ],
    },
  };
}
