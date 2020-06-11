import * as webpack from 'webpack';
import getBabelPlugins from '../helpers/getBabelPlugins';
import getEntries from '../helpers/getEntries';
import { ConfigurationFunction } from '../types/ConfigurationFunction';

const createConfig: ConfigurationFunction = (_paths, options) => {
    const config: webpack.Configuration = {
        target: 'web',
        entry: getEntries(options.entries),
        resolve: {
            extensions: ['.jsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /(\.js(x?)$|\.ts(x?)$)/,
                    // include: [
                    //     // /@boxing.*/,
                    //     // /@boxing(\/|\\)slice-.*/,
                    //     paths.projectSourceDir,
                    // ],
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                            ],
                            cacheDirectory: true,
                            plugins: getBabelPlugins(options, {
                                isClient: true,
                            }),
                        },
                    },
                },

                {
                    test: /\.(jpe?g|png|svg)$/,
                    use: 'file-loader',
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: 'file-loader',
                },
            ],
        },
    };

    return config;
};

export default createConfig;
