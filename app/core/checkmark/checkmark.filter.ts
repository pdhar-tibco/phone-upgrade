"use strict";
import * as angular from "angular";
import {CoreModule} from "../core.module";
// angular.
//   module("core").filter("checkmark", function() {
//     return function(input: boolean) {
//       return input ? "\u2713" : "\u2718";
//     };
//   });


export function CheckMarkFilterFn() {
  return function(input: boolean) {
      return input ? "\u2713" : "\u2718";
  };
};
