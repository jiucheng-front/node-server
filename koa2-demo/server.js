const Koa = require("koa")
const app = new Koa()

let port = 3000
var opn = require('opn')
var uri = 'http://localhost:' + port


// 使用Logger模块
const Logger = require("./module/logger")
app.use(Logger)

app.use(async (ctx) => {
    ctx.body = "Hello Koa2"
})


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
    console.log("listening on .."+port)
    opn(uri)
})