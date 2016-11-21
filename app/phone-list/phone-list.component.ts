import * as angular from "angular";
import { Component } from "@angular/core";
import { PhoneData, Phone } from "./../core/phone/phone.service";


// declare var angular: angular.IAngularStatic;
import { downgradeComponent } from "@angular/upgrade/static";

export class PhoneListController {
  phones: PhoneData[];
  orderProp: string;
  query: string;

  static $inject = ["phone"];

  constructor(phone: Phone) {
    // this.phones = Phone.query();
    phone.query().subscribe(phones => { this.phones = phones; });
    this.orderProp = "age";
  }
}
// Ng2 Component
@Component({
  moduleId: module.id,
  selector: "phone-list",
  templateUrl: "phone-list.ng2.template.html",
})
export class PhoneListComponent {
  phones: PhoneData[];
  orderProp: string;
  query: string;

  // Constructor
  constructor(phone: Phone) {
    // this.phones = Phone.query();
    phone.query().subscribe(phones => { this.phones = phones; });
    this.orderProp = "age";
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]) {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) // Make a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp]) {
            return -1;
          } else if ([b[this.orderProp] < a[this.orderProp]]) {
            return 1;
          } else {
            return 0;
          }
        });
    }
    return phones;
  }


}
// Register `phoneList` component, along with its associated controller and template
// export const PhoneListModule = angular.module("phoneList");
// PhoneListModule.component("phoneList", {
//     templateUrl: "phone-list/phone-list.template.html",
//     controller: PhoneListController
//     // controller: ['Phone',
//     //   function PhoneListController(Phone) {
//     //     this.phones = Phone.query();
//     //     this.orderProp = 'age';
//     //   }
//     // ]
//   });

// PhoneListModule.config(($routeProvider) => {
//       $routeProvider.when("/phones", {
//           template: "<phone-list></phone-list>"
//         });
// });

// angular.
//   module("phoneList")
//   .directive(
//     "phoneList",
//     downgradeComponent({component: PhoneListComponent}) as angular.IDirectiveFactory
//   );
