import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({ title, src, slug, height, width }) {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      layout="responsive"
      width={width}
      height={height}
      css={{ objectFit: 'cover' }}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
