import "../public/lib/torus-kit/toruskit.min.css";
import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "../src/theme";
import { CssBaseline } from "@material-ui/core";

/** When we use JSS with server side rendering, new styles are added whenever the client
 * is hydrated. However, old styles are not removed. Call this function on app.render
 * to remove JSS from previous rendering. */
const removeLegacyJss = () => {
  const jssBlock = document.getElementById("jss-server-side");
  if (jssBlock && jssBlock.parentElement) {
    jssBlock.parentElement.removeChild(jssBlock);
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // This is the right place to call `removeLegacyJss` because app is rendered first on
    // server side, followed by page and document renders. Removing legacy JSS any later can
    // cause collisions in class names.
    removeLegacyJss();
  }, []);

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <script async src="lib/torus-kit/toruskit.min.js" />
        <title>Next Animation Experiments</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
