import * as ManifestPlugin from 'webpack-manifest-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ConfigurationFunction } from '../types/ConfigurationFunction';
import isProduction from '../helpers/isProduction';

const createConfig: ConfigurationFunction = (paths, options) => {
    const isProd = isProduction(options);
    const cssFilename = isProd
        ? '[name].client.[contenthash].css'
        : '[name].client.css';

    const jsFilename = isProd
        ? '[name].client.[contenthash].js'
        : '[name].client.js';

    return {
        context: paths.projectDir,
        output: {
            path: paths.outputDir,
            pathinfo: false,
            filename: jsFilename,
        },
        mode: 'production',
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.(s*)css$/,
                    include: [
                        /@boxing.*/,
                        /@boxing(\/|\\)slice-.*/,
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
                    },
                },
                {
                    test: /\.(mp4|webm|ogg|ogv)$/,
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'videos/[name].[hash:15].[ext]',
                    },
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: require.resolve('file-loader'),
                    options: {
                        name: 'fonts/[name].[hash:15].[ext]',
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
            new MiniCssExtractPlugin({
                filename: cssFilename,
            }),
            new ManifestPlugin({
                fileName: 'manifest.json',
                map: (file) => {
                    file.name =
                        file.path !== null ? file?.path.replace(/\./g, '') : '';
                    return file;
                },
            }),
        ].filter(Boolean),
    };
};

export default createConfig;
