import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateInterceptor } from '../assets/i18n/services/translate.interceptor';

@NgModule({
    bootstrap: [AppComponent],

    imports: [
        BrowserModule.withServerTransition({ appId: 'bb-app' }),

        AppModule,

        ServerModule,
        NoopAnimationsModule,
        ModuleMapLoaderModule,
        ServerTransferStateModule, // comment
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TranslateInterceptor, multi: true }
    ]
})
export class AppServerModule { }
