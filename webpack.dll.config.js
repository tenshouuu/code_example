process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const {dependencies} = require('./package.json');

const {NODE_ENV} = process.env;
const isProduction = NODE_ENV === 'production';

const dotenv = require('dotenv').config({
    path: `./.env.${NODE_ENV}`,
});
const ignore = ignoreList => key => !ignoreList.includes(key);

module.exports = (env, argv) => {
    return {
        mode: isProduction ? 'production' : 'development',
        entry: {
            vendor: Object.keys(dependencies || {}).filter(
                ignore(['slick-carousel']),
            ),
        },
        output: {
            path: path.join(__dirname, 'dist'),
            filename: `vendor_${isProduction ? '[hash]' : 'dev'}.js`,
            library: 'vendor_[hash]',
        },
        plugins: [
            isProduction && new CleanWebpackPlugin(),
            new webpack.DllPlugin({
                context: __dirname,
                path: path.join(
                    __dirname,
                    'dist',
                    `${isProduction ? '' : 'dev.'}vendor.manifest.json`,
                ),
                name: 'vendor_[hash]',
            }),
            new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, new RegExp('ru')),
            isProduction && new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(NODE_ENV),
                    API_URL: JSON.stringify(dotenv.parsed.API_HOST),
                    VK_APP_ID: JSON.stringify(dotenv.parsed.VK_APP_ID),
                },
            }),
        ].filter(Boolean),
        optimization: {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                }),
            ],
        }
    }
};
