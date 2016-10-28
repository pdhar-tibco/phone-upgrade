"use strict";
var PhoneListController = (function () {
    function PhoneListController(phone) {
        var _this = this;
        // this.phones = Phone.query();
        phone.query().subscribe(function (phones) { _this.phones = phones; });
        this.orderProp = 'age';
    }
    PhoneListController.$inject = ['phone'];
    return PhoneListController;
}());
// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map