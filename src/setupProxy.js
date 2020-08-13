const  { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://private-anon-1a8e767dad-woloxfrontendinverview.apiary-proxy.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api' : '/'
    }
    })
  )
}