const HtmlWebpackPlugin = require('html-webpack-plugin');
exports.config = [
    new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: true,
        chunks: ["main"],
        filename: "index.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/userInfo.html",
        inject: true,
        chunks: ["account"],
        filename: "static/pages/userInfo.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/goods.html",
        inject: true,
        chunks: ["goods"],
        filename: "static/pages/goods.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/goodsDetails.html",
        inject: true,
        chunks: ["goodsDetails"],
        filename: "static/pages/goodsDetails.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/goodsDetails_assem.html",
        inject: true,
        chunks: ["goodsDetailsAssem"],
        filename: "static/pages/goodsDetails_assem.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/reg_login.html",
        inject: true,
        chunks: ["reg_login"],
        filename: "static/pages/reg_login.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/userInfo.html",
        inject: true,
        chunks: ["userInfo"],
        filename: "static/pages/userInfo.html"
    }),
    new HtmlWebpackPlugin({
        template: "./src/pages/shoppingcar.html",
        inject: true,
        chunks: ["shoppingcar"],
        filename: "static/pages/shoppingcar.html"
    })
]
