"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = require("./config");
const helpers_1 = require("./helpers");
const logger_1 = require("./logger");
http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end((0, helpers_1.greeting)());
}).listen(config_1.port, () => console.log((0, logger_1.logServerMessage)('bo')));
