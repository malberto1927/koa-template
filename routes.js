const Router = require('koa-router')
const router = new Router()

router.get('/inicio/:nombre', (ctx, next) => {
    ctx.body = {body: ctx.request, params: ctx.params, query: ctx.query}
})

router.post('/prueba', ctx => {
    ctx.body = ctx.request.body
})

module.exports = router