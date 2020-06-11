"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isProduction_1 = require("../helpers/isProduction");
const createConfig = (paths, options) => {
    const isProd = isProduction_1.default(options);
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
                        file.path !== null ? file === null || file === void 0 ? void 0 : file.path.replace(/\./g, '') : '';
                    return file;
                },
            }),
        ].filter(Boolean),
    };
};
exports.default = createConfig;
//# sourceMappingURL=common.js.map