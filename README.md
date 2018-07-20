## React-redux
![首页](/pic.gif)
### 如何执行
####  1、将项目克隆到本地，cd到react-redux
```javascript
git clone git@github.com:detanx/react-dom.git
cd react-redux
```
#### 2、安装依赖
```javascript
npm install
或
yarn install
```
#### 3、安装mongoDB
```
下载：https://www.mongodb.com/download-center?jmp=nav#atlas
安装：https://jingyan.baidu.com/article/d5c4b52bef7268da560dc5f8.html
创建数据库gomall:use gomall
创建表runoob并初始化一条字段，例：
{product: 'milk 500ml',
    quantity: 1,
    unitCost: 47 }
```
#### 4、执行
```javascript
1、在项目根目录：npm run dev
// npm run build(打包)
2、另打开一个命令窗口，在react-redux\src\nodejs下执行：node startexe.js
```
#### 5、打开浏览器浏览 http://localhost:3000/

Tips：在安装node-sass的时候，有可能不成功，如不成功，请先删除 node_modules ，然后将镜像源换成taobao的，再执行npm install 或 yarn install；
* 删除 node_modules
```javascript
rd/s/q node_modules
```
* 切换淘宝镜像源
```bash
npm config set registry http://registry.npm.taobao.org
或
yarn config set registry http://registry.npm.taobao.org
```
* 再安装依赖
```bash
npm install
yarn 或 yarn install
```
也可以单独为node-sass设置淘宝的二进制包镜像
```bash
npm config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
或
yarn config set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass -g
```
