"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.limiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const configs_1 = require("../configs");
const limiter = () => (0, express_rate_limit_1.default)({
    windowMs: parseInt(configs_1.appConfigs.rateLimit.windowMinutes ?? '15') * 60 * 1000,
    max: parseInt(configs_1.appConfigs.rateLimit.maxRequest ?? '100')
});
exports.limiter = limiter;
