// Specify special layout file for index page
exports.onCreatePage = async ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators
  
    return new Promise((resolve, reject) => {
      if (!page.path.match(/^\/$/)) {
          page.layout = 'layout'
      }
      
      createPage(page)
      resolve()
    })
  }
  