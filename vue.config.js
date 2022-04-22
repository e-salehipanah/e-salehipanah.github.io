const { defineConfig } = require('@vue/cli-service')
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
        alias: {
            '@Components': path.resolve(__dirname, 'src/components')
        },
    },
}
})
