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
var core_1 = require("@angular/core");
var phone_service_1 = require("./../core/phone/phone.service");
var PhoneListController = (function () {
    function PhoneListController(phone) {
        var _this = this;
        // this.phones = Phone.query();
        phone.query().subscribe(function (phones) { _this.phones = phones; });
        this.orderProp = "age";
    }
    PhoneListController.$inject = ["phone"];
    return PhoneListController;
}());
// Ng2 Component
var PhoneListComponent = (function () {
    // Constructor
    function PhoneListComponent(phone) {
        var _this = this;
        // this.phones = Phone.query();
        phone.query().subscribe(function (phones) { _this.phones = phones; });
        this.orderProp = "age";
    }
    PhoneListComponent.prototype.getPhones = function () {
        return this.sortPhones(this.filterPhones(this.phones));
    };
    PhoneListComponent.prototype.filterPhones = function (phones) {
        var _this = this;
        if (phones && this.query) {
            return phones.filter(function (phone) {
                var name = phone.name.toLowerCase();
                var snippet = phone.snippet.toLowerCase();
                return name.indexOf(_this.query) >= 0 || snippet.indexOf(_this.query) >= 0;
            });
        }
        return phones;
    };
    PhoneListComponent.prototype.sortPhones = function (phones) {
        var _this = this;
        if (phones && this.orderProp) {
            return phones
                .slice(0) // Make a copy
                .sort(function (a, b) {
                if (a[_this.orderProp] < b[_this.orderProp]) {
                    return -1;
                }
                else if ([b[_this.orderProp] < a[_this.orderProp]]) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
        }
        return phones;
    };
    PhoneListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "phone-list",
            templateUrl: "phone-list.ng2.template.html",
        }), 
        __metadata('design:paramtypes', [phone_service_1.Phone])
    ], PhoneListComponent);
    return PhoneListComponent;
}());
exports.PhoneListComponent = PhoneListComponent;
// Register `phoneList` component, along with its associated controller and template
angular.
    module("phoneList").
    component("phoneList", {
    templateUrl: "phone-list/phone-list.template.html",
    controller: PhoneListController
});
// angular.
//   module("phoneList")
//   .directive(
//     "phoneList",
//     downgradeComponent({component: PhoneListComponent}) as angular.IDirectiveFactory
//   );
//# sourceMappingURL=phone-list.component.js.map