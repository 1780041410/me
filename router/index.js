const Router = require('koa-router')
const post = require('../controller/post')

let router = new Router

// post
router.get('/getPosts', post.getPosts)
router.delete('/delPost/:id', post.delPostByID)
router.post('/addPost', post.addPost)
router.update('/updatePost/:id', post.updatePostByID)


// me
module.exports = router