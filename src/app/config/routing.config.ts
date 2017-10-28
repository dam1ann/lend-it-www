import { Injector } from "@angular/core";
import { Transition, UIRouter } from "@uirouter/core/lib";
import { Ng2StateDeclaration } from "@uirouter/angular";

import { PreloaderService } from "../core/preloader/service/preloader.service";
import { RegistrationComponent } from "../registration/registration.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SettingsComponent } from "../settings/settings.component";
import { LoginComponent } from "../login/login.component";
import { AccessManager } from "../manager/access.manager";
import { Observable } from "rxjs/Observable";


export class RoutingConfig {

    /**
     * @returns {Promise<any>}
     */
    public static testDelay() {
        return new Promise(res => setTimeout(res, 500));
    }


    /***
     * Test method create to emit boolean value as observable
     *
     * @returns {Observable<boolean>}
     */
    private static observableFunction(): Observable<boolean> {
        return new Observable(observer => {
            observer.next(false);
            setTimeout(() => {
                observer.complete();
            }, 1000);
        });
    }


    /**
     * UIRouter config method
     *
     * @param {UIRouter} router
     * @param {Injector} injector
     */
    static config(router: UIRouter, injector: Injector) {
        const preloader: PreloaderService = injector.get(PreloaderService),
            authMng: AccessManager = injector.get(AccessManager);


        router.transitionService.onBefore({to: 'login'}, (transition: Transition) => {
            let Logged: boolean = false;
            authMng.isLoggedIn.subscribe(logged => Logged = logged);


            if (Logged) {
                return router.stateService.target('dashboard');
            }
            return !Logged;
        });

        router.transitionService.onBefore({to: 'settings'}, (transition: Transition) => {
            let Logged: boolean = false;
            authMng.isLoggedIn.subscribe(logged => Logged = logged);

            if (!Logged) {
                return router.stateService.target('dashboard');
            }
            return Logged;
        });

        router.transitionService.onStart({}, (transition: Transition) => {
            preloader.start();
        });

        router.transitionService.onSuccess({}, (transition: Transition) => {
            preloader.stop();
        });
    }


    /**
     *  All router states
     *
     * @returns {Array<Ng2StateDeclaration>}
     */
    static mainStates(): Array<Ng2StateDeclaration> {
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
                        useFactory: () => this.testDelay(),
                        policy: {async: "WAIT"}
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