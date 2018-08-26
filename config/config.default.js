'use strict'
const path = require('path');

module.exports = appInfo => {
  const config = exports = {}

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1535275082997_8802'

  // add your config here
  config.middleware = []

  // 配置模版引擎
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
    defaultExtension: '.html'
  }
  
  // 配置视图
  config.view = {
    root: [
      path.join(appInfo.baseDir, 'app/view')
    ].join(',')
  };
  return config
}