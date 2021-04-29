/*
 * @Author: zhangyu
 * @Date: 2021-04-15 21:18:51
 * @LastEditTime: 2021-04-29 12:14:40
 */
const Controller = require('think-js-lib').Controller

class HelloController extends Controller{
    // 用于演示 restful api 接口功能
    sayHello(){
        let result = [
            {
                name: '无穷369',
                title: '全栈工程师',
                blog: 'https://www.zhangyubk.com'
            }
        ]
        return this.showSuccess(result)
    }
    
    // 用于演示视图功能
    showIndex(){
        return this.View('index',{
            title: 'ThinkJS V1.0.0',
            welcome: '一个企业级的NodeJS应用框架，为提高开发团队和开发人员的开发效率而生。'
        })
    }
}

module.exports = HelloController