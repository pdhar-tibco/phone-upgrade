import { PhoneData,Phone } from './../core/phone/phone.service';

declare var angular:any;

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;
  query: string;

  static $inject = ['phone'];

  constructor(phone: Phone) {
    // this.phones = Phone.query();
    phone.query().subscribe(phones => {this.phones = phones;})
    this.orderProp = 'age';
  }
}
// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: PhoneListController
    // controller: ['Phone',
    //   function PhoneListController(Phone) {
    //     this.phones = Phone.query();
    //     this.orderProp = 'age';
    //   }
    // ]
  });
