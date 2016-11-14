import { RouterModule } from '@angular/router';
import { Phone } from './core/phone/phone.service';
import { UpgradeAdapter } from '@angular/upgrade';
import { IAngularStatic,IServiceProvider } from '@types/angular';
declare var angular: IAngularStatic;
import { AppModule } from './app.module';

import { App as StocksApp } from 'stocks/client/components/app';
import { Summary } from 'stocks/client/components/summary';
import { Dashboard } from "stocks/client/components/dashboard";
import { Manage } from "stocks/client/components/manage";
import { StocksService } from 'stocks/client/services/stocks';
// import { appRouting as stockRoutes,appRoutes } from 'stocks/client/components/app.routing';
console.log("[main.ts]");

var upgradeAdapter = new UpgradeAdapter(AppModule,{
    useDebug: true,
    useJit: false });

angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

angular.module('stocks') // app module in app.module.ng1.ts
    .directive(
    'dashboard', // template selector
    upgradeAdapter.downgradeNg2Component(Dashboard) as angular.IDirectiveFactory
    );

angular.module('stocks') // app module in app.module.ng1.ts
    .directive(
    'manage', // template selector
    upgradeAdapter.downgradeNg2Component(Manage) as angular.IDirectiveFactory
    );

angular.module('stocks') // app module in app.module.ng1.ts
    .directive(
    'summary', // template selector
    upgradeAdapter.downgradeNg2Component(Summary) as angular.IDirectiveFactory
    );

angular.module('stocks') // app module in app.module.ng1.ts
    .directive(
    'stocks', // template selector
    upgradeAdapter.downgradeNg2Component(StocksApp) as angular.IDirectiveFactory
    );

angular.module('stocks').service('stockservice', upgradeAdapter.downgradeNg2Provider(StocksService));

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp'], { strictDi: true });
