const path = require('path');
const Dotenv = require('dotenv-webpack');
const next_config = {
  webpack: (config, { isServer }) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })

      
    ];

    if (!isServer) {
        config.node = {
            fs: 'empty'
        }
    }

    return config;
  },
}

module.exports = {...next_config};