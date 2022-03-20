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
        appid: 'wx520c63a7a02b8859',
        secret: '88ba6adcefc8936c6daf392e4a9a5485'
    },
    // 小程序
    miniProgram: {
        appid: '',
        secret: ''
    },
    // 微信支付
    wxpay: {
        mchid: '1586774201', // 商户号
        serial_no: '16E50C9F255D41D4E3CCD11EDCF8AA91C7AEEACD', // 证书序列号
        key: '7YJk0B7Axp8j5dkFSlmHdNxEnfpAegYV', // API秘钥
        public_key: fs.readFileSync('cert/wx_public_key.pem', 'utf8'), // 公钥
        private_key: fs.readFileSync('cert/wx_private_key.pem', 'utf8'), // 私钥
        notify_url: 'http://cake.zhangyubk.com/api/v1/wxNotify', // 回调地址
    }
}