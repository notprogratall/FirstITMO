const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        catalog:'./src/index.js',
        cart:'./src/indexCart.js'
        
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.svg$/,
                include: path.resolve(__dirname, 'src'),
                use: 'svg-inline-loader' 
                
            }
        ],
    },
}