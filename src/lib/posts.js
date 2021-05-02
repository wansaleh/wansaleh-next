import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const postsDirectory = join(process.cwd(), 'src/_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const {
    data: { date, ...data },
    content
  } = matter(fileContents);

  // Ensure only the minimal needed data is exposed
  const items = fields.reduce((out, field) => {
    if (field === 'slug') {
      out[field] = realSlug;
    }
    if (field === 'date') {
      out[field] = date.toISOString();
    }
    if (field === 'content') {
      out[field] = content;
    }
    if (data[field]) {
      out[field] = data[field];
    }
    return out;
  }, {});

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      Date.parse(post1.date) > Date.parse(post2.date) ? -1 : 1
    );
  return posts;
}
