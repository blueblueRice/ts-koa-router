"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_1 = __importDefault(require("./request"));
exports.Request = request_1.default;
const controller_1 = __importDefault(require("./controller"));
exports.Controller = controller_1.default;
const service_1 = __importDefault(require("./service"));
exports.Service = service_1.default;
const methods_1 = require("./methods");
exports.GET = methods_1.GET;
exports.PUT = methods_1.PUT;
exports.POST = methods_1.POST;
exports.DELETE = methods_1.DELETE;
exports.default = {
    Request: request_1.default,
    Controller: controller_1.default,
    Service: service_1.default,
};
//# sourceMappingURL=index.js.map