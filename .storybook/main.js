const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    // do mutation to the config
    return Object.assign(config, {
      resolve: {
        alias: {
          Style: path.resolve(__dirname, '../src/style'),
        },
        extensions: ['.js', '.jsx'],
      }
    });
  },
};
