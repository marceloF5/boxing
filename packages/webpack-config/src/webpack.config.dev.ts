import * as path from 'path';
import { createClientConfig } from './index';
import { Environment } from './types/Environment';
import { ITemplateEntry } from './types/ITemplateEntry';
import { IPath } from './types/IPath';
import { IOptions } from './types/IOptions';

const slice = 'slice-footer';
const slicePartName = slice.split('-')[1];
const rootPath = path.resolve(__dirname, '../../../');
const baseDir = `${rootPath}/slices/${slicePartName}/src`;
const baseOutput = `${rootPath}/apps/app-portal/${slicePartName}`;
const pathClientEntry = `${baseDir}/client`;

const environment: Environment = 'development';

const entries: ITemplateEntry[] = [
    {
        entryname: slice,
        pathname: pathClientEntry,
    },
];

const options: IOptions = {
    entries,
    environment,
};

const paths: IPath = {
    projectDir: baseDir,
    projectSourceDir: baseDir,
    outputDir: baseOutput,
};

export default createClientConfig(paths, options);
