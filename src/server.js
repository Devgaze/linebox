const fs = require('fs');

const http2 = require('http2');

const http = require('http');

const { app } = require('./app');

const logger = require('./services/logger');

require('dotenv').config();

const PORT = process.env.LINEBOX_PORT || 8000;
const HTTP2 = process.env.LINEBOX_HTTP2 || false;
let server;

if (HTTP2) {
  const serverOptions = {
    key: fs.readFileSync(process.env.CERT_KEY_PATH),
    cert: fs.readFileSync(process.env.CERT_PATH),
    allowHTTP1: true,
  };
  server = http2.createSecureServer(serverOptions, app);
} else {
  server = http.createServer(app);
}

async function startServer() {
  server.listen(PORT, () => {
    logger.info(`Listening on port ${PORT}...`);
  });
}

startServer();
