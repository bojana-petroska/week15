"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greeting = void 0;
const config_1 = require("./config");
const greeting = () => {
    return config_1.message;
};
exports.greeting = greeting;
