import * as webpack from 'webpack';
import { IPath } from './IPath';
import { IOptions } from './IOptions';
export declare type ConfigurationFunction = (paths: IPath, options: IOptions) => webpack.Configuration;
export declare type IsomorphicConfigurationFunction = (paths: IPath, options: IOptions) => webpack.Configuration[];
