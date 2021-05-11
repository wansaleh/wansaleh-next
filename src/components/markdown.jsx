import { Image, Link } from '@chakra-ui/react';
import rehypeToc from '@jsdevtools/rehype-toc';
import remarkSmartypants from '@silvenon/remark-smartypants';
import NextLink from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';

const components = {
  a({ href, title, children, ...props }) {
    const isAnchor = href.startsWith('#');
    const isSameDomain = !href.includes('http://') && !href.includes('https://');

    if (!isAnchor && isSameDomain) {
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
        {children}
      </Link>
    );
  },

  img({ src, alt, ...props }) {
    return (
      <Image
        src={`https://res.cloudinary.com/wansaleh/image/fetch/w_800/${src}`}
        alt={alt}
        {...props}
      />
    );
  }
};

export default function Markdown({ children }) {
  return (
    <ReactMarkdown
      components={components}
      remarkPlugins={[remarkSmartypants]}
      rehypePlugins={[rehypeSlug, rehypeHeadings, rehypeToc, rehypeRaw]}
    >
      {children}
    </ReactMarkdown>
  );
}
