
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

console.log("[main.ts]");


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
