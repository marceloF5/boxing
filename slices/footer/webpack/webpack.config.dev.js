const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const devServer = {
    port: 9000,
    open: true,
};

module.exports = merge(common, {
    devServer,
    devtool: 'inline-source-map',
});
