const HtmlWebpack = require('html-webpack-plugin');
const { Template } = require('webpack');

module.exports = {
    mode: 'development',
    output: {//limpia los archivos de la salida
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpack({
            title: 'mi Webpack App',
            //defino el nombre de salida del archivo
            // filename: 'index.html',
            //cual es el archivo que se va a usar como plantilla
            template: './src/index.html'
        })
    ]
}