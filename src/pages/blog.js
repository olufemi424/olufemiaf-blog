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
          excerpt
          fields {
            collection
            slug
          }
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`;

// // Post list
// const PostListItemCard = styled.div`
//   padding: 3rem 2.5rem;
//   margin: 3rem 0;
//   border-left: 5px solid var(--primary);
//   background-color: var(--white);
//   border-radius: 0 1rem 1rem 0;
//   box-shadow: 0 0 1px 1px rgba(20,23,28,.1), 0 3px 1px 0 rgba(20,23,28,.1);
// }

//   :hover{
//     background-color: grey;
//     color: white;
//   }

//   a {
//     text-decoration:none;
//     color:var(--black);
//   }

//   h1 {
//     font-size: 2.4rem;
//     margin-bottom: 2rem;
//   }

//   .post-details-group {
//     display: flex;
//     align-items: center;
//     margin-bottom:2rem;
//   }

//   .post-author {
//     font-size: 1.5rem;
//     margin-right:2rem;
//   }

//   .post-date {
//     font-size: 1.4rem;
//   }

//   .post-excerpt {
//     font-size: 1.5rem;
//   }
// `;

// const PostList = ({ post }) => {
//   console.log(post.node.fields.slug);
//   return (
//     <PostListItemCard>
//       <Link to={`/blog${post.node.fields.slug}`}>
//         <h1>{post.node.frontmatter.title}</h1>
//         <div className="post-details-group">
//           <p className="post-author">
//             <span role="img" aria-label="creator">
//               📝
//             </span>{" "}
//             {post.node.frontmatter.author}
//           </p>
//           <p className="post-date">
//             <span role="img" aria-label="date">
//               📆
//             </span>
//             {post.node.frontmatter.date}
//           </p>
//         </div>
//         <p className="post-excerpt">{post.node.excerpt}</p>
//       </Link>
//     </PostListItemCard>
//   );
// };

export default BlogPage;
