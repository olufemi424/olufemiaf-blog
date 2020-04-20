import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts/Layout";
import Head from "../components/head/Head";
import PostList from "../components/postList/PostListItem";
import { H1 } from "../styles/CommonStyles";

const BlogPage = ({ data }) => {
  if (!data) return <p>Shooooot! No data found!</p>;

  return (
    <Layout>
      <Head title="Blog" />
      <H1 style={{ textAlign: "center" }}>Blog Posts</H1>
      <BlogListLayoutStule>
        {data.allMarkdownRemark &&
          data.allMarkdownRemark.edges.map((post, i) => (
            <PostList key={i} post={post}></PostList>
          ))}
      </BlogListLayoutStule>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const BlogListLayoutStule = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export default BlogPage;
