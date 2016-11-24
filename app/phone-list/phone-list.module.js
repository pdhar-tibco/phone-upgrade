"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular = require("angular");
var core_1 = require("@angular/core");
var phone_module_1 = require("../core/phone/phone.module");
var phone_list_component_1 = require("./phone-list.component");
// Define the `phoneList` module
exports.PhoneListModule = angular.module("phoneList", [phone_module_1.CorePhoneModule.name]);
exports.PhoneListModule.component("phoneList", {
    templateUrl: "phone-list/phone-list.template.html",
    controller: phone_list_component_1.PhoneListController
});
exports.PhoneListModule.config(function ($routeProvider) {
    $routeProvider
        .when("/phones", {
        template: "<phone-list></phone-list>"
    });
});
var PhoneListNg2Module = (function () {
    function PhoneListNg2Module() {
    }
    PhoneListNg2Module = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], PhoneListNg2Module);
    return PhoneListNg2Module;
}());
exports.PhoneListNg2Module = PhoneListNg2Module;
//# sourceMappingURL=phone-list.module.js.map