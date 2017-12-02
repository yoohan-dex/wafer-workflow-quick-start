// app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
  globalData: {
    userInfo: null
  },
  onLaunch () {
    qcloud.setLoginUrl(config.service.loginUrl)
  }
})
