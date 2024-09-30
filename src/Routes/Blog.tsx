import { useState } from "react";
import Blog_mdx from "./Blog_mdx.mdx";
import styles from "../Styles/Blog.module.css";
export const Blog = () => {
  const [blog, set_blog] = useState("");
  return (
    <>
      <section className={styles.blog_container}>
        <Blog_mdx />
      </section>
    </>
  );
};
