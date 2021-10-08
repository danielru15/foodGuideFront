module.exports = {
  siteMetadata: {
    title: `Happyfoodie.co`,
    description: `las mejores recomendaciones de comida en medellin`,
    author: `Happyfoodie.co`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'https://my-food-guides.herokuapp.com',
        queryLimit: 1000, // Defaults to 100
        collectionTypes: ['restaurantes', 'ubicacion', 'categorias'],
        singleTypes: ['inicio'],
      },
    },
      // {
      // resolve: `gatsby-plugin-manifest`,
      // options: {
      // name: `gatsby-starter-default`,
      // short_name: `starter`,
      //start_url: `/`,
      //background_color: `#663399`,
      //theme_color: `#663399`,
      //display: `minimal-ui`,
      // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      //  },
      //},
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
