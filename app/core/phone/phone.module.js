"use strict";
var angular = require("angular");
var phone_service_1 = require("./phone.service");
var static_1 = require("@angular/upgrade/static");
// Define the `core.phone` module
exports.CorePhoneModule = angular.module("core.phone", ["ngResource"]);
exports.CorePhoneModule.factory("phone", static_1.downgradeInjectable(phone_service_1.Phone));
//# sourceMappingURL=phone.module.js.map