import { ColorModeScript } from '@chakra-ui/react';
import { extractCritical } from '@emotion/server';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

function initializeColorMode() {
  if (
    window.localStorage['chakra-ui-color-mode'] === 'dark' ||
    (!('chakra-ui-color-mode' in window.localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

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
          <link
            href="https://api.fontshare.com/css?f[]=general-sans@1&f[]=satoshi@1&f[]=clash-display@1&f[]=zodiak@1,2&f[]=sentient@1,2&f[]=gambetta@1,2&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode="light" />
          <script
            dangerouslySetInnerHTML={{
              __html: `(${String(initializeColorMode)})()`
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
