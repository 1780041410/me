'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    await this.ctx.render('admin/user/login', null);
  }
}

module.exports = UserController;

