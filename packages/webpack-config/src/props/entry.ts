const path = require('path');

export default ({ slice }) => {
    let defaultClientPath = '../../../apps/slices-map/main.js';
    const defaultSlicePath = '../../../../slices';

    if (typeof slice !== 'boolean') {
        defaultClientPath = `${defaultSlicePath}/${
            slice.split('-')[1]
        }/src/client.js`;
    }
    return {
        client: path.resolve(__dirname, defaultClientPath),
    };
};

// const entryPointObj = slices.map((slice) => {
//     const slicePath = `../../slices/${slice}/src/entry.js`;
//     const main = sliceParam ? 'main' : slice;

//     return {
//         [main]: path.resolve(
//             __dirname,
//             sliceParam ? slicePath : defaultPath
//         ),
//     };
// });

// const entryPoints = entryPointObj.reduce((acc, curr) => ({
//     ...acc,
//     ...curr,
// }));
