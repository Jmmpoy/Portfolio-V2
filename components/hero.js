import React from "react";
import { m } from "framer-motion";
import Container from "@/components/container";
import { fade } from "@/helpers/transitions";

export default function Hero() {
  return (
    <Container extraClasses="Hero-Container relative ">
      <m.main class=" h-[65vh] flex flex-col justify-center">
        <m.div variants={fade} initial="initial" animate="enter" exit="exit">
          <div class="">
            <h1 class=" hero-font-size  mb-0 font-ibmLight  uppercase  hero-font-space-small xsm:text-3xl sm:mb-3   sm:text-5xl sm:hero-font-space">
              Lucas reteau
            </h1>
            <div>
              <h1 class=" hero-font-size  mb-0 font-ibmLight  uppercase  hero-font-space-small xsm:text-3xl  sm:mb-3  sm:text-5xl sm:hero-font-space  ">
                front end developer
              </h1>
            </div>
            <div>
              <h1 class=" hero-font-size  mb-0 font-ibmLight text-gray  uppercase  hero-font-space-small xsm:text-3xl  sm:mb-3  sm:text-5xl sm:hero-font-space  ">
                based in Nantes
              </h1>
            </div>
          </div>
        </m.div>
      </m.main>
    </Container>
  );
}
