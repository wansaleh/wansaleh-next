import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription =
  'Hello there. I’m Wan Saleh. 🇲🇾 A proud Malaysian. 🎧 A music producer. 👨‍💻 A web (FTW!) & mobile developer. ‍⚽ Football fanatic & ‍🍿 a movie buff.';
const defaultOGURL = '';
const defaultOGImage = '';

const Head = (props) => (
  <NextHead>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
    />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="apple-touch-icon" href="/touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" /> */}
    <link rel="icon" href="/favicon.png" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
