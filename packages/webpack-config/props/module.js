const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const moduleBase = {
    rules: [
        {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    cacheDirectory: true,
                },
            },
        },
        {
            test: /\.(s*)css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(jpe?g|png|svg)$/,
            use: 'file-loader',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: 'file-loader',
        },
    ],
};

module.exports = { moduleBase };
