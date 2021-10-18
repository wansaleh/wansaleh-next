import { ColorModeScript } from '@chakra-ui/react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import WebFonts from '../styles/webfonts';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <WebFonts />
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
