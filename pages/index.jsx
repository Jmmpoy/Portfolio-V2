// TODO : SWITCH FROM GRID TO LSIT VIEW
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import { motion, useInView } from "framer-motion";
import { NextSeo } from "next-seo";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Grid from "@/components/grid";
import Content from "@/components/content";
import data from "api";
import { useRef } from "react";



export default function Home() {
   const container = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{ smooth: true, lerp: 0.1 }}
      containerRef={container}
      watch={[]}
    >
      <div
        data-scroll-container
        data-scroll-speed={20}
        ref={container}
        id="scroll-container"
      >
        <div data-scroll-section>
          <Layout className="no-scrollbar relative">
            <NextSeo
              title="Mpoy Jean-Marc — Développeur Front-End"
              description="Jean-Marc Mpoy est un développeur passionné par l'enrichissement de l'expérience utilisateur à travers des interfaces élégantes et interactives. Son travail en freelance avec une diversité de partenaires vise à maximiser l'engagement utilisateur."
            />

            <motion.div className="relative bg-beige">
              <Hero />
              <Grid  data={data} />
            </motion.div>
          </Layout>
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
}
