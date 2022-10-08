const fs = require('fs');
const http2 = require('http2');
const { app } = require('./app');

require('dotenv').config();
const PORT = process.env.PORT || 8000; 

const serverOptions = {
  key: fs.readFileSync(process.env.CERT_KEY_PATH),
  cert: fs.readFileSync(process.env.CERT_PATH),
  allowHTTP1: true
}

const server = http2.createSecureServer(serverOptions, app);

async function startServer() {  
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
