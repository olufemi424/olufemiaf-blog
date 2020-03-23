module.exports = {
  siteMetadata: {
    title:
      "Hi, I’m Olufemi, a full-stack web developer. BTech, MS Applied Computer Science.",
    description:
      "A full stack developer with an eye for creative design, UI/UX development, Extensive knowledge of web applications and software development and a strong desire to learn and explore. If you are trying to learn wed development from zero to HERO, I will be sharing all the tips and trick of web development, resources and road maps to follow to land you your first job in the industy.",
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
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "post",
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "resources",
        path: `${__dirname}/src/content/resources`,
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
