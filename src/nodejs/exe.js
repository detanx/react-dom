const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const bodyParser = require('koa-bodyparser')
const router = require('./router')
const cors = require('koa2-cors')
const app = new Koa()
const port = 9871
app.use(bodyParser())
// 处理静态资源 这里是前端build好之后的目录
app.use(koaStatic( path.resolve(__dirname, '../dist')))
// 处理cors
app.use(cors({  
	origin: function(ctx) {
    return 'http://localhost:9099'
  },
  credentials: true,
  allowMethods: ['GET','POST','DELETE'],
  allowHeaders: ['t', 'Content-Type']
}))
// 路由
app.use(router.routes()).use(router.allowedMethods())
// 监听端口
app.listen(9871)
console.log(
`[demo] start-quick is starting at port ${port}`
)