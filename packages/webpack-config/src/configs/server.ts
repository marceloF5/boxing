import * as webpack from 'webpack';
import getBabelPlugins from '../helpers/getBabelPlugins';
import getEntries from '../helpers/getEntries';
import { ConfigurationFunction } from '../types/ConfigurationFunction';
import isProduction from '../helpers/isProduction';

const createConfig: ConfigurationFunction = (paths, options) => {
    const isProd = isProduction(options);

    // const smp = new SpeedMeasurePlugin({
    //     outputFormat: 'humanVerbose',
    // });

    const jsFilename = isProd
        ? '[name].server.[contenthash].js'
        : '[name].server.js';

    const config: webpack.Configuration = {
        name: 'server',
        target: 'node',
        entry: getEntries(options.entries),
        output: {
            filename: jsFilename,
            // libraryTarget: 'commonjs',
        },
        // resolveLoader: {
        //     alias: {
        //         'app-page-loader': require.resolve(
        //             '../loaders/ServerPageLoader'
        //         ),
        //     },
        // },
        module: {
            rules: [
                {
                    test: /(\.js(x?)$|\.ts(x?)$)/,
                    include: [
                        /@boxing.*/,
                        /@boxing(\/|\\)slice-.*/,
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
                    // use: [
                    //     {
                    //         loader: require.resolve('babel-loader'),
                    //         options: {
                    //             rootMode: 'upward-optional',
                    //             cacheDirectory: true,
                    //             sourceType: 'unambiguous',
                    //             presets: [
                    //                 '@babel/preset-react',
                    //                 '@babel/preset-typescript',
                    //                 [
                    //                     '@babel/preset-env',
                    //                     {
                    //                         targets: {
                    //                             node: true,
                    //                         },
                    //                         shippedProposals: true,
                    //                     },
                    //                 ],
                    //             ],
                    //             plugins: [
                    //                 ...getBabelPlugins(options),
                    //                 [
                    //                     require.resolve(
                    //                         '@babel/plugin-transform-runtime'
                    //                     ),
                    //                     {
                    //                         helpers: false,
                    //                         regenerator: true,
                    //                     },
                    //                 ],
                    //                 require.resolve(
                    //                     'babel-plugin-dynamic-import-node'
                    //                 ),
                    //             ],
                    //         },
                    //     },
                    // ].filter(Boolean),
                },
            ],
        },
        // optimization: {
        //     minimizer: [
        //         new UglifyJsPlugin({
        //             extractComments: true,
        //         }),
        //     ],
        //     splitChunks: false,
        // },
        // plugins: [
        //     new webpack.DefinePlugin({
        //         'process.browser': false,
        //         __CLIENT__: false,
        //         __SERVER__: true,
        //     }),
        //     new webpack.optimize.LimitChunkCountPlugin({
        //         maxChunks: 1,
        //     }),
        //     new FilterOutputPlugin({
        //         include: /\.js$/,
        //     }),
        //     options.stats &&
        //         new StatsWriterPlugin({
        //             filename: 'stats-server.json',
        //             stats: 'normal',
        //         }),
        // ].filter(Boolean),
    };

    // return options.debug ? smp.wrap(config) : config;
    return config;
};

export default createConfig;
