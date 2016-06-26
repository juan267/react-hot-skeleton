const webpack = require('webpack')
const webpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config.dev')

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
}).listen(3000, 'localhost', (err, results) => {
  if (err) {
    return console.log(err)
  }

  console.log('Server listening on port 3000')
})
