import paths from "./config/paths.js";

const commonConfig = {
  target: ["web", "browserslist"],
  entry: {
    app: paths.src,
  },
  output: {
    path: paths.build,
    filename: "[name].bundle.js",
    assetModuleFilename: "assets/[name].[contenthash][ext][query]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: { version: 3, proposals: true },
                  useBuiltIns: "usage",
                  shippedProposals: true,
                },
              ],
              "@babel/preset-typescript",
              "@babel/preset-react",
            ],
          },
        },
        exclude: /(node_modules)/,
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".ts", ".tsx"],
  },
};

export default commonConfig;
