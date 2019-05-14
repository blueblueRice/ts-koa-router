"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(obj) {
    return function (_target, _name, descriptor) {
        const fn = descriptor.value;
        const method = obj.method.toLowerCase();
        descriptor.value = (router) => {
            router[method](obj.url, async (ctx, next) => {
                await fn(ctx, next);
            });
        };
    };
}
exports.default = default_1;
//# sourceMappingURL=request.js.map