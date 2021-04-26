const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const withImages = require('next-optimized-images');

module.exports = withPlugins(
  [
    [
      withImages,
      {
        svgo: {
          plugins: [{ cleanupIDs: false }]
        }
      }
    ],
    [withFonts]
  ],
  {
    images: {
      domains: [
        'is1-ssl.mzstatic.com',
        'is2-ssl.mzstatic.com',
        'is3-ssl.mzstatic.com',
        'is4-ssl.mzstatic.com',
        'is5-ssl.mzstatic.com',
        'i.scdn.co',
        'i.ytimg.com',
        'res.cloudinary.com'
      ]
    },
    webpack: (config) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      };

      return config;
    }
  }
);
