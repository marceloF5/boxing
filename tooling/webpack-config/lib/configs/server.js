"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getBabelPlugins_1 = require("../helpers/getBabelPlugins");
const getEntries_1 = require("../helpers/getEntries");
const isProduction_1 = require("../helpers/isProduction");
const createConfig = (paths, options) => {
    const isProd = isProduction_1.default(options);
    const jsFilename = isProd
        ? '[name].server.[contenthash].js'
        : '[name].server.js';
    const config = {
        name: 'server',
        target: 'node',
        entry: getEntries_1.default(options.entries),
        output: {
            filename: jsFilename,
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
            ],
        },
    };
    return config;
};
exports.default = createConfig;
//# sourceMappingURL=server.js.map