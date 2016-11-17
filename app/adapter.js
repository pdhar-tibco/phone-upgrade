"use strict";
var app_module_1 = require("./app.module");
var core_1 = require("@angular/core");
var upgrade_1 = require("@angular/upgrade");
exports.upgradeAdapter = new upgrade_1.UpgradeAdapter(core_1.forwardRef(function () { return app_module_1.AppModule; }));
//# sourceMappingURL=adapter.js.map