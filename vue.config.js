module.exports = {
    devServer: {
        // 端口号
        port: 80,
    },
    configureWebpack: {
        // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并(更新完需重启服务)
        externals: {
            "vue": "Vue",
            iview:"iview",
        }
    },
}

