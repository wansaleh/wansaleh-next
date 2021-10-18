export interface PostType {
  id: string;
  publishedAt: Date;
  firstPublishedAt: Date;
  date: Date;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  content: string;
  coverImage: CoverImageType;
  sysTags: SysTagType[];
}

export interface CoverImageType {
  url: string;
  title: string;
  description: string;
}

export interface SysTagType {
  id: string;
  name: string;
}

export interface TagType {
  slug: string;
  name: string;
  description: string;
}
