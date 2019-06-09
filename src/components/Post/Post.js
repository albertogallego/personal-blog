import React from 'react';
import { Link } from 'gatsby';
import Comments from './Comments';
import Content from './Content';
import styles from './Post.module.scss';

const Post = ({ post }) => {
  const { html } = post;
  const { slug } = post.fields;
  const { title } = post.frontmatter;

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        ← Go home
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  );
};

export default Post;
