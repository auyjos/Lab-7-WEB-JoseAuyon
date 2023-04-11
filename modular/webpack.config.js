const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
   index: './src/index.js',
   appIndex : './src/appIndex.js',
   pop: './src/Paginas/Librospopulares/pop.js',
   lanzamientos: '/src/Paginas/Nuevoslanzamientos/lanzamientos.js',
   extra : './src/extra.js',
   historia: './src/Paginas/Nuevoslanzamientos/historia.js',
   myTemplate: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist_webpack_babel'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css", 
    }), 
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['appIndex']
    }),
    new HtmlWebpackPlugin({
        template: './src/extra.html',
        filename: 'extra.html',
       chunks: ['extra']
      }),
      new HtmlWebpackPlugin({
        template: './src/Paginas/Librospopulares/libros-populares.html',
        filename: 'libros-populares.html',
        chunks:['pop']
      }),
      new HtmlWebpackPlugin({
        template: './src/Paginas/Nuevoslanzamientos/nuevos-lanzamientos.html',
        filename: 'nuevos-lanzamientos.html',
        chunks: ['lanzamientos']
      }),
      new HtmlWebpackPlugin({
        template: './src/Paginas/Nuevoslanzamientos/historia.html',
        filename: 'historia.html',
       chunks: ['historia']
      }),
      new HtmlWebpackPlugin({
        template: './src/Paginas/Nuevoslanzamientos/historia1.html',
        filename: 'historia1.html',
       chunks: ['historia']
      }),
      new HtmlWebpackPlugin({
        template: './src/Paginas/Nuevoslanzamientos/historia2.html',
        filename: 'historia2.html',
       chunks: ['historia']
      }),
      new HtmlWebpackPlugin({
        template: './src/Paginas/Nuevoslanzamientos/historia3.html',
        filename: 'historia3.html',
        chunks: ['historia']
      }),
      new HtmlWebpackPlugin({
        template: './src/Paginas/Nuevoslanzamientos/historia4.html',
        filename: 'historia4.html',
        chunks: ['historia']
      }),
],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
           "css-loader",
           "sass-loader"]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
           "css-loader"
          ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ogg|mp3|wav)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      }
    ],
  },
};