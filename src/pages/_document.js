import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/core';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://wscdn.vercel.app/fonts/jetbrains-mono/style-cdn.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript defaultMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
