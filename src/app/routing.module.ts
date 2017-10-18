import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RegistrationComponent} from "./registration/registration.component";
import {SettingsComponent} from "./settings/settings.component";
import {ItemListComponent} from "./dashboard/item-list/item-list.component";

const states = [
  {
    name: 'login',
    url: '/login',
    component: LoginComponent
  }, {
    name: 'registration',
    url: '/registration',
    component: RegistrationComponent
  }, {
    name: 'dashboard',
    url: '/',
    component: DashboardComponent
  }, {
    name: 'settings',
    url: '/settings',
    component: SettingsComponent,
  }
];


@NgModule({
  imports: [
    UIRouterModule.forRoot({
      otherwise: '/',
      states: states,
      useHash: false,
    })
  ],
  exports: [
    UIRouterModule
  ]
})

export class RoutingModule {
}
