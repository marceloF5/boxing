import * as webpackMerge from 'webpack-merge';
import commonConfig from './configs/common';
import clientConfig from './configs/client';
import serverConfig from './configs/server';
import {
    ConfigurationFunction,
    IsomorphicConfigurationFunction,
} from './types/ConfigurationFunction';

export const createClientConfig: ConfigurationFunction = (paths, options) => {
    return webpackMerge.smart(
        commonConfig(paths, options),
        clientConfig(paths, options)
    );
};

export const createServerConfig: ConfigurationFunction = (paths, options) => {
    return webpackMerge.smart(
        commonConfig(paths, options),
        serverConfig(paths, options)
    );
};

export const createConfig: IsomorphicConfigurationFunction = (
    paths,
    options
) => {
    return [
        createClientConfig(paths, options),
        createServerConfig(paths, options),
    ];
};
