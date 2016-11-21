"use strict";
import * as angular from "angular";
import {CorePhoneModule} from "../core/phone/phone.module";
import {PhoneListController} from "./phone-list.component";
// Define the `phoneList` module
export const PhoneListModule = angular.module("phoneList", [CorePhoneModule.name]);
PhoneListModule.component("phoneList", {
    templateUrl: "phone-list/phone-list.template.html",
    controller: PhoneListController
  });

PhoneListModule.config(($routeProvider) => {
      $routeProvider.when("/phones", {
          template: "<phone-list></phone-list>"
        });
});
