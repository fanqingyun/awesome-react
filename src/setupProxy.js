const proxy = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    proxy({
      target: 'http://192.1.1.205:10016/systex_nbuWeb/api',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  );
};