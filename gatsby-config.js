module.exports = {
  // pathPrefix: "/hayato818",
  siteMetadata: {
    title: `Portfolio`,
    description: `九工大4年の20卒エンジニアの自己紹介サイトです。`,
    author: `Hayato OKUMA`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F2F2F2`,
        theme_color: `#2F3B4B`,
        display: `minimal-ui`,
        icon: `src/images/oh-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
