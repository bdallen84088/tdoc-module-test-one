"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var i0 = __importStar(require("@angular/core"));
var tdocTestOneService = /** @class */ (function () {
    function tdocTestOneService() {
    }
    tdocTestOneService.decorators = [
        { type: core_1.Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    tdocTestOneService.ctorParameters = function () { return []; };
    tdocTestOneService.ngInjectableDef = i0.defineInjectable({ factory: function tdocTestOneService_Factory() { return new tdocTestOneService(); }, token: tdocTestOneService, providedIn: "root" });
    return tdocTestOneService;
}());
exports.tdocTestOneService = tdocTestOneService;
//# sourceMappingURL=tdoc-test-one.service.js.map