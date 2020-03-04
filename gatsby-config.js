module.exports = {
  siteMetadata: {
    title: `JailBird`,
    description: `Play the party card game everyone is squawking about!`,
    author: `JailBird Game`,
    url: "https://jailbirdgame.com", // No trailing slash allowed!
    image: "/img/OG_Image.png",
  },
  plugins: [
    {
      resolve: `pixel`,
      options: {
        pixelId: "776884219480024",
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
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
        name: `JailBird`,
        short_name: `JailBird`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
