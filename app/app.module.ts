
import * as angular from "angular";
import { NgModule, ApplicationRef, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, UrlHandlingStrategy, UrlTree } from "@angular/router";
import { UpgradeModule } from "@angular/upgrade/static";
// Phones
// import { PhoneListComponent } from "./phone-list/phone-list.component";
// import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
// import { CheckmarkPipe } from "./core/checkmark/checkmark.pipe";
import {PhonecatAppModule} from "./app.module.ng1";
// Stocks
import { StockApp } from "stocks/client/components/app";
import { Manage } from "stocks/client/components/manage";
import { Summary } from "stocks/client/components/summary";
import { Dashboard } from "stocks/client/components/dashboard";
import { Phone } from "./core/phone/phone.service";
import  StocksChildAppModule  from "stocks/client/components/app.module.child";


import {APP_BASE_HREF} from "@angular/common";

let cssContent = require("stocks/client/css/app.css");

// declare var angular: angular.IAngularStatic;

console.log("[app.module.ts]");

// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {

  shouldProcessUrl(url: UrlTree): boolean {
      let result = url.toString().startsWith("/stocks") ||
      url.toString().startsWith("/Dashboard") ||
      url.toString().startsWith("/Manage");
      console.log("[strategy.shouldProcessUrl] " + url + " " + result);
      return result;
    }
  extract(url: UrlTree): UrlTree {
      console.log("[strategy.extract] " + url);
      return url;
  }
  merge(url: UrlTree, whole: UrlTree): UrlTree {
      console.log("[strategy.merge] " + url + " whole:" + whole);
      return url;
  }
}

export function routeParamsFactory(injector: angular.auto.IInjectorService) {
    return injector.get("$routeParams");
}

@Component({
    selector: "root-cmp",
    template: `
        <router-outlet></router-outlet>
        <div class="ng-view"></div>
    `
})
export class RootComponent {}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        UpgradeModule,
        StocksChildAppModule,
        RouterModule.forRoot([]
        , {
            useHash: true,
            initialNavigation: false,
            enableTracing: true

          }
        )

    ],
    declarations: [
        RootComponent,
    ],
    providers: [
        Phone,
        // {provide: APP_BASE_HREF, useValue: "/#/stocks"},
        // { provide: APP_BASE_HREF, useValue: "/stocks" },
        { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
        // { provide: "$routeParams", useFactory: routeParamsFactory, deps: ["$injector"]},
    ],
    bootstrap: [
        RootComponent
    ]
})
export class AppModule {

  constructor(public upgrade: UpgradeModule, public router: Router) {
      console.log("[AppModule constructor]");
  }

  ngDoBootstrap() {
       console.log("[AppModule ngDoBootstrap]");
  }

  ngOnInit() {
      console.log("[AppModule ngOnInit]");
  }

}
