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
// import { StocksModule } from 'stocks/client/components/app.module';
// import { appRouting } from 'stocks/client/components/app.routing';
var app_1 = require('stocks/client/components/app');
var manage_1 = require('stocks/client/components/manage');
var dashboard_1 = require('stocks/client/components/dashboard');
var phone_service_1 = require('./core/phone/phone.service');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_module_child_1 = require('stocks/client/components/app.module.child');
var common_1 = require('@angular/common');
var cssContent = require('stocks/client/css/app.css');
console.log("[app.module.ts]");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                // appRouting,
                // appChildRouting,
                app_module_child_1.default,
                router_1.RouterModule.forRoot([
                    {
                        path: "#/stocks",
                        // loadChildren: "stocks/client/components/app.module.child",
                        component: app_1.App,
                    },
                    {
                        path: "#/Dashboard",
                        component: dashboard_1.Dashboard
                    },
                    {
                        path: "#/Manage",
                        component: manage_1.Manage
                    },
                    {
                        path: "#/",
                        redirectTo: "Dashboard",
                        pathMatch: "full"
                    },
                ])
            ],
            declarations: [],
            providers: [
                phone_service_1.Phone,
                { provide: common_1.APP_BASE_HREF, useValue: '/#/stocks' }
            ],
            bootstrap: [
                app_1.App
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map