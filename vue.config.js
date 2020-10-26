// 修改完vue.config.js 一定要记得重启项目
module.exports = {
    devServer: {
        host: "0.0.0.0",  //不固定ip
        port: "9527",
        open: true,
        proxy: {  //配置代理解决vue中的跨域问题
            "/api2": {
                target: "https://x.dscmall.cn/api/catalog", //要代理的域名
                changeOrigin: true, //开启代理，允许跨域访问
                pathRewrite: {
                    "^/api2": ""
                } 
            },
            "/api": {
                target: "https://x.dscmall.cn/api", //要代理的域名
                changeOrigin: true, //开启代理，允许跨域访问
                pathRewrite: {
                    "^/api": ""
                }
            },
      
        }
    }
}