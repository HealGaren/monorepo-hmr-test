const path = require('path');

module.exports = {

    // Production 빌드 시, 리액트 코드 트랜스파일링 할 시작점 설정.
    entry: './src/index.ts',

    target: ["web", "es5"],

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.cjs',
        library: {
            name: 'ui-kit-webpack',
            type: 'umd'
        },
        globalObject: 'this'
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

    externals: {
        "react": "react",
        "react-dom": "react-dom"
    }
}