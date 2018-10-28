const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, args) => ({
  devtool: 'source-map',
  output: {
    filename: args.mode !== 'production' ? 'app.js' : 'app.[hash].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new StyleLintPlugin({
      configFile: './.stylelintrc.json',
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      filename: args.mode !== 'production' ? 'app.css' : 'app.[hash].css',
      chunkFilename: args.mode !== 'production' ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader', {
          loader: 'eslint-loader',
          options: {
            fix: true
          }
        }]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },{
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                 path: path.resolve(__dirname, './postcss.config.js')
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api*': 'http://localhost:8181'
    }
  }
});
