const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md");
    const pa_th= `../../static${node.frontmatter.image}`;

    const { frontmatter } = node
    if (frontmatter) {
      const { image } = frontmatter
      if (image) {
          frontmatter.image = path.relative(
            path.dirname(node.fileAbsolutePath),
            path.join(__dirname, '/static/', image)
          )
      }
    }

    // This is where we add our own custom fields to each node

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });

    createNodeField({
      node,
      name: "image",
      value: pa_th,
    });
  }
};

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");

  const res = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
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

  if (res.errors) {
    throw res.errors;
  }

  // Create blog posts pages.
  const posts = res.data.allMarkdownRemark.edges;

  posts.forEach((post, index) => {
    const next = index === posts.length - 1 ? null : posts[index + 1].node;
    const previous = index === 0 ? null : posts[index - 1].node;
    createPage({
      component: blogTemplate,
      path: `/blog/${post.node.fields.slug}`,
      // Data passed to context is available
      // in page queries as GraphQL variables.
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });
};
