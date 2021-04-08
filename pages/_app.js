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
  return (
    <Container>
      <Head>
        <link rel="icon" href="/profile.jpg" />
      </Head>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
