import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../layouts/Layout";
import MdStyle from "../styles/mdStyle";

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      fileAbsolutePath
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
        category
      }
      body
    }
  }
`;

const Blog = ({ data, pageContext, scope }) => {
  const { site, mdx: post } = data;
  return (
    <Layout>
      {/* <MdStyle /> */}
      <article className="markdown-body">
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.author}</p>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          style={{ fontSize: "2rem" }}
          dangerouslySetInnerHTML={{ __html: post.body }}
        ></section>
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {pageContext.prev && (
              <Link
                to={`/blog/${pageContext.prev.node.fields.slug}`}
                rel="prev"
              >
                ← {pageContext.prev.node.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {pageContext.next && (
              <Link
                to={`/blog/${pageContext.next.node.fields.slug}`}
                rel="next"
              >
                {pageContext.next.node.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Blog;
