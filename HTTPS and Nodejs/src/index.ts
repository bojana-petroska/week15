import * as https from 'https';
import * as fs from 'fs';
import express from 'express';
import router from './route.js';

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use(router);

const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert'),
};

// const simpleServer = https.createServer(options, handler);
const expressServer = https.createServer(options, app);

expressServer.listen(3443, () => {
  console.log('server is running');
});

// creating node https server

// function handler(req, res) {
//   res.writeHead(200);
//   res.end('hello from https');
// }
