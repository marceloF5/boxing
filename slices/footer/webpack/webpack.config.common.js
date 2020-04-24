const entry = require('./props/entry');
const { output_base } = require('./props/output');
const { module_base } = require('./props/module');
const { plugins_base } = require('./props/plugins');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry,
    output: output_base,
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    plugins: plugins_base,
    module: module_base,
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                extractComments: true,
            }),
        ],
    },
};
