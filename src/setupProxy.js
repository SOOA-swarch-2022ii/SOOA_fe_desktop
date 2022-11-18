const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://10.44.14.187',
            changeOrigin:true,
        })
    );
};
