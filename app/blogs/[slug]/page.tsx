import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const postsDirectory = path.join(process.cwd(), 'app', 'posts');

// This function is required to generate paths for each blog post at build time
export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => {
    return {
      slug: filename.replace('.md', ''),
    };
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <main>
      <h1>{data.title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
