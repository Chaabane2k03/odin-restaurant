const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    },
    mode: 'development',
};
