const path = require('path');

module.exports = {
  webpack: function (config, env) {
    // Adding polyfill for Node.js core modules like 'stream'
    config.resolve.fallback = {
      ...config.resolve.fallback,
      stream: require.resolve('stream-browserify')
    };

    // Customizing the output directory and filename
    config.output = {
      ...config.output,
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',  // You can change this to whatever filename you need
    };

    return config;
  }
};
