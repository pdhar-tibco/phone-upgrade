"use strict";
// import * as angular from "angular";
var static_1 = require("@angular/upgrade/static");
var router_1 = require("@angular/router");
// import { Phone } from "./core/phone/phone.service";
// import { IAngularStatic, IServiceProvider } from "@types/angular";
// declare var angular: IAngularStatic;
// import angular2 dpes
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var app_module_ng1_1 = require("./app.module.ng1");
console.log("[main.ts]");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    // ((<any>platformRef.instance).upgrade as UpgradeModule).bootstrap
    // bootstrap angular1
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.body, [app_module_ng1_1.PhonecatAppModule.name]);
    // setTimeout is necessary because upgrade.bootstrap is async.
    // This should be fixed.
    setTimeout(function () {
        platformRef.injector.get(router_1.Router).initialNavigation();
    }, 0);
});
//# sourceMappingURL=main.js.map