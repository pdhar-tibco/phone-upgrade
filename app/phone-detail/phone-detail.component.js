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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var phone_service_1 = require("./../core/phone/phone.service");
var PhoneDetailController = (function () {
    function PhoneDetailController($routParams, phone) {
        var _this = this;
        var phoneId = $routParams["phoneId"];
        //  this.phone = Phone.get({phoneId},(phone:any)=>{
        //    this.setImage(phone.images[0]);
        //  })
        phone.get(phoneId).subscribe(function (data) {
            _this.phone = data;
            _this.setImage(data.images[0]);
        });
    }
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.$inject = ["$routeParams", "phone"];
    return PhoneDetailController;
}());
var PhoneDetailComponent = (function () {
    function PhoneDetailComponent($routParams, phone) {
        var _this = this;
        var phoneId = $routParams["phoneId"];
        phone.get(phoneId).subscribe(function (data) {
            _this.phone = data;
            _this.setImage(data.images[0]);
        });
    }
    PhoneDetailComponent.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "phone-detail",
            templateUrl: "phone-detail.ng2.template.html",
        }),
        __param(0, core_1.Inject("$routeParamas")), 
        __metadata('design:paramtypes', [Object, phone_service_1.Phone])
    ], PhoneDetailComponent);
    return PhoneDetailComponent;
}());
exports.PhoneDetailComponent = PhoneDetailComponent;
// Register `phoneDetail` component, along with its associated controller and template
angular.
    module("phoneDetail").
    component("phoneDetail", {
    templateUrl: "phone-detail/phone-detail.template.html",
    controller: PhoneDetailController
});
// angular
//   .module("phoneDetail")
//   .directive("phoneDetail",
//       downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
//       );
//# sourceMappingURL=phone-detail.component.js.map