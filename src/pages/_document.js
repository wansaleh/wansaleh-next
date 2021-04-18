import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    return NextDocument.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://wscdn.vercel.app/fonts/jetbrains-mono/style-cdn.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://use.typekit.net/mmh1cep.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://api.fontshare.com/css?f[]=supreme@1,2&f[]=general-sans@1&f[]=satoshi@1&f[]=clash-grotesk&display=swap"
            rel="stylesheet"
          ></link>
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
