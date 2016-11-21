"use strict";
import * as angular from "angular";
import {CorePhoneModule} from "../core/phone/phone.module";
import {PhoneDetailController} from "./phone-detail.component";
// Define the `phoneDetail` module
export const PhoneDetailModule = angular.module("phoneDetail", [
  "ngRoute",
  CorePhoneModule.name
]);

// Register `phoneDetail` component, along with its associated controller and template
// export const PhoneDetailModule = angular.  module("phoneDetail");
PhoneDetailModule.component("phoneDetail", {
    templateUrl: "phone-detail/phone-detail.template.html",
    controller: PhoneDetailController
    // controller: ['$routeParams', 'Phone',
    //   function PhoneDetailController($routeParams, Phone) {
    //     var self = this;
    //     self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    //       self.setImage(phone.images[0]);
    //     });

    //     self.setImage = function setImage(imageUrl) {
    //       self.mainImageUrl = imageUrl;
    //     };
    //   }
    // ]
  });
PhoneDetailModule.config(($routeProvider) => {
      $routeProvider.when("/phones/:phoneId", {
          template: "<phone-detail></phone-detail>"
        });
});