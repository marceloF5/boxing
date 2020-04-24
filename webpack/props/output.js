const path = require('path');

const outputBase = {
    path: path.resolve(__dirname, '../../apps/app-portal'),
    filename: `[name].[hash].js`,
    publicPath: '/',
};

module.exports = { outputBase };
