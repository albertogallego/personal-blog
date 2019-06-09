import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Post from '../components/Post';
import { useSiteMetadata } from '../hooks';

const PostTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    featuredImage: siteFeaturedImage,
    url: siteUrl,
  } = useSiteMetadata();
  const {
    title: postTitle,
    description: postDescription,
    featuredImage: postFeaturedImage,
    slug: postSlug,
  } = data.markdownRemark.frontmatter;
  const metaDescription = postDescription || siteSubtitle;
  const featuredImage = postFeaturedImage || siteFeaturedImage;

  return (
    <Layout
      title={`${postTitle} - ${siteTitle}`}
      description={metaDescription}
      image={featuredImage}
      url={siteUrl + postSlug}
    >
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date
        description
        tags
        title
        featuredImage
        slug
      }
    }
  }
`;

export default PostTemplate;
