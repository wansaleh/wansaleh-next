import NextHead from 'next/head';
import React from 'react';

const defaultDescription =
  'Hello there. I’m Wan Saleh. 🇲🇾 A proud Malaysian. 🎧 A music producer. 👨‍💻 A web (FTW!) & mobile developer. ‍⚽ Football fanatic & ‍🍿 a movie buff.';
const defaultOGURL = '';
const defaultOGImage = '';

export default function Head({ title, description, url, ogImage }) {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      />
      <title>{title || ''}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="apple-touch-icon" href="/touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" /> */}
      <link rel="icon" href="/favicon2.png" />
      <meta property="og:url" content={url || defaultOGURL} />
      <meta property="og:title" content={title || ''} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta name="twitter:site" content={url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage || defaultOGImage} />
      <meta property="og:image" content={ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </NextHead>
  );
}
