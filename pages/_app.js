import { useEffect } from "react";
import "../styles/globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import Head from "next/head";

import styled from "styled-components";

const Container = styled.div`
  font-family: Kanit;
  width: 70%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
    padding: 10px;
  }

  @media (min-width: 2560px) {
    width: 60%;
  }
`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    async function gtagImport() {
      await import("../components/gtag");

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-ECVQHTTS6Q");
    }

    gtagImport();
  }, []);

  return (
    <Container>
      <Head>
        <link rel="icon" href="/portfolio/profile.jpg" />
        <meta
          property="og:url"
          content="https://littleboycoding.github.io/portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Thanawat's Portfolio 🚀🔥💻👏" />
        <meta
          property="og:description"
          content="เว็บไซต์แนะนำตัวของ นายธณวัฒน์ ยอดนิล"
        />
        <meta
          property="og:image"
          content="https://littleboycoding.gitihub.io/portfolio/thumbnail.jpg"
        />
      </Head>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
