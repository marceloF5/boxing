import * as webpackMerge from 'webpack-merge'
import common from './webpack.config.common'
import plugins from './props/plugins'

export default (env) =>
    webpackMerge(common(env), {
        devtool: 'source-map',
        plugins:
            typeof env.slice !== 'boolean'
                ? plugins(env).pluginsBase
                : plugins(env).pluginsCustom,
    });
