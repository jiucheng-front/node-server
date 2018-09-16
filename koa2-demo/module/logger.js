module.exports = async (ctx, next) => {
    const start = new Date().getTime()
    await next()
    const end = new Date().getTime()

    console.log("请求路径" + ctx.request.url, "请求耗费时间:" + (end - start), ctx.body.length)

}