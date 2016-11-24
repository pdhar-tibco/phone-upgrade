

import * as angular from "angular"; ``;
import { NgModule, ApplicationRef, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, UrlHandlingStrategy, UrlTree, UrlSerializer, DefaultUrlSerializer } from "@angular/router";
import { UpgradeModule } from "@angular/upgrade/static";
// Phones
// import { PhoneListComponent } from "./phone-list/phone-list.component";
// import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
// import { CheckmarkPipe } from "./core/checkmark/checkmark.pipe";
import {PhonecatAppModule, PhonecatAppNg2Module} from "./app.module.ng1";
import { PhoneDetailNg2Module } from "./phone-detail/phone-detail.module";
import { PhoneListNg2Module } from "./phone-list/phone-list.module";
// Stocks
import { StockApp } from "stocks/client/components/app";
import { Manage } from "stocks/client/components/manage";
import { Summary } from "stocks/client/components/summary";
import { Dashboard } from "stocks/client/components/dashboard";
import { Phone } from "./core/phone/phone.service";
// import  StocksChildAppModule  from "stocks/client/components/app.module.child";


import {APP_BASE_HREF} from "@angular/common";

let cssContent = require("stocks/client/css/app.css");

// declare var angular: angular.IAngularStatic;

console.log("[app.module.ts]");

// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {

    private serializer: UrlSerializer = new DefaultUrlSerializer();


  shouldProcessUrl(url: UrlTree): boolean {
      let result = url.toString().startsWith("/stocks");
      console.log("[strategy.shouldProcessUrl] " + url.toString() + " " + result);
      return result;
    }
  extract(url: UrlTree): UrlTree {
      console.log("[strategy.extract] " + url.toString());
      return url;
  }
  merge(url: UrlTree, whole: UrlTree): UrlTree {
      console.log("[strategy.merge] " + url.toString() + " whole:" + whole.toString());
      return url;
  }
}

export function routeParamsFactory(injector: angular.auto.IInjectorService) {
    return injector.get("$routeParams");
}

@Component({
    selector: "root-cmp",
    template: `
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Ng1 and Ng2 Apps </span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" routerLink="/phones">Phones(Ng1-routerLink)</a>
            <a class="mdl-navigation__link" routerLink="/stocks">Stocks(Ng2-routerLink)</a>
            <a class="mdl-navigation__link" href="/#/phones">Phones(Ng1-href)</a>
            <a class="mdl-navigation__link" href="/#/stocks">Stocks(Ng2-href)</a>
            </nav>
        </div>
        </header>
        <main class="mdl-layout__content" style="padding: 20px;">
            <router-outlet></router-outlet>
            <div class="ng-view"></div>
        </main>
    </div>
        
    `
})
export class RootComponent {
    constructor(private router: Router) {
    }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        UpgradeModule,
        PhonecatAppNg2Module,
        PhoneListNg2Module,
        PhoneDetailNg2Module,
        // StocksChildAppModule,
        RouterModule.forRoot([
            {
                path: "",
                loadChildren: "stocks/client/components/app.module.child"
            }
        ]
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
