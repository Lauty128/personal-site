import fs from "fs";
import path from "path";
import matter from "gray-matter";
//import { serialize } from "next-mdx-remote/serialize";
import readingTime from "reading-time";
//import mdxPrism from "mdx-prism";
//import remarkGfm from "remark-gfm";

const root = process.cwd();

export const getFiles = async (type) =>
  fs.readdirSync(path.join(root, "projects", type));

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(path.join(root, "projects", `${slug}.mdx`), "utf8")

  const { data, content } = await matter(mdxSource);

  // const source = await serialize(content, {
  //   mdxOptions: {
  //     remarkPlugins: [require("remark-code-titles"), remarkGfm],
  //     rehypePlugins: [mdxPrism],
  //   }
  // });

  return {
    source: content,
    frontmatter: {
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
};

export const getAllFilesFrontMatter = async () => {
  const files = fs.readdirSync(path.join(root, "projects"));
  
  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "projects", postSlug),
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