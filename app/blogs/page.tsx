import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Home() {
  let posts = [];
  const postsDirectory = path.join(process.cwd(), 'posts');

  try {
    const filenames = fs.readdirSync(postsDirectory);
    posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: filename.replace('.md', ''),
        title: data.title,
      };
    });
  } catch (error) {
    console.error('Error reading posts directory:', error.message);
  }

  return (
    <main>
      <h1 className='text-black text-6xl'>All Blog Posts</h1>
      {posts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
