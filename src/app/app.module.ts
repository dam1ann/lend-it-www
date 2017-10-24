import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {DashboardModule} from "./dashboard/dashboard.module";
import {LoginModule} from "./login/login.module";
import {NotFoundModule} from "./404/notFound.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptor} from "./listener/interceptor/request.interceptor";
import {RegistrationModule} from "./registration/registration.module";
import {APP_CONFIG, APP_CONFIGURATION} from "./config/app.config";
import {SettingsModule} from "./settings/settings.module";
import {HeaderModule} from "./header/header.module";
import {UIRouterModule} from "@uirouter/angular";
import {RoutingConfig} from "./config/routing.config";
import {PreloaderModule} from "./core/preloader/preloader.module";
import {PreloaderService} from "./core/preloader/service/preloader.service";

@NgModule({
    declarations: [
        AppComponent
    ],

    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true,
        },
        {
            provide: APP_CONFIG,
            useValue: APP_CONFIGURATION,
        },
        PreloaderService
    ],
    imports: [
        PreloaderModule,
        BrowserModule,
        BrowserAnimationsModule,
        DashboardModule,
        LoginModule,
        NotFoundModule,
        RegistrationModule,
        SettingsModule,
        HttpClientModule,
        HeaderModule,
        UIRouterModule.forRoot({
            otherwise: '/',
            states: RoutingConfig.mainStates(),
            useHash: false,
            config: RoutingConfig.config
        })
    ],
    bootstrap: [AppComponent],
    exports: [
        UIRouterModule
    ]
})
export class AppModule {


}




