import { Phone } from './core/phone/phone.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
    ],
    providers: [ Phone ],
})
export class AppModule {}
