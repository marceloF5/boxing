"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isProduction_1 = require("./isProduction");
exports.default = (options, { isClient = false } = {}) => {
    const isProd = isProduction_1.default(options);
    return [
        !isProd && isClient && require.resolve('react-refresh/babel'),
        require.resolve('@babel/plugin-proposal-class-properties'),
        [
            require.resolve('@babel/plugin-proposal-object-rest-spread'),
            {
                useBuiltIns: true,
            },
        ],
        isProd && [
            require.resolve('babel-plugin-transform-react-remove-prop-types'),
            {
                removeImport: true,
            },
        ],
    ].filter(Boolean);
};
//# sourceMappingURL=getBabelPlugins.js.map