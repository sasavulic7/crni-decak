import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "./data/blogPosts";
import styles from "./BlogPost.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Blog post nije pronađen.</p>;
  }

  return (
    <>
      <Navbar />
      <div className={styles.postContainer}>
        <h1 className={styles.postTitle}>{post.title}</h1>
        <p className={styles.postAuthor}>Autor: {post.author}</p>
        <p className={styles.postDate}>{post.date}</p>

        {/* Prikaz slike, ako postoji */}
        {post.image && (
          <img src={post.image} alt={post.title} className={styles.postImage} />
        )}

        <div className={styles.postContent}>{post.content}</div>

        {/* Prikaz filmova, ako postoje */}
        {post.movies && (
          <div className={styles.moviesList}>
            <h2>Preporučeni Horor Filmovi:</h2>
            {post.movies.map((movie, index) => (
              <div key={index} className={styles.movie}>
                <h3 className={styles.movieTitle}>{movie.title}</h3>
                <img
                  src={movie.image}
                  alt={movie.title}
                  className={styles.movieImage}
                />
                <p>{movie.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
