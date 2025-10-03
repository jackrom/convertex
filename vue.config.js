module.exports = {
  publicPath: '/convertex/',
  indexPath: '/',
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].filename = '/'

      return args
    })
  },
}
