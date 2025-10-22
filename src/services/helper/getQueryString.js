"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryString = getQueryString;
function getQueryString(value, defaultValue = '') {
    return typeof value === 'string' ? value : defaultValue;
}
