/*
 * @Author: zhangyu
 * @Date: 2021-04-21 20:58:24
 * @LastEditTime: 2021-04-27 23:33:44
 */
const fs = require('fs')

// 阿里云相关配置
module.exports = {
    accessKeyId: '',
    secretAccessKey: '',
    bucket: '', // 存储空间
    region: '', // 空间所在大区
    // 支付宝支付相关配置
    alipay: {
        appId: '',
        privateKey: fs.readFileSync('cert/ali_private_key.pem', 'ascii'),
        encryptKey: '',
        alipayRootCertPath: '',
        alipayPublicCertPath: '',
        appCertPath: ''
    }
}