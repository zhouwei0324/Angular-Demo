import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ButtonModule} from "ng-devui";
import { HuanbaComponent } from './component/huanba/huanba.component';

@NgModule({
    declarations: [
        AppComponent,
        HuanbaComponent
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

