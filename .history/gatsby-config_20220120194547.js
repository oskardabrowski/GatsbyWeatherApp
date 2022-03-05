/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require("path");
module.exports = {
  /* Your site config here */
  assetPrefix: 'http://localhost:8080/weatherNewApp/public/',
  siteMetadata: {
    title: 'WeatherApp',
    description: 'Sample Gatsby App',
    siteUrl: 'http://localhost:8080/weatherNewApp/public/',
  },
  plugins: [{
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src", "web", "components"),
      },
    },],
}
