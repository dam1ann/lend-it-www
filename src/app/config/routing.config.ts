import {PreloaderService} from "../core/preloader/service/preloader.service";
import {RegistrationComponent} from "../registration/registration.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SettingsComponent} from "../settings/settings.component";
import {LoginComponent} from "../login/login.component";
import {UIRouter, Transition} from "@uirouter/core/lib";
import {Ng2StateDeclaration} from "@uirouter/angular";
import {Injector} from "@angular/core";


export class RoutingConfig {

    /**
     * @returns {Promise<any>}
     */
    public static testDelaye() {
        return new Promise(res => setTimeout(res, 3000));
    }

    /**
     * @param {UIRouter} router
     * @param {Injector} injector
     */
    public static config(router: UIRouter, injector: Injector) {
        let preloader: PreloaderService = injector.get(PreloaderService);

        router.transitionService.onStart({}, (transition: Transition) => {
            preloader.start();
        });

        router.transitionService.onSuccess({}, (transition: Transition) => {
            preloader.stop();
        });
    }

    /**
     *
     * @returns {Array<Ng2StateDeclaration>}
     */
    public static mainStates(): Array<Ng2StateDeclaration> {
        return [
            {
                name: 'login',
                url: '/login',
                component: LoginComponent
            }, {
                name: 'registration',
                url: '/registration',
                component: RegistrationComponent,
            }, {
                name: 'dashboard',
                url: '/',
                component: DashboardComponent,
                resolve: [
                    {
                        provide: 'token',
                        token: 'myAwesomeData',
                        useFactory: () => this.testDelaye()
                    },
                ],
            },
            {
                name: 'settings',
                url: '/settings',
                component: SettingsComponent
            }
        ];
    }
}