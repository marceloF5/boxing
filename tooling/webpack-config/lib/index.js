"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = exports.createServerConfig = exports.createClientConfig = void 0;
const webpackMerge = require("webpack-merge");
const common_1 = require("./configs/common");
const client_1 = require("./configs/client");
const server_1 = require("./configs/server");
exports.createClientConfig = (paths, options) => {
    return webpackMerge.smart(common_1.default(paths, options), client_1.default(paths, options));
};
exports.createServerConfig = (paths, options) => {
    return webpackMerge.smart(common_1.default(paths, options), server_1.default(paths, options));
};
exports.createConfig = (paths, options) => {
    return [
        exports.createClientConfig(paths, options),
        exports.createServerConfig(paths, options),
    ];
};
//# sourceMappingURL=index.js.map