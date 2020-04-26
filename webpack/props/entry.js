const path = require('path');

module.exports = ({ slice }) => {
    let defaultBuildPath = '../../apps/slices-map/main.js';
    let sliceName = 'main';
    const defaultSlicePath = '../../slices';

    if (typeof slice !== 'boolean') {
        defaultBuildPath = `${defaultSlicePath}/${
            slice.split('-')[1]
        }/src/entry.js`;
        // sliceName = slice.split('-')[1];
    }

    return {
        [sliceName]: path.resolve(__dirname, defaultBuildPath),
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