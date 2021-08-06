/*
 * @Author: zhangyu
 * @Date: 2021-04-14 21:28:08
 * @LastEditTime: 2021-08-06 10:25:14
 */

// 项目配置文件
module.exports = {
    port: 5985, // 项目启动端口
    cookie_secret: 'secret', // cookie的签名
    session_config: {
        key: 'koa:sess',
        maxAge: 18000, // cookie的过期时间
        overwrite: true, // 是否可以overwrite
        httpOnly: true, // true表示只有服务器端可以获取cookie
        signed: true, // 签名
        rolling: true, // 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false）
        renew: false, // (boolean) renew session when session is nearly expired
    } // session配置
}