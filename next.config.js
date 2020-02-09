const withCSS = require("@zeit/next-css");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = withCSS({
    webpack: config => {
        config.resolve.extensions.push(".js", ".jsx", ".ts", ".tsx");

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
});
