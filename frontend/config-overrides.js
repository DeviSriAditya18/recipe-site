const path = require('path');

module.exports = {
  webpack: function (config, env) {
    // Modify output directory and filename
    config.output.path = path.resolve(__dirname, 'dist');
    config.output.filename = 'index.js'; // Or whatever name you prefer
    return config;
  }
};
