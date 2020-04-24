const path = require('path');

const slices = ['header'];

const entryPointObj = slices.map(() => ({
    main: path.resolve(__dirname, `../../src/entry.js`),
}));

const entryPoints = entryPointObj.reduce((acc, curr) => ({
    ...acc,
    ...curr,
}));

module.exports = { ...entryPoints };
