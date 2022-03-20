/*
 * @Author: zhangyu
 * @Date: 2021-04-15 22:02:16
 * @LastEditTime: 2021-04-29 11:00:31
 */

const checkLogin = require('@/middleware/checkLogin.js')

module.exports = (route) => {
    // 路由配置演示
    route.get('/hello','hello/sayHello')
}