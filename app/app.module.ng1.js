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
// import { PhoneListComponent, PhoneListModule } from "./phone-list/phone-list.component";
// import { PhoneDetailComponent, PhoneDetailModule } from "./phone-detail/phone-detail.component";
var phone_list_module_1 = require("./phone-list/phone-list.module");
var phone_detail_module_1 = require("./phone-detail/phone-detail.module");
var core_module_1 = require("./core/core.module");
var core_1 = require("@angular/core");
// declare var angular: angular.IAngularStatic;
"use strict";
console.log("[app.module.ng1.ts]");
// // Create a new stocks module
// let myModule = angular.module("stocks", []);
// Define  the 'phonecatApp' Angular 1 module
exports.PhonecatAppModule = angular.module("phonecatApp", [
    "ngAnimate",
    "ngRoute",
    core_module_1.CoreModule.name,
    phone_detail_module_1.PhoneDetailModule.name,
    phone_list_module_1.PhoneListModule.name,
]);
exports.PhonecatAppModule.config(function ($routeProvider) {
    $routeProvider.when("/", { redirectTo: "/phones" });
    // $routeProvider.when("/", { template: "<phone-list></phone-list>"});
});
var PhonecatAppNg2Module = (function () {
    function PhonecatAppNg2Module() {
    }
    PhonecatAppNg2Module = __decorate([
        core_1.NgModule({}), 
        __metadata('design:paramtypes', [])
    ], PhonecatAppNg2Module);
    return PhonecatAppNg2Module;
}());
exports.PhonecatAppNg2Module = PhonecatAppNg2Module;
//# sourceMappingURL=app.module.ng1.js.map