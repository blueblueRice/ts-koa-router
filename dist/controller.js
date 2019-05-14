"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(routerInfo) {
    return function (target) {
        const reqList = Object.getOwnPropertyDescriptors(target.prototype);
        const router = new target();
        routerInfo.prefix && router.prefix(routerInfo.prefix);
        for (let key in reqList) {
            if (key !== 'constructor') {
                const fn = reqList[key].value;
                fn(router);
            }
        }
        return router;
    };
}
exports.default = default_1;
//# sourceMappingURL=controller.js.map