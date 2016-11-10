"use strict";
var phone_service_1 = require('./core/phone/phone.service');
var upgrade_1 = require('@angular/upgrade');
var app_module_1 = require('./app.module');
var app_1 = require('stocks/client/components/app');
var stocks_1 = require('stocks/client/services/stocks');
console.log("[main.ts]");
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
angular.module('stocks')
    .directive('app', upgradeAdapter.downgradeNg2Component(app_1.App));
angular.module('stocks').factory('stockservice', upgradeAdapter.downgradeNg2Provider(stocks_1.StocksService));
// angular.module('phoneList')
//   .directive(
//     'phoneList',
//     upgradeAdapter.downgradeNg2Component(PhoneListComponent) as angular.IDirectiveFactory
//   );
// angular.module('stocks').controller('initCtrl', ['stockservice', function(stockservice){
//     stockservice.configure("//localhost:8080");
// }]);
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
//# sourceMappingURL=main.js.map