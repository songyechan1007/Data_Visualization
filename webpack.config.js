const path = require('path');

module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: './public',
        filename: 'main.js',
    },
    target: 'node',
};