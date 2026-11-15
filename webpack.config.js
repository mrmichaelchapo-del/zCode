
const path = require("path");

module.exports = {
  entry: "./src/main.tsx",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "zcode.js",
    clean: true
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", {
                runtime: "automatic"
              }],
              "@babel/preset-typescript"
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"]
      }
    ]
  },

  devServer: {
    static: "./dist",
    port: 3000,
    hot: true
  },

  mode: "development"
};
