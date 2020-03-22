module.exports = {
  siteMetadata: {
    title: "Welcome to my Blog",
    description: "Indie road map.",
    author: "Olufemi Afolabi",
    siteUrl: "https://olufemiaf.com/blog",
    logo: "OlufemiAf",
    social: {
      twitter: "fmafo",
      instagram: "olufemiaf",
      linkedin: "olufemiaf",
      github: "olufemi424",
      email: "olufemiaf@gmail.com",
    },
    // name of the image for social website share, should be in static folder
    imageShare: "share.jpg",
  },
  plugins: [
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noreferrer",
            },
          },
        ],
      },
    },
  ],
};
