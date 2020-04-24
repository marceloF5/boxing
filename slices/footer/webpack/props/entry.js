const path = require('path');
const slices = ['header'];

const entryPointObj = slices.map((slice) => ({
    main: path.resolve(__dirname, `../../src/entry.js`),
}));

const entryPoints = entryPointObj.reduce((acc, curr) => ({
    ...acc,
    ...curr,
}));

module.exports = { ...entryPoints };
