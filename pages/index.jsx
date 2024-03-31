import { useEffect, useRef } from "react";
import Layout from "@/components/layout";
import Hero from "@/components/hero";
import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

import Grid from '@/components/grid'
import data from "api";

export default function Home() {


  return (
    <Layout className="no-scrollbar relative">
      <NextSeo
        title="Mpoy Jean-Marc — Front-End Developer"
        description="Mpoy Jean-Marc is a developer specializing in movement and interaction. As a freelancer, he works with businesses, agencies, startups, and individuals."
      />
      <motion.div className="relative bg-beige">
        <Hero />
        <Grid data={data}/>
      </motion.div>

    </Layout>
  );
}
