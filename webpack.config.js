process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackResolve = require('./webpack.resolve');

const { NODE_ENV } = process.env;
const isProduction = NODE_ENV === 'production';
const dotenv = require('dotenv').config({
    path: `./.env.${NODE_ENV}`,
});

module.exports = async () => {
   const manifest = await require(`./dist/${isProduction ? '' : 'dev.'}vendor.manifest.json`);
   return {
        mode: NODE_ENV,
        entry: [!isProduction && 'react-hot-loader/patch', './src/index.tsx'].filter(Boolean),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: `${isProduction ? '[hash]' : 'dev'}.bundle.js`,
            publicPath: isProduction ? '/dist/' : '/',
            chunkFilename: `[name].${isProduction ? '[chunkhash]' : 'dev'}.bundle.js`,
            library:  manifest.name,
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loader: [
                        {
                            loader: 'babel-loader',
                            options: {
                                cacheDirectory: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.js$/,
                    use: ['source-map-loader'],
                    exclude: [
                        /node_modules\/apollo-link-timeout/g,
                    ],
                    enforce: 'pre',
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: !isProduction
                            }
                        },
                        'css-loader',
                    ],
                },
                {
                    test: /\.graphql$/,
                    exclude: /node_modules/,
                    loader: 'graphql-tag/loader',
                },
                {
                    test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[contenthash].[ext]'
                            }
                        }
                    ]
                }
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin(),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(NODE_ENV),
                    API_URL: JSON.stringify(dotenv.parsed.API_HOST),
                    VK_APP_ID: JSON.stringify(dotenv.parsed.VK_APP_ID),
                },
            }),
            new MiniCssExtractPlugin({
                filename: `${isProduction ? '[hash]' : 'dev'}.bundle.css`,
            }),
            new MomentLocalesPlugin({
                localesToKeep: ['ru'],
            }),
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest,
            }),
            new HtmlWebpackPlugin({
                vendor: isProduction ? manifest.name : 'vendor_dev',
                publicPath: isProduction ? '/dist' : '',
                template: 'public/index.html',
                jivosite: isProduction ? '<script src="//code.jivosite.com/widget.js" data-jv-id="sdfdssdf" async></script>' : '',
                    minify: {
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true
                }
            }),
            new CopyPlugin([{
                from: 'public/',
                ignore: ['public/index.html']
            }]),
            new ManifestPlugin({
                fileName: 'prod.manifest.json'
            }),
            // isProduction && new BundleAnalyzerPlugin(),
        ].filter(Boolean),
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 3000,
            host: '0.0.0.0',
            historyApiFallback: {
                disableDotRule: true
            }
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                }),
            ],
        },
        resolve: webpackResolve.resolve,
        devtool: isProduction ? 'source-map' : 'eval',
        stats: {
            children: false,
            modules: false,
        },
    };
};
