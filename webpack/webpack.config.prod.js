const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const plugins = require('./props/plugins');

module.exports = (env) =>
    merge(common(env), {
        devtool: 'source-map',
        plugins: plugins(env).pluginProd,
    });
