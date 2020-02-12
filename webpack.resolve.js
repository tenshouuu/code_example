const path = require('path');

module.exports = {
    resolve: {
        modules: ['node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.graphql'],
        alias: {
            '@client': path.join(__dirname, 'src'),
            'react-dom': '@hot-loader/react-dom'
        },
    },
};
