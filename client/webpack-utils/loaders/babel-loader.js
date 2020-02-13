module.exports = {
    test: /\.(jsx|tsx|js|ts)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            exclude: /node_modules/,
            presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript"
            ]
        }
    }
}

