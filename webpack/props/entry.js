const path = require('path');

const slices = ['header', 'footer'];

const entryPointObj = slices.map((slice) => ({
    [slice]: path.resolve(__dirname, `../../apps/slices-map/main.js`),
}));

const entryPoints = entryPointObj.reduce((acc, curr) => ({
    ...acc,
    ...curr,
}));

module.exports = { ...entryPoints };
