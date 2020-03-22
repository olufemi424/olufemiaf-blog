const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    // This is where we add our own custom fields to each node

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.fields.slug}`,
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        slug: edge.node.fields.slug,
      },
    });
  });
};
