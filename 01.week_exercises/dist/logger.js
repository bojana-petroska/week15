"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logServerMessage = void 0;
const config_1 = require("./config");
const logServerMessage = (message) => {
    const timeStamp = Date.now();
    return timeStamp + `server is running on http://localhost${config_1.port}`;
};
exports.logServerMessage = logServerMessage;
