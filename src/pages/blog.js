import React from "react";
import { graphql, Link } from "gatsby";
// import styled from "styled-components";
import Layout from "../layouts/Layout";
import PostList from "../components/postList/PostListItem";
import { H1 } from "../styles/CommonStyles";

const BlogPage = ({ data }) => {
  if (!data) return <p>Shooooot! No data found!</p>;
  const { site, allMdx } = data;

  return (
    <Layout>
      <H1>Blog Posts</H1>
      {allMdx &&
        allMdx.edges.map((post, i) => (
          <PostList key={i} post={post}></PostList>
        ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      filter: { fields: { collection: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt(pruneLength: 400)
          fields {
            collection
            slug
          }
          frontmatter {
            title
            date
            author
            category
          }
        }
      }
    }
  }
`;

export default BlogPage;
