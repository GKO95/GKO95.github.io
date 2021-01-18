module.exports = {
  // SHARED DATA
  siteMetadata: {
    title: "GKO95's GitHub Pages",
    author: {name: "GKO95", email: "Gihwan.Ko@hotmail.com"},
    description: "Personal GitHub Pages for archiving and blogging."
  },
  // GATSBY PLUGINS
  plugins: [
    "gatsby-plugin-sass",
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
