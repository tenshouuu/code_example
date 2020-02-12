module.exports = {
    presets: [
        ['@babel/env', {
            targets: {
                browsers: ['last 2 versions'],
            },
            modules: false,
        }],
        '@babel/react',
        '@babel/typescript',
    ],
    plugins: [
        '@babel/plugin-transform-typescript',
        '@babel/plugin-transform-runtime',
        '@babel/plugin-transform-async-to-generator',
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-proposal-decorators', {
            legacy: true,
        }],
        ['@babel/plugin-proposal-class-properties', {
            loose: true,
        }],
        'babel-plugin-styled-components',
        'react-hot-loader/babel',
    ],
};
