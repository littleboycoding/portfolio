import Head from "next/head";
import dynamic from "next/dynamic";

import Parallax from "../components/Parallax";
import ParallaxLayer from "../components/Parallax/ParallaxLayer";
import ParallaxSection from "../components/Parallax/ParallaxSection";

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
        <meta name="description" content="Homepage of Thanwat's portfolio" />
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
      <Parallax perspective={1}>
        <ParallaxSection>
          <ParallaxLayer>
            <Intro />
          </ParallaxLayer>
        </ParallaxSection>
        <ParallaxSection>
          <ParallaxLayer z={-0.8}>
            <Bio />
          </ParallaxLayer>
        </ParallaxSection>
        <ParallaxSection>
          <ParallaxLayer>
            <Skill />
            <Experience />
            <Contact />
          </ParallaxLayer>
        </ParallaxSection>
      </Parallax>
    </>
  );
};

export default Index;
