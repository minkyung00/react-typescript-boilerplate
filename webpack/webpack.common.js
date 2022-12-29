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
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".ts", ".tsx"],
  },
};

export default commonConfig;
