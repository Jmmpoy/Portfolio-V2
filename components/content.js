import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import data from "../api.js";

export default function content() {
  const ROUTE_PROJECT_ID = "projects/[id]";

  console.log("data", data.data);
  // console.log("api", api);

  return (
    <Container extraClasses="Content-Container   py-12   lg:py-32">
      <p class="text-[12px] text-gray font-founders ">Selected projects</p>

      <div class=" h-full ">
        {data.map((project, index) => {
          return (
            <div
              key={`project-${project.id}`}
              class={`  border-t-[0.2px] border-gray  h-24 md:h-32 flex flex-col justify-center text-sm uppercase relative text-black hover:text-gray  transition duration-700`}>
              <Link
                href={{
                  pathname: ROUTE_PROJECT_ID,
                  query: project,
                }}
                as={`/projects/${project.name}`}>
                <a
                  className={`  text-5xl xsm:text-6xl sm:text-7xl md:text-8xl font-founders tracking-tight hover:text-${project.color}  `}>
                  {project.name}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
