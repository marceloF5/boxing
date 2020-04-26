const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const plugins = require('./props/plugins');

const devServer = {
    port: 9000,
    open: true,
};

module.exports = (env) =>
    merge(common(env), {
        devServer,
        devtool: 'inline-source-map',
        plugins: plugins(env).pluginsCustom,
    });
