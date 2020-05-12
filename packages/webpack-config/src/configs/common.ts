import * as webpack from 'webpack';
import * as ManifestPlugin from 'webpack-manifest-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ConfigurationFunction } from '../types/ConfigurationFunction';
import isProduction from '../helpers/isProduction';

const createConfig: ConfigurationFunction = (paths, options) => {
    const isProd = isProduction(options);
    const cssFilename = isProd
        ? '[name].client.[contenthash].css'
        : '[name].client.css';

    return {
        context: paths.projectDir,
        output: {
            path: paths.outputDir,
            pathinfo: false,
        },
        mode: options.environment,
        // optimization: {
        //     ...getOptimizations(options),
        // },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            // modules: ['node_modules', paths.nodeModulesDir],
            // symlinks: false,
            // alias: {
            //     ...getReactAliases(options),
            // },
        },
        // resolveLoader: {
        //     modules: ['node_modules', paths.nodeModulesDir],
        // },
        module: {
            rules: [
                {
                    test: /\.(s*)css$/,
                    include: [
                        /@ui.*/,
                        /@portal(\/|\\)slice-.*/,
                        paths.projectSourceDir,
                    ],
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/,
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'images/[name].[hash:15].[ext]',
                        // postTransformPublicPath: (name) =>
                        //     `__webpack_public_path__ + ${name}`,
                    },
                },
                {
                    test: /\.(mp4|webm|ogg|ogv)$/,
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'videos/[name].[hash:15].[ext]',
                        // postTransformPublicPath: (name) =>
                        //     `__webpack_public_path__ + ${name}`,
                    },
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'fonts/[name].[hash:15].[ext]',
                        // postTransformPublicPath: (name) =>
                        //     `__webpack_public_path__ + ${name}`,
                    },
                },
                {
                    test: /\.svg$/,
                    loader: require.resolve('svg-inline-loader'),
                    issuer: /\.js$/,
                },
                {
                    test: /\.(svg)$/i,
                    loader: require.resolve('url-loader'),
                    issuer: /\.css/,
                    options: {
                        limit: Infinity,
                    },
                },
            ],
        },
        plugins: [
            // new TimeFixPlugin(),
            // Prevents importing files from outside of src/ (or node_modules/).
            // new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]), // disabled until next release https://github.com/facebook/create-react-app/issues/4740
            // new CaseSensitivePathsPlugin(),
            // new webpack.DefinePlugin({
            //     'process.env': {
            //         NODE_ENV: JSON.stringify(options.environment),
            //         IS_SINGLE_RENDERER: JSON.stringify(true),
            //     },
            //     'process.mobileOnly': options.mobileOptimized,
            //     __MOCKS__: false,
            // }),
            // options.mobileOptimized &&
            //     new MediaQueryPlugin({
            //         include: true,
            //         queries: {
            //             '(min-width: 60em)': 'desktop',
            //             '(min-width: 80em)': 'desktop',
            //             '(min-width: 112.5em)': 'desktop',
            //         },
            //     }),
            // options.mobileOptimized &&
            //     new FilterOutputPlugin({
            //         exclude: /-desktop\..+\.css$/,
            //     }),
            new MiniCssExtractPlugin({
                filename: cssFilename,
            }),
            new ManifestPlugin({
                fileName: 'manifest.json',
                map: (file) => {
                    file.name =
                        file.name !== null ? file?.name.replace(/\./g, '') : '';
                    return file;
                },
            }),
            // !isProd && new webpack.WatchIgnorePlugin([paths.outputDir]),
        ].filter(Boolean),
    };
};

export default createConfig;
