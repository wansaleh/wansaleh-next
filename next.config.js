const compose = require('lodash/fp/compose');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');

module.exports = compose([withCSS, withImages])({
  // target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
});
