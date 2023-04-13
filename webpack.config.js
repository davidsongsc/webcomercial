const path = require('path');

module.exports = {
  // ...
  output: {
    // ...
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  // ...
  plugins: [
    // ...
    new CopyPlugin({
      patterns: [
        { from: 'src/service-worker.js', to: 'service-worker.js' },
      ],
    }),
  ],
  // ...
};
