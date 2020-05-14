import * as path from 'path';
import { createConfig } from './index';
import { Environment } from './types/Environment';
import { ITemplateEntry } from './types/ITemplateEntry';
import { IPath } from './types/IPath';
import { IOptions } from './types/IOptions';

const slice = 'slice-footer';
const slicePart = slice.split('-')[1];
const rootPath = path.resolve(__dirname, '../../../');
const baseDir = `${rootPath}/slices/${slicePart}/src`;
const baseOutput = `${rootPath}/apps/app-porta/${slicePart}`;
const pathClientName = `${baseDir}/client`;

const environment: Environment = 'development';

const entries: ITemplateEntry[] = [
    {
        entryname: slice,
        pathname: pathClientName,
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

export default createConfig(paths, options);
