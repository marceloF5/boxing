import * as webpack from 'webpack';
import { IPath } from './IPath';
import { IOptions } from './IOptions';

export type ConfigurationFunction = (
    paths: IPath,
    options: IOptions
) => webpack.Configuration;

export type IsomorphicConfigurationFunction = (
    paths: IPath,
    options: IOptions
) => webpack.Configuration[];
