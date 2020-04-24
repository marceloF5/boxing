const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const entry = require('./props/entry');
const { outputBase } = require('./props/output');
const { moduleBase } = require('./props/module');
const { pluginsBase } = require('./props/plugins');

module.exports = {
    entry,
    output: outputBase,
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    plugins: pluginsBase,
    module: moduleBase,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                extractComments: true,
            }),
        ],
    },
};
