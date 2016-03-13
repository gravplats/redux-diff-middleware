var path = require('path');


module.exports = {
    devtool: 'inline-source-map',
    resolve: {
        root: path.resolve('./')
    },
    entry: [
        './example/assets/app.js'
    ],
    output: {
        path: path.resolve(__dirname, 'example/public'),
        publicPath: '/example/public/',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            }
        ]
    }
};
