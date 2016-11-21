// 'use strict';
import * as angular from "angular";
// declare var angular: angular.IAngularStatic;
import { Component, Inject } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import { Phone, PhoneData } from "./../core/phone/phone.service";


export class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;
  static $inject = ["$routeParams", "phone"];

  constructor($routParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routParams["phoneId"];
    //  this.phone = Phone.get({phoneId},(phone:any)=>{
    //    this.setImage(phone.images[0]);
    //  })
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

@Component({
  moduleId: module.id,
  selector: "phone-detail",
  templateUrl: "phone-detail.ng2.template.html",
})
export class PhoneDetailComponent {

  phone: PhoneData;
  mainImageUrl: string;

  constructor( @Inject("$routeParamas") $routParams, phone: Phone) {
    let phoneId = $routParams["phoneId"];

    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }

}

// // Register `phoneDetail` component, along with its associated controller and template
// export const PhoneDetailModule = angular.  module("phoneDetail");
// PhoneDetailModule.component("phoneDetail", {
//     templateUrl: "phone-detail/phone-detail.template.html",
//     controller: PhoneDetailController
//     // controller: ['$routeParams', 'Phone',
//     //   function PhoneDetailController($routeParams, Phone) {
//     //     var self = this;
//     //     self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//     //       self.setImage(phone.images[0]);
//     //     });

//     //     self.setImage = function setImage(imageUrl) {
//     //       self.mainImageUrl = imageUrl;
//     //     };
//     //   }
//     // ]
//   });
// PhoneDetailModule.config(($routeProvider) => {
//       $routeProvider.when("/phones/:phoneId", {
//           template: "<phone-detail></phone-detail>"
//         });
// });

  // angular
  //   .module("phoneDetail")
  //   .directive("phoneDetail",
  //       downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
  //       );
