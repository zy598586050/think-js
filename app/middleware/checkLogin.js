/*
 * @Author: zhangyu
 * @Date: 2021-04-20 21:50:39
 * @LastEditTime: 2021-04-29 12:40:28
 */

// 路由中间件
const checkLogin = (ctx,next,error) => {
    next()
}

module.exports = checkLogin