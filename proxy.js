// Main Proxy Server Code
const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    const target = 'http://example.com'; // Target server to proxy to
    proxy.web(req, res, { target: target }, (error) => {
        res.writeHead(502);
        res.end('Proxy error');
    });
});

server.listen(3000, () => {
    console.log('Proxy server listening on port 3000');
});