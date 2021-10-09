import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head>
          <title>Next Animation Experiment</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
