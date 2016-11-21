
// import * as angular from "angular";
import { UpgradeModule, downgradeComponent } from "@angular/upgrade/static";
import { RouterModule, Router } from "@angular/router";
// import { Phone } from "./core/phone/phone.service";
// import { IAngularStatic, IServiceProvider } from "@types/angular";
// declare var angular: IAngularStatic;
// import angular2 dpes
import { platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { PhonecatAppModule} from "./app.module.ng1";
// import { StockApp } from "stocks/client/components/app";
// import { Summary } from "stocks/client/components/summary";
// import { Dashboard } from "stocks/client/components/dashboard";
// import { Manage } from "stocks/client/components/manage";
// import { StocksService } from "stocks/client/services/stocks";
console.log("[main.ts]");



// angular.module("stocks") // app module in app.module.ng1.ts
//     .directive(
//         "stocks", // template selector
//         downgradeComponent({component: StockApp}) as angular.IDirectiveFactory
//     );
// angular.module("stocks") // app module in app.module.ng1.ts
//     .directive(
//         "dashboard", // template selector
//         downgradeComponent({component: Dashboard}) as angular.IDirectiveFactory
//     );
// angular.module("stocks") // app module in app.module.ng1.ts
//     .directive(
//         "manage", // template selector
//         downgradeComponent({component: Manage}) as angular.IDirectiveFactory
//     );
// angular.module("stocks") // app module in app.module.ng1.ts
//     .directive(
//         "summary", // template selector
//         downgradeComponent({component: Summary}) as angular.IDirectiveFactory
//     );

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    // ((<any>platformRef.instance).upgrade as UpgradeModule).bootstrap
    // bootstrap angular1
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;

  upgrade.bootstrap(document.body, [PhonecatAppModule.name]);

  // setTimeout is necessary because upgrade.bootstrap is async.
  // This should be fixed.
  setTimeout(() => {
    platformRef.injector.get(Router).initialNavigation();
  }, 0);
});
