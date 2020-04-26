const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const entry = require('./props/entry');
const output = require('./props/output');
const { moduleBase } = require('./props/module');
const plugins = require('./props/plugins');

module.exports = (env) => {
    return {
        entry: entry(env),
        output: output(env),
        resolve: {
            extensions: ['.jsx', '.js'],
        },
        plugins: plugins(env).pluginsBase,
        module: moduleBase,
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    extractComments: true,
                }),
            ],
        },
    };
};
