const Koa = require("koa")
// 引入路由
const Router = require("koa-router")
// 使用Logger模块
const Logger = require("./module/logger")

let port = 9200
var opn = require('opn')
var uri = 'http://localhost:' + port

const app = new Koa()
var router = new Router()


router.get("/", (ctx, next) => {
    ctx.body = "首页：Hello-Koa2"
})
router.get("/about", (ctx, next) => {
    ctx.body = "关于Koa2"
})


app.use(Logger)

app
  .use(router.routes())
  .use(router.allowedMethods())




// 1
// app.use(async (ctx) => {
//     ctx.body = "Hello Koa2"
// })


// 输出：135642
// app.use(async (ctx, next) => {
//     ctx.body = "1"
//      //下一个中间件
//     next()
//     ctx.body += "2"
// })

// app.use(async (ctx, next) => {
//     ctx.body += "3"
//     next()
//     ctx.body += "4"
// })

// app.use(async (ctx, next) => {
//     ctx.body += "5"
//     next()
//     ctx.body += "6"
// })


app.listen(port, () => {
    console.log("listening on .." + port)
    opn(uri)
})