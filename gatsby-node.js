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

// Add redirect for iOS app store link
exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/ios`,
    toPath: `https://apps.apple.com/us/app/soul-feel-heal-connect/id6741874801`,
    isPermanent: true,
    force: true,
  });
};
