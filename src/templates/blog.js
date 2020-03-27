import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layouts/Layout";
import MdStyle from "../styles/mdStyle";

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
          <li>
            {pageContext.previous && (
              <Link to={`/blog/${pageContext.previous.fields.slug}`} rel="prev">
                ← {pageContext.previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
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
