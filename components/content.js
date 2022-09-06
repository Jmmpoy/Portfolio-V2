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
      <p class="text-[16px] text-gray font-foundersLight ">Selected projects</p>

      <div class="h-full mt-4">
        {data.map((project, index) => {
          console.log(project);
          return (
            <div
              key={`project-${project.id}`}
              class={` project border-t-[0.2px] border-gray  h-24 md:h-32 flex justify-between items-center text-sm uppercase relative text-black hover:text-gray  transition duration-700`}>
              <Link
                href={`/projects/[id]`}
                as={`/projects/${project.id}`}
                passHref>
                <a
                  className={`  text-5xl xsm:text-6xl sm:text-7xl md:text-8xl font-foundersLight tracking-tight hover:text-${project.color}  `}>
                  {project.name}
                </a>
              </Link>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
