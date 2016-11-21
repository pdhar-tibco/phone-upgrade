"use strict";
// angular.
//   module("core").filter("checkmark", function() {
//     return function(input: boolean) {
//       return input ? "\u2713" : "\u2718";
//     };
//   });
function CheckMarkFilterFn() {
    return function (input) {
        return input ? "\u2713" : "\u2718";
    };
}
exports.CheckMarkFilterFn = CheckMarkFilterFn;
;
//# sourceMappingURL=checkmark.filter.js.map