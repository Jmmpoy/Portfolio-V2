import Layout from "@/components/layout";
import Hero from "@/components/hero";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Grid from "@/components/grid";
import data from "api";
import { useRef } from "react";

export default function Home() {

  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true, lerp: 0.09 }}
      containerRef={containerRef}
      watch={[]}
    >
      <div data-scroll-container ref={containerRef} id="scroll-container">
        <div data-scroll-section>
          <Layout className="no-scrollbar relative">
            <NextSeo
              title="Mpoy Jean-Marc — Front-End Developer"
              description="Mpoy Jean-Marc is a developer specializing in movement and interaction. As a freelancer, he works with businesses, agencies, startups, and individuals."
            />
            <motion.div className="relative bg-beige">
              <Hero />
              <Grid data={data} />
            </motion.div>
          </Layout>
        </div>
      </div>
    </LocomotiveScrollProvider>
  );
}
