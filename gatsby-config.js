module.exports = {
  // SHARED DATA
  siteMetadata: {
    title: "GKO95's GitHub Pages",
    author: {name: "Gihwan Ko", user: "GKO95", email: "Gihwan.Ko@hotmail.com"},
    description: "Personal GitHub Pages for archiving and blogging."
  },
  // GATSBY PLUGINS
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `./src/docs/`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    }
  ],
  // ADD OPTIONS HERE...
};
