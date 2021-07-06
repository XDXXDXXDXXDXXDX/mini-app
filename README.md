# mini-app

基础 web worker 和 iframe 实现的小程序框架

具备一个小程序应用框架的基础功能：

- 支持使用 vue dsl 进行开发
- 各层的通信
- 逻辑层接口调用
- 视图层的视图更新

安装依赖
```
npm install
```
构建项目
```
npm run build
```
开始开发
```
npm run server
```

## App

模拟的客户端，在小程序框架中对应原生应用（例如安卓、ios 应用）

- index.html 应用主界面
- app.js 应用逻辑
- service.js 运行在逻辑层的前端框架
- view.js 运行在视图层的前端框架

## Demo

仿照微信小程序创建的示例代码，去除了 app.json 等配置文件和全局样式等

## parser

编译小程序源码（Demo）的工具，编译完成的文件输出在 Demo/dist 目录下
