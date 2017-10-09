import {NgModule} from "@angular/core";
import {UIRouterModule, UIRouter} from "@uirouter/angular";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const states = [
  {
    name: 'hello',
    url: '/login',
    component: LoginComponent
  }, {
    name: 'login',
    url: '/login',
    component: LoginComponent
  }, {
    name: 'dashboard',
    url: '/dashboard',
    component: DashboardComponent
  }];


const config = function (router: UIRouter) {
  router.urlService.rules.otherwise('/dashboard');
};


@NgModule({
  imports: [
    UIRouterModule.forRoot({
      states: states,
      useHash: false,
      config: config
    })
  ],
  exports: [
    UIRouterModule
  ]
})

export class RoutingModule {
}
