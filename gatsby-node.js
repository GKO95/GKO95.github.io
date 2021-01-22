exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const result = await graphql(`
      {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___language, frontmatter___order] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: require.resolve(`./src/templates/mdTemplate.js`),
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }