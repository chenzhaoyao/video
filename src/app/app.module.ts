import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShareModule} from "./share/share.module";
import {ItemModule} from "./item/item.module";
import {CoreModule} from "./core/core.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ProgressVisibleInterceptor} from "./progress-visible-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {PlayerModule} from "./player/player.module";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ShareModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        ItemModule,
        PlayerModule
    ],
    providers: [
        {
            useClass: ProgressVisibleInterceptor,
            provide: HTTP_INTERCEPTORS,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
