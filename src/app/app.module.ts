import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {UIRouterModule} from "@uirouter/angular";
import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";

import {RegistrationModule} from "./registration/registration.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {SettingsModule} from "./settings/settings.module";
import {NotFoundModule} from "./404/notFound.module";
import {FooterModule} from "./footer/footer.module";
import {HeaderModule} from "./header/header.module";
import {LoginModule} from "./login/login.module";
import {RequestInterceptor} from "./listener/interceptor/request.interceptor";
import {PreloaderService} from "./core/preloader/service/preloader.service";
import {PreloaderModule} from "./core/preloader/preloader.module";
import {APP_CONFIG, APP_CONFIGURATION} from "./config/app.config";
import {RoutingConfig} from "./config/routing.config";
import {LocalStorageModule} from "angular-2-local-storage";
import {MyLocalStorageService} from "./core/local-storage/localStorage.service";
import {RoutingMessage} from "./core/listener/routing/routing.message";
import {RoutingAccessDeniedRedirect} from "./core/listener/routing/routing.access-denied-redirect";
import {RoutingRedirect} from "./core/listener/routing/routing.redirect";

@NgModule({
    declarations: [
        AppComponent
    ],

    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: RequestInterceptor,
        multi: true,
    }, {
        provide: APP_CONFIG,
        useValue: APP_CONFIGURATION,
    },
        MyLocalStorageService,
        PreloaderService,
        RoutingMessage,
        RoutingAccessDeniedRedirect,
        RoutingRedirect
    ],
    imports: [
        PreloaderModule,
        BrowserModule,
        BrowserAnimationsModule,
        DashboardModule,
        LoginModule,
        FooterModule,
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
        }),
        LocalStorageModule.withConfig({
            prefix: 'lendIt',
            storageType: 'localStorage'
        })
    ],
    bootstrap: [AppComponent],
    exports: [
        UIRouterModule
    ]
})
export class AppModule {
}




