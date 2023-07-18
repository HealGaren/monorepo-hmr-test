const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // Production 빌드 시, 리액트 코드 트랜스파일링 할 시작점 설정.
    entry: './src/index.jsx',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },

    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },

    // swc 연동을 위한 swc-loader 장착.
    module: {
        rules: [
            {
                test: /\.((jsx?)|(tsx?))$/ ,
                exclude: /(node_modules)/,
                use: {
                    loader: "swc-loader"
                }
            }
        ]
    },

    // 번들링된 JS 코드를 html 파일과 매핑 및 주입시키기 위한 플러그인 설정.
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: path.join(__dirname, 'public/index.html')
        })
    ],

    // webpack Develop 모드 실행 시, 사용될 static 파일들 경로와 관리 방식 설정.
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        allowedHosts: 'auto',
        compress: true,
        port: 8080,
        hot: true
    },
}