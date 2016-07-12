
module.exports = {
  module: {
    loaders: [{
      test: /\.css?$/,
      loader: 'style-loader!css-loader'
    },
    {
      test: /\.(png|jpg|gif)$/,
      loader: "file-loader?name=img/img-[hash:6].[ext]"
    },
    {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["es2015", "stage-0"],
        "plugins": [
          "transform-decorators-legacy",
          ["transform-react-jsx", { "pragma": "Component.DOM" }]
        ]
      }
    }]
  }
};
