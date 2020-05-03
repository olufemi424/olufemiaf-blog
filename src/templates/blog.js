import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/Layout";
import MdStyle from "../styles/mdStyle";
import Head from "../components/head/Head";

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`;

const Blog = props => {
  const { data, pageContext } = props;
  console.log(pageContext);
  return (
    <Layout>
      <Head title={data.markdownRemark.frontmatter.title} />
      <MdStyle />
      <article className="markdown-body">
        <header>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <p>{data.markdownRemark.frontmatter.author}</p>
          <p>{data.markdownRemark.frontmatter.date}</p>
        </header>
        <section
          style={{ fontSize: "2rem" }}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
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
          <li
            style={{
              padding: "10px",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            {pageContext.previous && (
              <Link to={`/blog/${pageContext.previous.fields.slug}`} rel="prev">
                ← {pageContext.previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li
            style={{
              padding: "10px",
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            {pageContext.next && (
              <Link to={`/blog/${pageContext.next.fields.slug}`} rel="next">
                {pageContext.next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default Blog;
