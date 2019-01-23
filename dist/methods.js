"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./request"));
exports.GET = function (url = '') {
    return request_1.default({ url, method: 'get' });
};
exports.PUT = function (url = '') {
    return request_1.default({ url, method: 'put' });
};
exports.POST = function (url = '') {
    return request_1.default({ url, method: 'post' });
};
exports.DELETE = function (url = '') {
    return request_1.default({ url, method: 'delete' });
};
//# sourceMappingURL=methods.js.map