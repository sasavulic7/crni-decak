import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "./data/blogPosts";
import styles from "./Blog.module.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className={styles.blogContainer}>
        <h1 className={styles.title}>Najnoviji Blog Postovi</h1>
        <div className={styles.posts}>
          {blogPosts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <h2 className={styles.postTitle}>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className={styles.postDescription}>{post.description}</p>
              <p className={styles.postAuthor}>Autor: {post.author}</p>
              <p className={styles.postDate}>{post.date}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
