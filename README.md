<p align="center">
  <img width="300px" src="https://www.think-js.cn/icon.png">
</p>

<p align="center">
  <a href="http://www.think-js.cn">
    <img src="https://img.shields.io/badge/npm-v1.1.0-blue">
  </a>
  <a href="http://www.think-js.cn">
    <img src="https://img.shields.io/badge/downloads-110k/month-green">
  </a>
  <a href="http://www.think-js.cn">
    <img src="https://codecov.io/gh/element-plus/element-plus/branch/dev/graph/badge.svg?token=BKSBO2GLZI"/>
  </a>
  <br>
</p>

<p align="center">一个企业级的NodeJS应用框架</p>

- 💪 减少造轮子拿来即用
- 🔥 集成了众多常用SDK

## ThinkJS框架（纯净版）

[ThinkJS](https://www.think-js.cn) 是一个企业级的NodeJS应用框架，整合了各种常用SDK以及企业级常用的技术方案，为减少了开发人员的学习成本，提高团队的开发效率而生。

## 目录结构

```
.
├── app
│   ├── controller              // 控制器目录
│   │   └── hello.js
│   ├── middleware              // 路由中间件目录
│   │   └── checkLogin.js
│   ├── model                   // 模型目录
│   │   └── hello.js
│   └── validate                // 验证器目录
│       └── hello.js
├── cert                        // 证书文件目录
│   ├── ali_private_key.pem
│   ├── wx_private_key.pem
│   └── wx_public_key.pem
├── config                      // 配置文件目录
│   ├── alicloud.js
│   ├── app.js
│   ├── database.js
│   ├── elasticsearch.js
│   ├── mongodb.js
│   ├── redis.js
│   └── wx.js
├── logs                       // 日志输出目录
│   ├── all-logs.log
│   └── log.2021-04-29.log
├── route                      // 路由配置目录
│   └── hello.js
├── utils                      // 扩展工具函数目录
│   └── index.js
├── dist                       // 前端打包目录
├── vue                        // vue前端项目
├── index.js                   // 项目入口文件
├── package.json               // 项目配置文件
└── README.md                  // 项目说明文件
```

## 安装

通过脚手架安装

```
npm install think-js-cli -g

think-js-cli init demoApp
```

直接克隆

```
git clone https://github.com/zy598586050/think-js.git
```

安装依赖

```
pnpm install
```

启动项目

```
// 开发环境
npm run dev

// 线上环境
npm run start
```

## 生态

* [ThinkVue3Admin](https://github.com/zy598586050/think-vue3-admin) 带权限配置的后台管理系统（技术方案集成）
* [ThinkReact18Admin](https://github.com/zy598586050/think-react18-admin) 带权限配置的后台管理系统（技术方案集成）
* [ThinkJSWeb](https://gitee.com/zhangyubk/think-js-web) 移动端网页（技术方案集成）
* ...

## 说明

此项目为纯净版，舍弃了众多技术方案的演示案例，如需查看带业务逻辑的案例版，请移步 [这里](https://github.com/zy598586050/think-js-pro)

## 架构
<p align="center">
  <img src="https://think-js.cn/xmind.png">
</p>

## 执照

ThinkJS已申请软件著作，可在中国版权保护中心中查看
[CPCC](https://www.ccopyright.com.cn).
