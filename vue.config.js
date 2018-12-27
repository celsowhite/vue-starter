const path = require('path')

module.exports = {
  chainWebpack: config => {
    // Add global scss to scss within .vue files.
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  },
}

// Helper function to add the same global scss files to each type of vue module

function addStyleResource(rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/styles/base/_variables.scss'),
        path.resolve(__dirname, './src/styles/base/_mixins.scss')
      ]
    })
}