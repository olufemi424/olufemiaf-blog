import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/Layout";
import PostList from "../components/postList/PostListItem";
import { H1 } from "../styles/CommonStyles";

const BlogPage = ({ data }) => {
  if (!data) return <p>Shooooot! No data found!</p>;

  return (
    <Layout>
      <H1>Blog Posts</H1>
      {data.allMarkdownRemark &&
        data.allMarkdownRemark.edges.map(post => (
          <PostList post={post}></PostList>
        ))}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            date
            author
          }
          excerpt
        }
      }
    }
  }
`;

export default BlogPage;
