import { Phone } from './core/phone/phone.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppModule as stocks } from 'stocks/client/components/app.module';

console.log("[app.module.ts]");
@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        stocks
    ],
    declarations:[
    ],
    providers: [ Phone ],
})
export class AppModule {}
