/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path");
module.exports = {
  /* Your site config here */
  assetPrefix: 'http://weatherapiapp.epizy.com/',
  siteMetadata: {
    title: 'WeatherApp',
    description: 'Sample Gatsby App',
    siteUrl: 'http://weatherapiapp.epizy.com/',
  },
  plugins: ["gatsby-plugin-root-import"],
}
