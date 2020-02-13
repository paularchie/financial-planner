const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = [
    new UglifyJsPlugin({
        uglifyOptions: {
            mangle: false,
            output: {
                beautify: true
            }
        },
    })
];

