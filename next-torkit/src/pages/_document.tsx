import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import React from "react";
import { ServerStyleSheets } from "@material-ui/core/styles";

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

Document.getInitialProps = async (ctx: DocumentContext) => {
  const sheets = new ServerStyleSheets();

  // This render page override is valid according to
  // https://nextjs.org/docs/advanced-features/custom-document#customizing-renderpage
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = (options?) =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      ...options,
    });

  const initialProps = await NextDocument.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default Document;
