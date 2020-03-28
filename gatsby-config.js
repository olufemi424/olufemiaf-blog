module.exports = {
  siteMetadata: {
    title: `Hi, I’m Olufemi. Full-stack web developer. BTech & MS Applied Computer Science.`,
    description: `I'm full stack developer with an eye for creative design, UI/UX development, Extensive knowledge of web applications and software development and a strong desire to learn and explore.`,
    descriptionSub: `Allow me to help you learn web development from zero to HERO, I will be sharing all the tips and trick of web development, resources and road maps to follow to land you your first job in the industy.`,
    author: `Olufemi Afolabi`,
    siteUrl: `https://olufemiaf.com/blog`,
    logo: `OlufemiAf`,
    social: {
      twitter: `fmafo`,
      instagram: `olufemiaf`,
      linkedin: `olufemiaf`,
      github: `olufemi424`,
      email: `olufemiaf@gmail.com`,
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `post`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `resources`,
        path: `${__dirname}/src/content/resources`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        root: __dirname,
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              maintainCase: true,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              offsetY: `100`,
              className: `custom-class`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noreferrer`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Nunito`,
            variants: [`200`, `400`, `400i`, `600`, `600i`, `700`],
          },
        ],
      },
    },
  ],
};
