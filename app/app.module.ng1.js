"use strict";
"use strict";
console.log("[app.module.ng1.ts]");
// // Create a new stocks module
var myModule = angular.module("stocks", []);
// Define  the 'phonecatApp' Angular 1 module
angular.module("phonecatApp", [
    "ngAnimate",
    "ngRoute",
    "core",
    "phoneDetail",
    "phoneList",
    "stocks"
]);
//# sourceMappingURL=app.module.ng1.js.map