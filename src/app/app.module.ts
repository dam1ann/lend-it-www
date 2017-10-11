import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {RoutingModule} from "./routing.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {LoginModule} from "./login/login.module";
import {NotFoundModule} from "./404/notFound.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RequestInterceptor} from "./listener/interceptor/request.interceptor";
import {RegistrationModule} from "./registration/registration.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true,
  }],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    LoginModule,
    NotFoundModule,
    RegistrationModule,
    HttpClientModule,
    RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




