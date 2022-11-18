const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://34.71.86.111',
            changeOrigin:true,
        })
    );
};
