"use strict";
var angular = require("angular");
var phone_module_1 = require("../core/phone/phone.module");
var phone_list_component_1 = require("./phone-list.component");
// Define the `phoneList` module
exports.PhoneListModule = angular.module("phoneList", [phone_module_1.CorePhoneModule.name]);
exports.PhoneListModule.component("phoneList", {
    templateUrl: "phone-list/phone-list.template.html",
    controller: phone_list_component_1.PhoneListController
});
exports.PhoneListModule.config(function ($routeProvider) {
    $routeProvider.when("/phones", {
        template: "<phone-list></phone-list>"
    });
});
//# sourceMappingURL=phone-list.module.js.map