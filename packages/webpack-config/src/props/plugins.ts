const path = require('path');
// import{ CleanWebpackPlugin } from 'clean-webpack-plugin';
import * as ManifestPlugin from 'webpack-manifest-plugin';
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'

export default (env) => {
    const pluginsBase = [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // filename: `main${env.production ? '.[hash]' : ''}.css`,
            filename: `main.css`,
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
            map: (file) => {
                file.name = file.name.replace(/\./g, '');
                return file;
            },
        }),
    ];

    const pluginsCustom = [
        ...pluginsBase,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(
                __dirname,
                '../../../apps/slices-map/index.html'
            ),
        }),
    ];

    return { pluginsBase, pluginsCustom };
};
