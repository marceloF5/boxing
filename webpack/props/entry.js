const path = require('path');

module.exports = (env) => {
    let slices = [];
    const sliceParam = env.slice || '';
    const defaultPath = '../../apps/slices-map/main.js';

    if (typeof sliceParam === 'boolean' && sliceParam) {
        // vai até a arvore slices e pegar todas slices
        // retornar um array das slices
        slices = ['header', 'footer'];
    } else {
        slices.push(sliceParam.split('-')[1]);
    }

    const entryPointObj = slices.map((slice) => {
        const slicePath = `../../slices/${slice}/src/entry.js`;
        const main = sliceParam ? 'main' : slice;

        return {
            [main]: path.resolve(
                __dirname,
                sliceParam ? slicePath : defaultPath
            ),
        };
    });

    const entryPoints = entryPointObj.reduce((acc, curr) => ({
        ...acc,
        ...curr,
    }));

    return { ...entryPoints };
};
