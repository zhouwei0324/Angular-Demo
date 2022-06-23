// @ts-ignore
// @ts-ignore

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonModule} from "ng-devui";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

