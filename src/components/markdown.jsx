import rehypeToc from '@jsdevtools/rehype-toc';
import remarkSmartypants from '@silvenon/remark-smartypants';
import NextLink from 'next/link';
import MD from 'react-markdown';
import rehypeHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';

const components = {
  a({ href, title, children, ...props }) {
    const isAnchor = href.startsWith('#');
    const isSameDomain =
      !href.includes('http://') && !href.includes('https://');

    return !isAnchor && isSameDomain ? (
      <NextLink href={href} passHref {...props}>
        <a title={title}>{children}</a>
      </NextLink>
    ) : (
      <a href={href} title={title} {...props}>
        {children}
      </a>
    );
  }
};

export default function Markdown({ children }) {
  return (
    <MD
      components={components}
      remarkPlugins={[remarkSmartypants]}
      rehypePlugins={[rehypeSlug, rehypeHeadings, rehypeToc, rehypeRaw]}
    >
      {children}
    </MD>
  );
}
