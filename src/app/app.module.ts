import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {RoutingModule} from "./routing.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {LoginModule} from "./login/login.module";
import {NotFoundModule} from "./404/notFound.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    LoginModule,
    RoutingModule,
    NotFoundModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}




