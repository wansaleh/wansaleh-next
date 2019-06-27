const compose = require('lodash/fp/compose');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withImages = require('next-images');

module.exports = compose([withSASS, withCSS, withImages])({
  // target: 'serverless',
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    return config;
  }
});
