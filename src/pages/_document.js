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
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  } else {
    document.documentElement.classList.add('light');
    document.documentElement.classList.remove('dark');
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
