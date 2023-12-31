import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const root = process.cwd();

export const getFiles = async (type, directory) =>
  fs.readdirSync(path.join(root, directory, type));

export const getFileBySlug = async (directory, slug) => {
  const mdxSource = fs.readFileSync(path.join(root, directory, `${slug}.mdx`), "utf8")

  const { data, content } = await matter(mdxSource);

  return {
    source: content,
    frontmatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async (directory) => {
  const files = fs.readdirSync(path.join(root, directory));
  
  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, directory, postSlug),
      "utf8"
    );
    const { data } = matter(mdxSource);

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ];
  }, []);
};