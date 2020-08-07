const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withSASS = require('@zeit/next-sass');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

module.exports = withPlugins(
  [[withCSS], [withSASS], [withImages], [withFonts], [withMDX]],
  {
    pageExtensions: ['js', 'jsx', 'mdx'],
    webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      };

      return config;
    }
  }
);
