const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const plugins = require('./props/plugins');

module.exports = (env) =>
    merge(common(env), {
        devtool: 'source-map',
        plugins:
            typeof env.slice !== 'boolean'
                ? plugins(env).pluginsBase
                : plugins(env).pluginsCustom,
    });
