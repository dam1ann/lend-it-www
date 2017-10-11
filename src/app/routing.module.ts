import {NgModule} from "@angular/core";
import {UIRouterModule} from "@uirouter/angular";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RegistrationComponent} from "./registration/registration.component";

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
  }
];


@NgModule({
  imports: [
    UIRouterModule.forRoot({
      otherwise: '/',
      states: states,
      useHash: false,
      // config: function (router: UIRouter) {
      // return router.urlService.rules.otherwise('/dashboard');
      // }
    })
  ],
  exports: [
    UIRouterModule
  ]
})

export class RoutingModule {
}
