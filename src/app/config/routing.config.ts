import {RoutingAccessDeniedRedirect} from "../core/listener/routing/routing.access-denied-redirect";
import {RoutingHookInterface} from "../core/listener/routing/routing.hook.interface";
import {PreloaderService} from "../core/preloader/service/preloader.service";
import {RegistrationComponent} from "../registration/registration.component";
import {RoutingRedirect} from "../core/listener/routing/routing.redirect";
import {RoutingMessage} from "../core/listener/routing/routing.message";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {SettingsComponent} from "../settings/settings.component";
import {Transition, UIRouter} from "@uirouter/core/lib";
import {LoginComponent} from "../login/login.component";
import {Ng2StateDeclaration} from "@uirouter/angular";
import {Injector} from "@angular/core";
import { CartComponent } from "../cart/cart.component";

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
            routingMessage: RoutingHookInterface = injector.get(RoutingMessage),
            routingRedirect: RoutingHookInterface = injector.get(RoutingRedirect),
            routingAccessDeniedRedirect: RoutingHookInterface = injector.get(RoutingAccessDeniedRedirect)
        ;

        router.transitionService.onBefore({to: (state) => state.name === 'registration' || state.name === 'login'},
            (transition: Transition) => routingRedirect.handle(transition)
        );

        router.transitionService.onBefore({to: 'settings'},
            (transition: Transition) => routingAccessDeniedRedirect.handle(transition)
        );


        router.transitionService.onStart({}, () => preloader.start());


        router.transitionService.onSuccess({}, (transition: Transition) => {
            routingMessage.handle(transition);
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
            },{
                name: 'cart',
                url: '/cart',
                params: {
                    message: null
                },
                component: CartComponent
            }
        ];
    }
}