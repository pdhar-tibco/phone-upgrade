"use strict";
'use strict';
console.log("[app.config.ts]");
angular.
    module('phonecatApp').
    config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        // $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/phones', {
            template: '<phone-list></phone-list>'
        }).
            when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
        }).
            when('/stocks', {
            template: '<stocks></stocks>'
        }).
            when('/stocks/Dashboard', {
            template: '<dashboard></dashboard>'
        }).
            when('/stocks/Manage', {
            template: '<manage></manage>'
        }).
            when('/stocks/Summary', {
            template: '<summary></summary>'
        }).
            otherwise('/stocks');
    }
]);
//# sourceMappingURL=app.config.js.map