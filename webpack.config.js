const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = function() {
    return {
        entry: {
            'a': './src/js/a',
            'b': './src/js/b'
        },
        output: {
            filename: 'js/[name].[chunkhash].js',
            path: path.resolve(__dirname, 'build'),
            chunkFilename: 'js/[name].chunk.[chunkhash].js'
        },
        module: {
            rules: [{
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: [{
                    loader: 'babel-loader'
                }]
            }]
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
	                    chunks: 'initial',
	                    name: 'vendor',
	                    test: module => /node_modules/.test(module.context),
	                    enforce: true
                    }

                }
            }
        },
        plugins: [
            new cleanWebpackPlugin(path.resolve(__dirname, 'build')),
            new htmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                filename: __dirname + '/build/index.html',
                hash: true,
                chunks: ['a', 'b','vendor']
            })
        ],
        devServer: {
            port: 8900,
            stats: {
                colors: true
            }
        }
    }
}
