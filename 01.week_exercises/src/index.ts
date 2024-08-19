import http from "http";
import { port } from './config'
import { greeting } from "./helpers";
import { logServerMessage } from "./logger";

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(greeting());
}).listen(port, () => console.log(logServerMessage(' bo')));

