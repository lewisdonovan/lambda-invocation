const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
    plugins: [
        new Dotenv()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
}