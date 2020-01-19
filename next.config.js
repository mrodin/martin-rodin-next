const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: config => {
    config.resolve.alias["enums"] = path.join(__dirname, "enums");

    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
};
