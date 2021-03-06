var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');
var path = require('path');

var compile = webpack(config);
var server = new WebpackDevServer( compile, {
        hot: true,
        filename: config.output.filename,
        publicPath: config.output.publicPath,
        stats: {
            colors:true
        }
    });

server.listen(8080, '0.0.0.0', function() {});