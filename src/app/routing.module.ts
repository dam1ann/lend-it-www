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
    }
];


@NgModule({
    imports: [
        UIRouterModule.forRoot({
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
