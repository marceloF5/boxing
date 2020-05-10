import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import entry from './props/entry'
import output from './props/output'
import moduleBase from './props/module'
import plugins from './props/plugins'

export default (env) => {
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
