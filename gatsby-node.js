const Promise = require('bluebird')
const path = require('path')
const talksJSON = require('./src/contents/talks.json');

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve('src/templates/ProductPage.js')
    resolve(
      graphql(
        `
          {
            allMoltinProduct {
              edges {
                node {
                  id
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        talksJSON.forEach(edge => {
          console.log({ edge });
          createPage({
            path: `/product/${edge.id}/`,
            component: productPageTemplate,
            context: {
              id: edge.id,
            },
          })
        })
      }),
    )
  })
}

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    node: {fs: 'empty'},
  })
}
