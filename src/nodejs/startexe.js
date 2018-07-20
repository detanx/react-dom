//express_demo.js 文件
let express = require('express');
let app = express();
let querystring = require('querystring');
let cookieParser = require('cookie-parser');
let MongoClient = require('mongodb').MongoClient;
//连接字符串
let DB_CONN_STR = 'mongodb://localhost:27017/gomall';  
let database = require("./3.0_actiondb");
let dbName = 'gomall';

//处理静态文件
//app.use('/static',express.static('public'));//加虚拟目录
//app.use(express.static('public'));


app.use(cookieParser())

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
 

app.get('/', function (req, res) {
  res.send('Hello World');
})

//初始化
app.post('/user', function (req, res) {
	console.log("user")
	/* 连接mongodb*/
	MongoClient.connect(DB_CONN_STR, function(err, client) {
	    let whereStr = {}
	    console.log("连接成功！" + client);
	    let db = client.db(dbName)
	    database.selectData(db, "runoob", whereStr, function(result) {
	        console.log(result);
  				res.send(JSON.stringify(result));
	        client.close();
	    });
	});
	
})

//添加物品
app.use("/addCart", function(req, res) {
	console.log("addCart")
	let body = '';
	req.on('data', function (chunk) {
    body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
    console.log("chunk:",chunk);
  });
  
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);  //将一个字符串反序列化为一个对象
    console.log("body:",body);
    /* 连接mongodb*/
		MongoClient.connect(DB_CONN_STR, function(err, client) {
		    let data = [body];
		    console.log("连接成功！" + client);
		    let db = client.db(dbName)
		    database.insertData(db, "runoob", data, function(result) {
		        console.log(result);
	  				res.send(JSON.stringify({"code":1}));
		        client.close();
		    });
		});
  });
})

//删除物品
app.use("/delCart", function(req, res) {
	console.log("delCart")
	let body = '';
	req.on('data', function (chunk) {
    body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
    console.log("chunk:",chunk);
  });
  
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);  //将一个字符串反序列化为一个对象
    console.log("body:",body);
    /* 连接mongodb*/
		MongoClient.connect(DB_CONN_STR, function(err, client) {
		    let data = body;
		    console.log("连接成功！" + client);
		    let db = client.db(dbName)
		    database.delData(db, "runoob", data, function(result) {
		        console.log(result);
	  				res.send(JSON.stringify({"code":1}));
		        client.close();
		    });
		});
  });
})
 
let server = app.listen(8081, function () {
 
  let host = server.address().address
  let port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})