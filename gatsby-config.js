/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({ path: `.env` });

module.exports = {
  siteMetadata: {
    title: `soul`,
    siteUrl: `https://www.heartandsoul.nyc`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    // "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-meta-redirect",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-LRHCWF4QXW"],
        gtagConfig: {
          optimize_id: "OPT_CONTAINER_ID",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
  ],
};
