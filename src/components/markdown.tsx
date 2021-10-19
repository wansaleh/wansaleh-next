import { Link } from '@chakra-ui/react';
import rehypeToc from '@jsdevtools/rehype-toc';
import remarkSmartypants from '@silvenon/remark-smartypants';
import NextLink from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkUnwrapImages from 'remark-unwrap-images';

import Img from './image';

const components = {
  a({ href, title, children, ...props }) {
    const isAnchor = href.startsWith('#');
    const isExternal = href.includes('http://') || href.includes('https://');

    if (!isAnchor && !isExternal) {
      return (
        <NextLink href={href} passHref {...props}>
          <Link title={title}>{children}</Link>
        </NextLink>
      );
    }

    if (isAnchor) {
      return (
        <Link href={href} title={title} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <Link href={href} title={title} isExternal {...props}>
        {children}{' '}
        <svg
          height="0.8em"
          width="0.8em"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="inline-block -mt-1"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" x2="21" y1="14" y2="3" />
        </svg>
      </Link>
    );
  },

  img({ src, alt, ...props }) {
    // src = !src.startsWith('https://res.cloudinary.com')
    //   ? `https://res.cloudinary.com/wansaleh/image/fetch/w_800/${src}`
    //   : src;

    return (
      <Img
        src={src}
        alt={alt}
        width={800}
        intrinsic
        zoom
        caption={alt}
        {...props}
      />
    );
  },
};

export default function Markdown({ noTOC = false, children }) {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[
        remarkSmartypants,
        remarkGfm,
        remarkUnwrapImages,
        remarkBreaks,
      ]}
      rehypePlugins={[
        rehypeSlug,
        rehypeHeadings,
        !noTOC && rehypeToc,
        rehypeRaw,
      ].filter(Boolean)}
    >
      {children}
    </ReactMarkdown>
  );
}
