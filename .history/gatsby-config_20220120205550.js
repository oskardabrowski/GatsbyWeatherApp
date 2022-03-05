/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path");
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'WeatherApp',
    description: 'Sample Gatsby App',
    siteUrl: 'http://weatherapiapp.epizy.com/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
  ],
}
