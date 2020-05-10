import * as webpackMerge from 'webpack-merge';
import common from './webpack.config.common';
import plugins from './props/plugins';

const devServer = {
    port: 9000,
    open: true,
};

module.exports = (env) =>
    webpackMerge(common(env), {
        devServer,
        devtool: 'inline-source-map',
        plugins: plugins(env).pluginsCustom,
    });
