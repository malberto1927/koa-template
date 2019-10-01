const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const helmet = require('koa-helmet')
const router = require('./routes')

const server = new Koa()

server
    .use(logger())
    .use(helmet())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())

module.exports = server
