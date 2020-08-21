require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    // `gatsby-plugin-sass`,
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
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://jailbirdgame.us17.list-manage.com/subscribe/post?u=ad1f1361023c30168ff5c93be&amp;id=4216a066e3", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src:
          "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
