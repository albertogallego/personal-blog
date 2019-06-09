import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';

const PageTemplate = ({ data }) => {
  const {
    title: siteTitle,
    subtitle: siteSubtitle,
    featuredImage: siteFeaturedImage,
    url: siteUrl,
  } = useSiteMetadata();
  const { html: pageBody } = data.markdownRemark;
  const {
    title: pageTitle,
    description: pageDescription,
    slug: pageSlug,
    featuredImage: pageFeaturedImage,
  } = data.markdownRemark.frontmatter;
  const metaDescription =
    pageDescription !== null ? pageDescription : siteSubtitle;
  const featuredImage = siteFeaturedImage || pageFeaturedImage;

  return (
    <Layout
      title={`${pageTitle} - ${siteTitle}`}
      description={metaDescription}
      image={featuredImage}
      url={siteUrl + pageSlug}
    >
      <Sidebar />
      <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        slug
        featuredImage
      }
    }
  }
`;

export default PageTemplate;
