//1.搭建基本服务器
const http = require("http");
const jwt = require('jsonwebtoken');
let token = jwt.sign({foo: 'bar'},'shhh');
console.log(token);
let decoded = jwt.verify(token, 'shhh');
console.log(decoded.foo)
let i = 1;
global.mySession = {};
let server = http.createServer(function(req, res) {
  //2.处理响应的时候
  if(req.url.startsWith('/do-login')){//登录，存数据
    //2.1：处理用户登录的逻辑 ->/do-login ->完成登录，记住用户状态，并回写一个cookie
    //模拟用户数据
    let obj = {name:'jack'};
    //生成cookie的值
    let cookieValue = 'cookie' + (i ++);
    //关联cookie 全局存储数据到自己的session中
    global.mySession[cookieValue] = obj;
    //回写cookie
    res.setHeader('set-cookie','cookie=' + cookieValue);
    res.end("登录");
  }else if(req.url.startsWith('/show-login')) {//展示登录后数据，取数据
    //2.2 处理显示登录状态的响应/show-login，通过cookie来获取，并响应用户在session中的数据
    //启动服务器
    //获取整个多个cookie字符串req.headers.cookie
    //Phpstorm-b12df03d=e32937a8-efa7-4419-a343-dc6c58a63e05; cookie=cookie1
    //split(';')[1].split('=') = > arr = ['cookie','cookie1']
    //if(arr[0] === )
    console.log(global.mySession);
    console.log(req.headers.cookie)
    let browserCookie = req.headers.cookie;
    let cookieVal = browserCookie.split(';')[1].split('=')[1]
    if(typeof global.mySession[cookieVal] !== 'undefined') {
      res.end("login");
    }
    else {
      res.end("unlogin")
    }

  }
})
//启动服务器
server.listen(8888,()=> {
  console.log("启动服务器:127.0.0.1:8888")
})