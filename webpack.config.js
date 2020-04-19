const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {

                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ],
                exclude: /node_modules/,
            },
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
        minimize: true
    },
    resolve: {
        extensions: [ 'ts'],
    },
    output: {
        filename: "index.js",
        path: __dirname,
    },

};
