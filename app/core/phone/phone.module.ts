"use strict";
import * as angular from "angular";
import {Phone} from "./phone.service";
import {downgradeInjectable} from "@angular/upgrade/static";

// Define the `core.phone` module
export const CorePhoneModule = angular.module("core.phone", ["ngResource"]);
CorePhoneModule.factory("phone", downgradeInjectable(Phone));
