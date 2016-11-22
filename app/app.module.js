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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var static_1 = require("@angular/upgrade/static");
var phone_service_1 = require("./core/phone/phone.service");
var app_module_child_1 = require("stocks/client/components/app.module.child");
var cssContent = require("stocks/client/css/app.css");
// declare var angular: angular.IAngularStatic;
console.log("[app.module.ts]");
// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        var result = url.toString().startsWith("/stocks") ||
            url.toString().startsWith("/Dashboard") ||
            url.toString().startsWith("/Manage");
        console.log("[strategy.shouldProcessUrl] " + url + " " + result);
        return result;
    };
    Ng1Ng2UrlHandlingStrategy.prototype.extract = function (url) {
        console.log("[strategy.extract] " + url);
        return url;
    };
    Ng1Ng2UrlHandlingStrategy.prototype.merge = function (url, whole) {
        console.log("[strategy.merge] " + url + " whole:" + whole);
        return url;
    };
    return Ng1Ng2UrlHandlingStrategy;
}());
exports.Ng1Ng2UrlHandlingStrategy = Ng1Ng2UrlHandlingStrategy;
function routeParamsFactory(injector) {
    return injector.get("$routeParams");
}
exports.routeParamsFactory = routeParamsFactory;
var RootComponent = (function () {
    function RootComponent() {
    }
    RootComponent = __decorate([
        core_1.Component({
            selector: "root-cmp",
            template: "\n        <router-outlet></router-outlet>\n        <div class=\"ng-view\"></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RootComponent);
    return RootComponent;
}());
exports.RootComponent = RootComponent;
var AppModule = (function () {
    function AppModule(upgrade, router) {
        this.upgrade = upgrade;
        this.router = router;
        console.log("[AppModule constructor]");
    }
    AppModule.prototype.ngDoBootstrap = function () {
        console.log("[AppModule ngDoBootstrap]");
    };
    AppModule.prototype.ngOnInit = function () {
        console.log("[AppModule ngOnInit]");
    };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                static_1.UpgradeModule,
                app_module_child_1.default,
                router_1.RouterModule.forRoot([], {
                    useHash: true,
                    initialNavigation: false,
                    enableTracing: true
                })
            ],
            declarations: [
                RootComponent,
            ],
            providers: [
                phone_service_1.Phone,
                // {provide: APP_BASE_HREF, useValue: "/#/stocks"},
                // { provide: APP_BASE_HREF, useValue: "/stocks" },
                { provide: router_1.UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
            ],
            bootstrap: [
                RootComponent
            ]
        }), 
        __metadata('design:paramtypes', [static_1.UpgradeModule, router_1.Router])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map