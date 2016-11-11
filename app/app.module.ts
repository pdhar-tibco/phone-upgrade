// import { App } from 'stocks/client/components/app';
// import { Manage } from 'stocks/client/components/manage';
// import { Summary } from 'stocks/client/components/summary';
// import { Dashboard } from 'stocks/client/components/dashboard';
// import { appRouting } from 'stocks/client/components/app.routing';
import { Phone } from './core/phone/phone.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StocksModule } from 'stocks/client/components/app.module';

console.log("[app.module.ts]");
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        // appRouting,
        StocksModule,
    ],
    declarations:[
        // App,
        // Dashboard,
        // Manage,
        // Summary 
    ],
    providers: [ 
        Phone
    ],
    bootstrap:[
        // App
    ]
})
export class AppModule {}
