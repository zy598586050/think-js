/*
 * @Author: zhangyu
 * @Date: 2021-04-15 21:18:51
 * @LastEditTime: 2021-04-29 12:14:40
 */
const Model = require('think-js-lib').Model

class HelloModel extends Model{

    // 返回一个url
    getUrl(){
        return 'https://www.think-js.cn'
    }

}

module.exports = HelloModel