import { PhoneListComponent } from "./phone-list/phone-list.component";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
declare var angular: angular.IAngularStatic;


"use strict";
console.log("[app.module.ng1.ts]");
// // Create a new stocks module
let myModule = angular.module("stocks", []);


// Define  the 'phonecatApp' Angular 1 module

angular.module("phonecatApp", [
    "ngAnimate",
    "ngRoute",
    "core",
    "phoneDetail",
    "phoneList",
    "stocks"
]);





