import * as angular from "angular";
// import { IAngularStatic } from "@types/angular";
import { Dashboard } from "stocks/client/components/dashboard";
"use strict";
console.log("[app.config.ts]");
// declare var angular: IAngularStatic;
angular.
  module("phonecatApp").
  config(["$locationProvider" , "$routeProvider",
    function config(
      $locationProvider: angular.ILocationProvider ,
      $routeProvider: angular.route.IRouteProvider) {
      // $locationProvider.hashPrefix('!');

      $routeProvider.
        when("/phones", {
          template: "<phone-list></phone-list>"
        }).
        when("/phones/:phoneId", {
          template: "<phone-detail></phone-detail>"
        }).
        // when("/stocks", {
        //   template: "<stocks></stocks>"
        // }).
        // when("/stocks/Dashboard", {
        //   template: "<dashboard></dashboard>"
        // }).
        // when("/stocks/Manage", {
        //   template: "<manage></manage>"
        // }).
        // when("/stocks/Summary", {
        //   template: "<summary></summary>"
        // }).
        otherwise("/phones");
    }
  ]);
