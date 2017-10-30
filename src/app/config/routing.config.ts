import {Injector} from "@angular/core";
import {Transition, UIRouter} from "@uirouter/core/lib";
import {Ng2StateDeclaration} from "@uirouter/angular";

import {PreloaderService} from "../core/preloader/service/preloader.service";
import {RegistrationComponent} from "../registration/registration.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SettingsComponent} from "../settings/settings.component";
import {LoginComponent} from "../login/login.component";
import {AccessManager} from "../manager/access.manager";
import {MatSnackBar} from "@angular/material";

export class RoutingConfig {

    /**
     * @returns {Promise<any>}
     */
    public static testDelay() {
        return new Promise(res => setTimeout(res, 500));
    }

    /**
     * UIRouter config method
     *
     * @param {UIRouter} router
     * @param {Injector} injector
     */
    static config(router: UIRouter, injector: Injector) {
        const preloader: PreloaderService = injector.get(PreloaderService),
            authMng: AccessManager = injector.get(AccessManager),
            snackBar: MatSnackBar = injector.get(MatSnackBar)
        ;

        router.transitionService.onBefore({to: 'login'}, (transition: Transition) => {
            let Logged: boolean = false;
            authMng.isLoggedIn.subscribe(logged => {
                Logged = logged
            });


            if (Logged) {
                return router.stateService.target('dashboard');
            }
            return !Logged;
        });

        router.transitionService.onBefore({to: 'settings'}, (transition: Transition) => {
            let Logged: boolean = false;
            authMng.isLoggedIn.subscribe(logged => {
                Logged = logged
            });

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

            const message = transition.params().message;
            if (null != message) {
                snackBar.open(String(message), "", {
                    duration: 3000,
                    horizontalPosition: "center",
                    verticalPosition: "top",
                    extraClasses: ['custom-snack-bar']
                });
            }
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
                params: {
                    message: null
                },
                component: LoginComponent
            }, {
                name: 'registration',
                url: '/registration',
                params: {
                    message: null
                },
                component: RegistrationComponent
            }, {
                name: 'dashboard',
                url: '/',
                resolve: [
                    {
                        provide: 'token',
                        token: 'myAwesomeData',
                        useFactory: () => this.testDelay(),
                        policy: {async: "WAIT"}
                    },
                ],
                params: {
                    message: null
                },
                component: DashboardComponent
            },
            {
                name: 'settings',
                url: '/settings',
                params: {
                    message: null
                },
                component: SettingsComponent
            }
        ];
    }
}