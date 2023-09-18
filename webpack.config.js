const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
    mode: "development",
    devtool: 'inline-source-map',
    optimization: {
        usedExports: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets:[ ["@babel/preset-react", {"runtime": "automatic"} ]]
                }
              }
            }
        ],
    }
};
