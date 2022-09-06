import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Container from "../../components/container";
import data from "../../api.js";

export default function Project({ project }) {
  console.log("project", project);
  

  return (
    <Container extraClasses="Content-Container relative  h-screen py-12 overflow-auto  md:overflow-hidden  ">
      <div className="  grid  h-full mt-12  md:grid-cols-2 md:mt-32 ">
        <div className="text-sm font-founders  w-5/5 sm:w-4/5 md:m-0 ">
          <p className="text-5xl xsm:text-5xl sm:text-4xl md:text-4xl font-foundersLight tracking-tight hover:text-${project.color} ">
            {project.name}
          </p>
          <p className="text-sm font-foundersLight mt-8 w-5/5 max-w-[450px]">
            {project.description}
          </p>
          <p className="text-[12px] font-foundersLight mt-4 ">{project.role}</p>
          <p className="text-[10px] font-foundersLight mt-[-12px]">
            {project.year}
          </p>
        </div>
        <div className="  mt-20 w-5/5  md:mt-0  md:min-w-[200px] ">
          {project && (
            <Image
              src={project.url}
              blurDataURL={project.blurDataURL}
              alt={project.name}
              width={460}
              height={258}
              class=" min-w-[320px] w-full h-auto object-cover object-center aspect-auto"
            />
          )}
        </div>
        {/* <Link href="/">
          <a className="self-center mt-16 pb-4 w-6 md:mt-0 p-0">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
            </svg>
          </a>
        </Link> */}
      </div>
    </Container>
  );
}

export async function getStaticProps({ params }) {
  console.log("params", params);
  const projects = data.filter((p) => p.id.toString() === params.id);
  return {
    props: { project: projects[0] },
  };
}

export async function getStaticPaths() {
  const paths = data.map((project) => ({
    params: { id: project.id.toString() },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
