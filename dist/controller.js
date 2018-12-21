"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(routerInfo) {
    return function (target) {
        let reqList = Object.getOwnPropertyDescriptors(target.prototype);
        const router = new target();
        if (routerInfo.prefix)
            router.prefix(routerInfo.prefix);
        for (let key in reqList) {
            if (key !== 'constructor') {
                let fn = reqList[key].value;
                fn(router);
            }
        }
        return router;
    };
}
exports.default = default_1;
//# sourceMappingURL=controller.js.map