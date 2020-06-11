"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const index_1 = require("./index");
const slice = 'slice-footer';
const slicePartName = slice.split('-')[1];
const rootPath = path.resolve(__dirname, '../../../');
const baseDir = `${rootPath}/slices/${slicePartName}/src`;
const baseOutput = `${rootPath}/apps/app-portal/${slicePartName}`;
const pathClientEntry = `${baseDir}/client`;
const environment = 'development';
const entries = [
    {
        entryname: slice,
        pathname: pathClientEntry,
    },
];
const options = {
    entries,
    environment,
};
const paths = {
    projectDir: baseDir,
    projectSourceDir: baseDir,
    outputDir: baseOutput,
};
exports.default = index_1.createClientConfig(paths, options);
//# sourceMappingURL=webpack.config.dev.js.map