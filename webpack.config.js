const path = require('path')
const webpack = require('webpack')

const DEBUG = process.env.NODE_ENV !== 'production'

module.exports = {
  devtool: DEBUG ? '#inline-source-map' : 'source-map',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    pathinfo: true,
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },{
      test: /\.(css|scss)$/,
      loaders: ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap&sourceComments"]
    },{
      test: /\.json$/,
      loader: 'json-loader'
    },{
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
      loader: 'file-loader',
      query: {
        name: 'static/media/[name].[hash:8].[ext]'
      }
    },{
      test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
      loader: 'url-loader',
      query: {
        limit: 10000,
        name: 'static/media/[name].[hash:8].[ext]'
      }
    }]
  },
  devServer: {
    port: 3031,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  plugins: [
    ()=>new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(DEBUG?'development':'production')
      }
    }),
    ()=>DEBUG && new webpack.NoEmitOnErrorsPlugin(),
    ()=>!DEBUG && new webpack.optimize.DedupePlugin(),
    ()=>!DEBUG && new webpack.optimize.UglifyJsPlugin({
      compress: {
        'screw_ie8': true,
        warnings: false
      },
      mangle: {
        'screw_ie8': true
      },
      output: {
        comments: false,
        'screw_ie8': true
      }
    })
  ].map(x=>x()).filter(x=>x)
}
