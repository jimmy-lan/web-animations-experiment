import "../public/lib/torus-kit/toruskit.min.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

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

  return <Component {...pageProps} />;
}
export default MyApp;
