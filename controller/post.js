const mongoose = require('mongoose')

exports.getPosts = async (ctx) => {
    let title = '呵呵哒'
    await ctx.render('index', {
      title
    })
}