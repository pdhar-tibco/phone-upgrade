"use strict";
var angular = require("angular");
var phone_module_1 = require("../core/phone/phone.module");
var phone_detail_component_1 = require("./phone-detail.component");
// Define the `phoneDetail` module
exports.PhoneDetailModule = angular.module("phoneDetail", [
    "ngRoute",
    phone_module_1.CorePhoneModule.name
]);
// Register `phoneDetail` component, along with its associated controller and template
// export const PhoneDetailModule = angular.  module("phoneDetail");
exports.PhoneDetailModule.component("phoneDetail", {
    templateUrl: "phone-detail/phone-detail.template.html",
    controller: phone_detail_component_1.PhoneDetailController
});
exports.PhoneDetailModule.config(function ($routeProvider) {
    $routeProvider.when("/phones/:phoneId", {
        template: "<phone-detail></phone-detail>"
    });
});
//# sourceMappingURL=phone-detail.module.js.map