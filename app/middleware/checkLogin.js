/*
 * @Author: zhangyu
 * @Date: 2021-04-20 21:50:39
 * @LastEditTime: 2021-08-17 21:07:53
 */
const TR = require('../../node_modules/think-js-lib/lib/thinkredis.js')
const ThinkRedis = new TR()

// 路由中间件
const checkLogin = async (ctx,next,error) => {
    let userInfo = await ThinkRedis.get(ctx.header.token || '')
    return new Promise((resolve,reject) => {
        if(userInfo){
            resolve(next())
        }else{
            reject(error('非法请求,或Token过期'))
        }
    })
}

module.exports = checkLogin