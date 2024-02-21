import Layout from "@/components/layout";
import Hero from "@/components/hero";
import Content from "@/components/content";
import { m } from "framer-motion";
import { NextSeo } from "next-seo";
import data from "api";
import React from "react";
import Grid from '@/components/grid'

export default function Home() {

  return (
    <Layout className="no-scrollbar">
      <NextSeo
        title="Mpoy Jean-Marc — Développeur Front-End"
        description="Mpoy Jean-Marc est un développeur spécialisé dans le mouvement et l'interaction. En tant qu'indépendant, il travaille avec des entreprises, des agences, des startups et des particuliers."
      />
      <m.div initial="initial" animate="enter" exit="exit">
        <Hero />
        <Grid data={data}/>
      </m.div>
    </Layout>
  );
}
