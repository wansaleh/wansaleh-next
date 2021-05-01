import { ColorModeScript } from '@chakra-ui/react';
import { extractCritical } from '@emotion/server';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const page = await ctx.renderPage();
    const styles = extractCritical(page.html);
    return { ...initialProps, ...page, ...styles };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/inter-ui/3.18.0/inter.min.css"
            integrity="sha512-LmuBiKMv0sdyc1LQk0LPrsjj3KSoVgVpAXUoFGY8Ye5Zi1mff0it3I42dkh3/NGQgtkqiHcdWOcHGUmOzYLETQ=="
            crossOrigin="anonymous"
          />
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
            rel="stylesheet"
          /> */}
          <link
            href="https://api.fontshare.com/css?f[]=general-sans@1&f[]=clash-display@1&display=swap"
            rel="stylesheet"
          />
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
