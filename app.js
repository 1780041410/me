const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const mongoose = require('mongoose')
const router = require('./router/index')

let app = new Koa

app.use(static(
  path.join( __dirname,  './public')
))

app.use(views(path.join(__dirname, './view'), {
  extension: 'pug'
}))

app.use(router.routes()).use(router.allowedMethods())



app.listen(3000, () => {
  mongoose.connect('mongodb://localhost:27017/me')
})