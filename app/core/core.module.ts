"use strict";
import * as angular from "angular";
import {CorePhoneModule} from "./phone/phone.module";
import {CheckMarkFilterFn} from "./checkmark/checkmark.filter";

// declare var angular: angular.IAngularStatic;

// Define the `core` module
export const CoreModule = angular.module("core", [CorePhoneModule.name]);
  CoreModule.filter("checkmark", CheckMarkFilterFn);

