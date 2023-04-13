module.exports = {
    globDirectory: './',
    globPatterns: ['**/*.{html,css,js}'],
    swDest: './sw.js',
    runtimeCaching: [{
      urlPattern: /https:\/\/jsonplaceholder\.typicode\.com\/todos/,
      handler: 'StaleWhileRevalidate'
    }]
  };
  