// import { StocksModule } from 'stocks/client/components/app.module';
// import { appRouting } from 'stocks/client/components/app.routing';
import { App } from 'stocks/client/components/app';
import { Manage } from 'stocks/client/components/manage';
import { Summary } from 'stocks/client/components/summary';
import { Dashboard } from 'stocks/client/components/dashboard';
import { Phone } from './core/phone/phone.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import  StocksChildAppModule  from 'stocks/client/components/app.module.child';
import  { appChildRouting } from 'stocks/client/components/app.routing.child';
import {APP_BASE_HREF} from '@angular/common';

var cssContent = require('stocks/client/css/app.css');

console.log("[app.module.ts]");
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        // appRouting,
        // appChildRouting,
        StocksChildAppModule,
        RouterModule.forRoot([
            {
                path: "#/stocks",
                // loadChildren: "stocks/client/components/app.module.child",
                component: App,
            },
            {
                path: "#/Dashboard",
                component: Dashboard
            },
            {
                path: "#/Manage",
                component: Manage
            },
            {
                path: "#/",
                redirectTo: "Dashboard",
                pathMatch: "full"
            },
        ])
        
    ],
    declarations:[
    ],
    providers: [ 
        Phone,
        {provide: APP_BASE_HREF, useValue: '/#/stocks'}
    ],
    bootstrap:[
        App
    ]
})
export class AppModule {}
