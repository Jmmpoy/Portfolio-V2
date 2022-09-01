import React from "react";
import Container from "./container";
import Link from "next/link";
import Image from "next/image";
import data from "../data.js";

export default function content() {
  console.log(data);
  const ROUTE_PROJECT_ID = "projects/[id]";

  return (
    <Container extraClasses="Content-Container   py-12   lg:py-32">
      <p class="text-[12px] text-gray font-founders ">Selected projects</p>
      <div class="grid h-full gap-y-16 md:grid-cols-2  ">
        {data.map((project, index) => {
          return (
            <div
              key={`project-${project.id}`}
              class=" max-w-lg text-sm uppercase relative grayscale-[90%] hover:grayscale-0 transition duration-500">
              <Link
                href={{
                  pathname: ROUTE_PROJECT_ID,
                  query: project,
                }}
                as={`/projects/${project.name}`}>
                <a>
                  <img
                    src={project.url.src}
                    loading="lazy"
                    alt={project.name}
                    class="h-full  "
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

{
  /* <a className="flex">
  <Image
    src={project.url}
    blurDataURL={project.url.blurDataURL}
    loading="lazy"
    placeholder="blur"
    alt={project.name}
  />
</a>; */
}
