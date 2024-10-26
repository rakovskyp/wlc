exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /src\/api/, // Exclude the api folder from being processed by Gatsby
        },
      ],
    },
  });
};
