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
var PhoneDetailNg2Module = (function () {
    function PhoneDetailNg2Module() {
    }
    PhoneDetailNg2Module = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], PhoneDetailNg2Module);
    return PhoneDetailNg2Module;
}());
exports.PhoneDetailNg2Module = PhoneDetailNg2Module;
//# sourceMappingURL=phone-detail.module.js.map