"use strict";
var static_1 = require("@angular/upgrade/static");
var router_1 = require("@angular/router");
var app_module_1 = require("./app.module");
// import angular2 dpes
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_1 = require("stocks/client/components/app");
var summary_1 = require("stocks/client/components/summary");
var dashboard_1 = require("stocks/client/components/dashboard");
var manage_1 = require("stocks/client/components/manage");
console.log("[main.ts]");
angular.module("stocks") // app module in app.module.ng1.ts
    .directive("stocks", // template selector
static_1.downgradeComponent({ component: app_1.StockApp }));
angular.module("stocks") // app module in app.module.ng1.ts
    .directive("dashboard", // template selector
static_1.downgradeComponent({ component: dashboard_1.Dashboard }));
angular.module("stocks") // app module in app.module.ng1.ts
    .directive("manage", // template selector
static_1.downgradeComponent({ component: manage_1.Manage }));
angular.module("stocks") // app module in app.module.ng1.ts
    .directive("summary", // template selector
static_1.downgradeComponent({ component: summary_1.Summary }));
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // ((<any>platformRef.instance).upgrade as UpgradeModule).bootstrap
    // bootstrap angular1
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.body, ["phonecatApp"]);
    // setTimeout is necessary because upgrade.bootstrap is async.
    // This should be fixed.
    setTimeout(function () {
        platformRef.injector.get(router_1.Router).initialNavigation();
    }, 0);
});
//# sourceMappingURL=main.js.map