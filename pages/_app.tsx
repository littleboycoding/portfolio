import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";

import StarParticles from "../components/StarParticles";

config.autoAddCss = false;

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <StarParticles />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
