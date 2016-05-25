var webpack = require('webpack')

module.exports = {
  entry: {
  	"test":[
  				"./services/ServicePool.js",
  				"./services/allServices.js",
  				"./services/post.js",
  				"./services/qq.js"
  			]
  },
  output: {
    path: __dirname+"/test",
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: require.resolve("./jquery/jquery"), loader: "expose?$!expose?jQuery" }
    ]
  }
}