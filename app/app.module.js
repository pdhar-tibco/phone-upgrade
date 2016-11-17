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
// Phones
var phone_list_component_1 = require("./phone-list/phone-list.component");
var phone_detail_component_1 = require("./phone-detail/phone-detail.component");
var checkmark_pipe_1 = require("./core/checkmark/checkmark.pipe");
var phone_service_1 = require("./core/phone/phone.service");
var app_module_child_1 = require("stocks/client/components/app.module.child");
// import  { appChildRouting } from "stocks/client/components/app.routing.child";
// import { StocksModule } from "stocks/client/components/app.module";
// import { appRouting } from "stocks/client/components/app.routing";
var common_1 = require("@angular/common");
var cssContent = require("stocks/client/css/app.css");
console.log("[app.module.ts]");
// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
var Ng1Ng2UrlHandlingStrategy = (function () {
    function Ng1Ng2UrlHandlingStrategy() {
    }
    Ng1Ng2UrlHandlingStrategy.prototype.shouldProcessUrl = function (url) {
        console.log("[strategy.shouldProcessUrl] " + url);
        return url.toString().startsWith("/#/stocks");
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
var AppModule = (function () {
    //   constructor(public upgrade:UpgradeModule,÷\public router:Router) {
    function AppModule(router) {
        this.router = router;
        console.log("[AppModule constructor]");
        // this.router.initialNavigation();
    }
    AppModule.prototype.ngDoBootstrap = function () {
        console.log("[AppModule ngDoBootstrap]");
    };
    AppModule.prototype.ngOnInit = function () {
        console.log("[AppModule ngOnInit]");
        //   this.router.initialNavigation();
    };
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule,
                static_1.UpgradeModule,
                // StocksModule,
                // appRouting,
                // appChildRouting,
                app_module_child_1.default,
                router_1.RouterModule.forRoot([], {
                    useHash: false,
                    initialNavigation: true,
                    enableTracing: true
                })
            ],
            declarations: [
                phone_list_component_1.PhoneListComponent,
                phone_detail_component_1.PhoneDetailComponent,
                checkmark_pipe_1.CheckmarkPipe
            ],
            providers: [
                phone_service_1.Phone,
                // {provide: APP_BASE_HREF, useValue: "/#/stocks"},
                { provide: common_1.APP_BASE_HREF, useValue: "/#/stocks" },
            ],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map