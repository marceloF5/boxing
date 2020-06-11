"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBabelPlugins_1 = require("../helpers/getBabelPlugins");
const getEntries_1 = require("../helpers/getEntries");
const createConfig = (paths, options) => {
    const config = {
        target: 'web',
        entry: getEntries_1.default(options.entries),
        resolve: {
            extensions: ['.jsx', '.js'],
        },
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
                            plugins: getBabelPlugins_1.default(options, {
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
exports.default = createConfig;
//# sourceMappingURL=client.js.map