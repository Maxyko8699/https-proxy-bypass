# HTTPS Web Proxy - Bypass Regional Restrictions

A Node.js-based HTTPS proxy that bypasses regional restrictions, geo-blocks, and network blockers.

## Features

- ✅ HTTP/HTTPS proxy support
- ✅ Bypass SSL certificate validation (for restricted content)
- ✅ CORS headers support
- ✅ Automatic redirect following
- ✅ Request logging
- ✅ Self-signed certificate generation
- ✅ Connection pooling (keep-alive)

## Prerequisites

- Node.js v14+
- OpenSSL (for certificate generation)
- npm or yarn

## Installation

1. Clone or download this repository
2. Install dependencies:

bash
npm install


3. Generate SSL certificates:

bash
npm run gen-cert


## Usage

### Start the proxy

bash
npm start


Or with auto-reload during development:

bash
npm run dev


### Access content through the proxy

**HTTP Proxy:**

http://localhost:3000/https://example.com
http://localhost:3000/http://blocked-site.com


**HTTPS Proxy:**

https://localhost:3443/https://example.com
https://localhost:3443/http://site.com


### Configuration

Set custom ports via environment variables:

bash
HTTP_PORT=8000 HTTPS_PORT=8443 npm start


## Example Use Cases

### Curl

bash
curl -x http://localhost:3000 https://example.com
curl -k https://localhost:3443/https://example.com


### Browser
Set proxy in browser settings:
- HTTP Proxy: localhost:3000
- HTTPS Proxy: localhost:3443

### JavaScript/Fetch

javascript
fetch('http://localhost:3000/https://api.example.com/data')
  .then(res => res.json())
  .then(data => console.log(data));


### Node.js

javascript
const http = require('http');

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/https://api.example.com/endpoint',
  method: 'GET'
};

const req = http.request(options, (res) => {
  res.on('data', (d) => process.stdout.write(d));
});

req.end();


## How It Works

1. Client sends request to proxy with target URL
2. Proxy forwards request to target server
3. SSL verification is disabled (rejectUnauthorized: false)
4. Response headers include CORS headers for browser compatibility
5. Response is forwarded back to client

## Security Notice

⚠️ **Warning**: This proxy:
- Disables SSL certificate verification
- Doesn't validate target URLs
- Should only be used in controlled environments
- Not recommended for production use with sensitive data

## Environment Variables

- HTTP_PORT - HTTP server port (default: 3000)
- HTTPS_PORT - HTTPS server port (default: 3443)

## Troubleshooting

### "Certificate file not found"
Run: npm run gen-cert

### "Port already in use"
Change port: HTTP_PORT=8000 npm start

### "OpenSSL not found"
Install OpenSSL for your OS and try again

## License

MIT

## Disclaimer

This tool is for educational and authorized use only. Users are responsible for complying with all applicable laws and terms of service. Bypass of content restrictions may violate terms of service or local laws.