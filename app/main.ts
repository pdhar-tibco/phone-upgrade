import { Phone } from './core/phone/phone.service';
import { UpgradeAdapter } from '@angular/upgrade';
declare var angular: any;
import { AppModule } from './app.module';

import { App as StocksApp } from 'stocks/client/components/app';
import {StocksService} from 'stocks/client/services/stocks';
console.log("[main.ts]");
let upgradeAdapter = new UpgradeAdapter(AppModule);
angular.module('core.phone').factory('phone',upgradeAdapter.downgradeNg2Provider(Phone));

angular.module('stocks') // app module in app.module.ng1.ts
        .directive(
            'app', // template selector
            upgradeAdapter.downgradeNg2Component(StocksApp) as angular.IDirectiveFactory
);
angular.module('stocks').service('stockservice',upgradeAdapter.downgradeNg2Provider(StocksService));
// angular.module('phoneList')
//   .directive(
//     'phoneList',
//     upgradeAdapter.downgradeNg2Component(PhoneListComponent) as angular.IDirectiveFactory
//   );
// angular.module('stocks').controller('initCtrl', ['stockservice', function(stockservice){
//     stockservice.configure("//localhost:8080");
// }]);
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']);
