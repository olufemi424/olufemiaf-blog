import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../layouts/Layout";
import Head from "../components/head/Head";
import PostList from "../components/postList/PostListItem";
import { H1 } from "../styles/CommonStyles";

const BlogPage = ({ data }) => {
  if (!data) return <p>Shooooot! No data found!</p>;

  const postsList = data.allMarkdownRemark 
    && data.allMarkdownRemark.edges.map((post, i) => 
      ( <PostList key={i} post={post}></PostList> ));

  return (
    <Layout>
      <Head title="Blog" />
      <H1>Blog Posts</H1>
      <BlogListLayoutStyle>
        {postsList}
      </BlogListLayoutStyle>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          excerpt(pruneLength: 280)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
          }
          fields {
            slug
            image 
          }
        }
      }
    }
  }
`;


const BlogListLayoutStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export default BlogPage;
