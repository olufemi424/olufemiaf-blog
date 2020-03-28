const path = require("path");

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    // This is where we add our own custom fields to each node
    const slug = path.basename(node.fileAbsolutePath, ".md");

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug ? `/${node.frontmatter.slug}/` : slug,
    });

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPost = path.resolve("./src/templates/blog.js");

  const { errors, data } = await graphql(`
    query {
      allMdx(
        filter: { fields: { collection: { eq: "post" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            body
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw new Error("There was an error in gatsby.js 1");
  }

  // Create blog posts pages.
  const posts = data.allMdx.edges;

  posts.forEach((post, index) => {
    const prev = posts[index - 1];
    const next = posts[index + 1];

    const slug = post.node.fields.slug;

    createPage({
      component: blogPost,
      path: `blog${slug}`,
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        slug: slug,
        prev,
        next,
      },
    });
  });
};
