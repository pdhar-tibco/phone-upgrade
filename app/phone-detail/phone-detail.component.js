"use strict";
var PhoneDetailController = (function () {
    function PhoneDetailController($routParams, phone) {
        var _this = this;
        var phoneId = $routParams['phoneId'];
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
    PhoneDetailController.$inject = ['$routeParams', 'phone'];
    return PhoneDetailController;
}());
// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map