const sass = require('@stencil/sass');

exports.config = {
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/styles/_variables.scss',
        'src/styles/_mixins.scss'
      ]
    })
  ],
  outputTargets: [
    {
      type: 'www',
      serviceWorker: {
        swSrc: 'src/sw.js',
        globPatterns: [
          '**/*.{html,js,css,json,ico,png}'
        ]
      }
    }
  ],
  globalStyle: 'src/styles/main.scss',
  enableCache: false
};

exports.devServer = {
  root: 'www',
  httpPort: '$PORT',
  watchGlob: '**/**'
};
