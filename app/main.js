"use strict";
var phone_service_1 = require('./core/phone/phone.service');
var upgrade_1 = require('@angular/upgrade');
var app_module_1 = require('./app.module');
var app_1 = require('stocks/client/components/app');
var dashboard_1 = require("stocks/client/components/dashboard");
var manage_1 = require("stocks/client/components/manage");
var stocks_1 = require('stocks/client/services/stocks');
console.log("[main.ts]");
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
angular.module('stocks') // app module in app.module.ng1.ts
    .directive('dashboard', // template selector
upgradeAdapter.downgradeNg2Component(dashboard_1.Dashboard));
angular.module('stocks') // app module in app.module.ng1.ts
    .directive('manage', // template selector
upgradeAdapter.downgradeNg2Component(manage_1.Manage));
angular.module('stocks') // app module in app.module.ng1.ts
    .directive('app', // template selector
upgradeAdapter.downgradeNg2Component(app_1.App));
angular.module('stocks').service('stockservice', upgradeAdapter.downgradeNg2Provider(stocks_1.StocksService));
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp'], { strictDi: true });
//# sourceMappingURL=main.js.map