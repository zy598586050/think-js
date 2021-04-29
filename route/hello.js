/*
 * @Author: zhangyu
 * @Date: 2021-04-15 22:02:16
 * @LastEditTime: 2021-04-29 11:00:31
 */

const checkLogin = require('@/middleware/checkLogin.js')

module.exports = (route) => {
    // hello接口
    route.group('/api/v1',(router) => {
        router.get('/hello','hello/sayHello')
    })

    // 视图页
    route.get('/','hello/showIndex')
}