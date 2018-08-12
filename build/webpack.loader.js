const ExtractTextPlugin= require('extract-text-webpack-plugin');
exports.config = [
    {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
    },
    {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: ["css-loader",
             {
                loader:"postcss-loader",
                options: {           // 如果没有options这个选项将会报错 No PostCSS Config found
                    plugins: (loader) => [
                        require('autoprefixer')(), //CSS浏览器兼容
                    ]
                }
              }, 
              "less-loader"]
        }),
        exclude: /node_modules/
    },
    {
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        use:{
            loader:'url-loader',
            options:{
                limit:'1000',
                name:'[name].[ext]',
                outputPath:'static/images/'
            }
        },
        exclude:/node_modules/
    },
    {
        test:/\.html/,
        loader:'html-withimg-loader',
        exclude:/node_modules/
    }

]