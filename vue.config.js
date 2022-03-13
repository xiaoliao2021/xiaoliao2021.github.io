const path = require('path')
module.exports = {
  publicPath: './',
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@utils": path.resolve(__dirname, "./src/static/utils"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@views": path.resolve(__dirname, "./src/views"),
        "@store": path.resolve(__dirname, "./src/store"),
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  }
  // chainWebpack: config => {
  //   config.resolve.alias.set('@utils', path.resolve('./src/static/utils')); 
  // },

}
