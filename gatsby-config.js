/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/gatsby-blog-tutorial",
  siteMetadata: {
    title: `My First Gatsby Site`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "blog", path: `${__dirname}/blog` },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
