const withPlugins = require('next-compose-plugins');
// const withFonts = require('next-fonts');
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
    ]
    // [withFonts]
  ],
  {
    future: {
      webpack5: true
    },
    images: {
      domains: [
        'res.cloudinary.com',
        'media.graphcms.com',
        'is1-ssl.mzstatic.com',
        'is2-ssl.mzstatic.com',
        'is3-ssl.mzstatic.com',
        'is4-ssl.mzstatic.com',
        'is5-ssl.mzstatic.com',
        'i.scdn.co',
        'i.ytimg.com'
      ]
    }
  }
);
