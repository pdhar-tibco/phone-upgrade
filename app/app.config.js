"use strict";
var angular = require("angular");
"use strict";
console.log("[app.config.ts]");
// declare var angular: IAngularStatic;
angular.
    module("phonecatApp").
    config(["$locationProvider", "$routeProvider",
    function config($locationProvider, $routeProvider) {
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
//# sourceMappingURL=app.config.js.map