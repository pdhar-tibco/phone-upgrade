
import { NgModule, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, UrlHandlingStrategy } from "@angular/router";
import { UpgradeModule } from "@angular/upgrade/static";
// Phones
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
import { CheckmarkPipe } from "./core/checkmark/checkmark.pipe";
// Stocks
import { StockApp } from "stocks/client/components/app";
import { Manage } from "stocks/client/components/manage";
import { Summary } from "stocks/client/components/summary";
import { Dashboard } from "stocks/client/components/dashboard";
import { Phone } from "./core/phone/phone.service";
import  StocksChildAppModule  from "stocks/client/components/app.module.child";
// import  { appChildRouting } from "stocks/client/components/app.routing.child";
// import { StocksModule } from "stocks/client/components/app.module";
// import { appRouting } from "stocks/client/components/app.routing";

import {APP_BASE_HREF} from "@angular/common";

let cssContent = require("stocks/client/css/app.css");

declare var angular: angular.IAngularStatic;

console.log("[app.module.ts]");

// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
      console.log("[strategy.shouldProcessUrl] " + url);
      return url.toString().startsWith("/#/stocks");
    }
  extract(url) {
      console.log("[strategy.extract] " + url);
      return url;
  }
  merge(url, whole) {
      console.log("[strategy.merge] " + url + " whole:" + whole);
      return url;
  }
}

export function routeParamsFactory(injector: angular.auto.IInjectorService) {
    return injector.get("$routeParams");
}


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        UpgradeModule,
        // StocksModule,
        // appRouting,
        // appChildRouting,
        StocksChildAppModule,
        RouterModule.forRoot([
            // {
            //     path: "Dashboard",
            //     component: Dashboard
            // },
            // {
            //     path: "Manage",
            //     component: Manage
            // },
            // {
            //     path: "Summary",
            //     component: Summary
            // },
            // {
            //     path: "",
            //     redirectTo: "StockApp",
            //     pathMatch: "full"
            // },
        ]
        , {
            useHash: false,
            initialNavigation: true,
            enableTracing: true

          }
        )

    ],
    declarations: [
        PhoneListComponent,
        PhoneDetailComponent,
        CheckmarkPipe
    ],
    providers: [
        Phone,
        // {provide: APP_BASE_HREF, useValue: "/#/stocks"},
        { provide: APP_BASE_HREF, useValue: "/#/stocks" },
        // { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
        // { provide: "$routeParams", useFactory: routeParamsFactory, deps: ["$injector"]},
    ],
    bootstrap: [
        // StockApp
    ]
})
export class AppModule {

//   constructor(public upgrade:UpgradeModule,÷\public router:Router) {
  constructor(
      public router: Router
      ) {
      console.log("[AppModule constructor]");
    // this.router.initialNavigation();
  }

  ngDoBootstrap() {
       console.log("[AppModule ngDoBootstrap]");
  }

  ngOnInit() {
      console.log("[AppModule ngOnInit]");
    //   this.router.initialNavigation();
  }

}
