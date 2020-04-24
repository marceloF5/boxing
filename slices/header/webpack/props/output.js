const path = require('path');

const outputBase = {
    path: path.resolve(__dirname, '../../../../apps/slices-build/header'),
    filename: `main.[hash].js`,
    publicPath: '/',
};

module.exports = { outputBase };
