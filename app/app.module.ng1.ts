import * as angular from "angular";
// import { PhoneListComponent, PhoneListModule } from "./phone-list/phone-list.component";
// import { PhoneDetailComponent, PhoneDetailModule } from "./phone-detail/phone-detail.component";
import {PhoneListModule} from "./phone-list/phone-list.module";
import {PhoneDetailModule} from "./phone-detail/phone-detail.module";
import {CoreModule} from "./core/core.module";
import {NgModule} from "@angular/core";

// declare var angular: angular.IAngularStatic;


"use strict";
console.log("[app.module.ng1.ts]");
// // Create a new stocks module
// let myModule = angular.module("stocks", []);


// Define  the 'phonecatApp' Angular 1 module

export const PhonecatAppModule = angular.module("phonecatApp", [
    "ngAnimate",
    "ngRoute",
    CoreModule.name,
    PhoneDetailModule.name,
    PhoneListModule.name,
    // "stocks"
]);
PhonecatAppModule.config(($routeProvider: angular.route.IRouteProvider) => {
    $routeProvider.when("/", { redirectTo: "/phones"});
});

@NgModule({})
export class MenuNgModule {}




