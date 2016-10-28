import { Phone } from './core/phone/phone.service';
import { UpgradeAdapter } from '@angular/upgrade';
declare var angular: any;
import { AppModule } from './app.module';

let upgradeAdapter = new UpgradeAdapter(AppModule);
angular.module('core.phone').factory('phone',upgradeAdapter.downgradeNg2Provider(Phone));
upgradeAdapter.bootstrap(document.documentElement,['phonecatApp'])