import { IOptions } from '../types/IOptions';
import isProduction from './isProduction';

export default (options: IOptions, { isClient = false } = {}) => {
    const isProd = isProduction(options);

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
