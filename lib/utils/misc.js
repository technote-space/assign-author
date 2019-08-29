"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const constant_1 = require("../constant");
exports.isTargetEvent = (context) => 'string' === typeof context.payload.action && context.eventName in constant_1.TARGET_EVENTS && constant_1.TARGET_EVENTS[context.eventName] === context.payload.action;
exports.getBuildVersion = (filepath) => {
    if (!fs_1.default.existsSync(filepath)) {
        return false;
    }
    const json = JSON.parse(fs_1.default.readFileSync(filepath, 'utf8'));
    if (json && 'tagName' in json) {
        return json['tagName'];
    }
    return false;
};
