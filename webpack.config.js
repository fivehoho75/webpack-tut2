var path = require('path');
var webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV == 'development';
const PRODUCTION = process.env.NODE_ENV == 'production';

var entry = PRODUCTION ? 
    ['./src/index.js'] :
    [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://0.0.0.0:8080'
    ];

var plugins = PRODUCTION ? 
    [
        new webpack.optimize.UglifyJsPlugin({
            comments: true,
            mangle: false,
            compress: {
                warnings: true
            }
        })
    ] : [new webpack.HotModuleReplacementPlugin()];

module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        loaders: [{
            test: /\.js$/,
            loader: ['babel-loader'],
            exclude: '/node_modules/'
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    }
};