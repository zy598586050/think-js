/*
 * @Author: zhangyu
 * @Date: 2021-04-21 20:58:24
 * @LastEditTime: 2021-04-27 23:33:44
 */

const fs = require('fs')

// 微信相关配置
module.exports = {
    // 公众号
    wechat: {
        appid: '',
        secret: ''
    },
    // 小程序
    miniProgram: {
        appid: '',
        secret: ''
    },
    // 微信支付
    wxpay: {
        mchid: '', // 商户号
        serial_no: '', // 证书序列号
        key: '', // API秘钥
        public_key: fs.readFileSync('cert/wx_public_key.pem', 'utf8'), // 公钥
        private_key: fs.readFileSync('cert/wx_private_key.pem', 'utf8'), // 私钥
        notify_url: '', // 回调地址
    }
}