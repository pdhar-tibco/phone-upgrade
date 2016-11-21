"use strict";
var angular = require("angular");
var phone_module_1 = require("./phone/phone.module");
var checkmark_filter_1 = require("./checkmark/checkmark.filter");
// declare var angular: angular.IAngularStatic;
// Define the `core` module
exports.CoreModule = angular.module("core", [phone_module_1.CorePhoneModule.name]);
exports.CoreModule.filter("checkmark", checkmark_filter_1.CheckMarkFilterFn);
//# sourceMappingURL=core.module.js.map