const path = require('path');

module.exports = (env) => {
    let slicePath = '';
    const defaultPath = '../../../apps/slices-build';
    const sliceParam = env.slice || '';

    if (typeof sliceParam === 'boolean' && sliceParam) {
        slicePath = defaultPath;
    } else {
        slicePath = `../../../apps/slices-build/${sliceParam.split('-')[1]}`;
    }

    const outputBase = {
        path: path.resolve(__dirname, slicePath),
        filename: `main${env.production ? '.[hash]' : ''}.js`,
        publicPath: '/',
    };

    return outputBase;
};
