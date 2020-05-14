import * as webpack from 'webpack';
import * as UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import getBabelPlugins from '../helpers/getBabelPlugins';
import getEntries from '../helpers/getEntries';
import { ConfigurationFunction } from '../types/ConfigurationFunction';

const createConfig: ConfigurationFunction = (paths, options) => {
    const config: webpack.Configuration = {
        // name: 'client',
        target: 'web',
        entry: getEntries(options.entries),
        resolve: {
            extensions: ['.jsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /(\.js(x?)$|\.ts(x?)$)/,
                    include: [
                        /@ui.*/,
                        /@portal(\/|\\)slice-.*/,
                        paths.projectSourceDir,
                    ],
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
        // plugins: [
        //     new MiniCssExtractPlugin({
        //         filename: cssFilename,
        //     }),
        //     new ManifestPlugin({
        //         fileName: 'manifest.json',
        //         map: (file) => {
        //             file.name =
        //                 file.name !== null ? file?.name.replace(/\./g, '') : '';
        //             return file;
        //         },
        //     }),
        // ],
        optimization: {
            minimizer: [
                new UglifyJsPlugin({
                    extractComments: true,
                }),
            ],
        },
    };

    return config;
};

export default createConfig;
