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
                        loader: "ts-loader",
                        options: {
                        }
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
        extensions: [ '.ts', '.js'],
    },
    output: {
        filename: "index.js",
        path: __dirname,
        libraryTarget: 'umd',
        library: 'MyLib',
        umdNamedDefine: true
    },
};
