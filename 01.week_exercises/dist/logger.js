"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logServerMessage = void 0;
const logServerMessage = (message) => {
    const timeStamp = Date.now();
    return timeStamp + message;
};
exports.logServerMessage = logServerMessage;
