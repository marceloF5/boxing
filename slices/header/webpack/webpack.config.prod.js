const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const { pluginProd } = require('./props/plugins');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: pluginProd,
});
