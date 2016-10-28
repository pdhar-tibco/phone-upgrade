"use strict";
var phone_service_1 = require('./core/phone/phone.service');
var upgrade_1 = require('@angular/upgrade');
var app_module_1 = require('./app.module');
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
//# sourceMappingURL=main.js.map