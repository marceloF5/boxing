const path = require('path');

const output_base = {
    path: path.resolve(__dirname, '../../../../apps/slices-build/footer'),
    filename: `main.[hash].js`,
    publicPath: '/',
};

module.exports = { output_base };
