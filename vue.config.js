module.exports = {
    //修改静态资源路径
    publicPath: "./",

    devServer: {
        overlay: {
            warnings: false, //不显示警告
            errors: false //不显示错误
        }
    },
    lintOnSave: false //关闭eslint检查
}