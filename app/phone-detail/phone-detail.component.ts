import { Phone, PhoneData } from './../core/phone/phone.service';
// 'use strict';
declare var angular: any;

class PhoneDetailController {
   phone: PhoneData;
   mainImageUrl: string;
   static $inject = [ '$routeParams','phone'];

   constructor($routParams: angular.route.IRouteParamsService,phone: Phone) {
     let phoneId = $routParams['phoneId'];
    //  this.phone = Phone.get({phoneId},(phone:any)=>{
    //    this.setImage(phone.images[0]);
    //  })
    phone.get(phoneId).subscribe(data=>{
      this.phone = data;
      this.setImage(data.images[0]);
    });
   }

   setImage(imageUrl:string) {
     this.mainImageUrl = imageUrl;
   }
}

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
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
