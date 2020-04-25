const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pluginsBase = [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'main.[hash].css',
    }),
    new ManifestPlugin({
        fileName: 'manifest.json',
        map: (file) => {
            file.name = file.name.replace(/\./g, '');
            return file;
        },
    }),
];

module.exports = { pluginsBase };
