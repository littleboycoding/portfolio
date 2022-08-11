import { Box } from "@chakra-ui/react";
import Head from "next/head";
import dynamic from "next/dynamic";

const Intro = dynamic(() => import("../sections/Intro"));
const Bio = dynamic(() => import("../sections/Bio"));
const Contact = dynamic(() => import("../sections/Contact"));
const Skill = dynamic(() => import("../sections/Skill"));
const Experience = dynamic(() => import("../sections/Experience"));

const Index = () => {
  return (
    <>
      <Head>
        <title>{"Thanawat's Portfolio"}</title>
        <meta name="theme-color" content="#1e1e1e" />
        <meta property="og:title" content="Thanawat's Portfolio" />
        <meta
          name="description"
          content="Homepage of Thanwat's portfolio"
        />
        <meta
          property="og:description"
          content="Homepage of Thanwat's portfolio"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://littleboycoding.github.io/portfolio/"
        />
        <meta
          property="og:image"
          content="https://littleboycoding.github.io/portfolio/me.jpeg"
        />
        <link rel="icon" type="image/x-icon" href="/portfolio/favicon.ico" />
      </Head>
      <Box position="relative">
        <Intro />
        <Bio />
        <Skill />
        <Experience />
        <Contact />
      </Box>
    </>
  );
};

export default Index;
