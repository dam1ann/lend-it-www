import {RoutingAccessDeniedRedirect} from "../core/listener/routing/routing.access-denied-redirect";
import {RoutingHookInterface} from "../core/listener/routing/routing.hook.interface";
import {PreloaderService} from "../core/preloader/service/preloader.service";
import {RegistrationComponent} from "../registration/registration.component";
import {RoutingRedirect} from "../core/listener/routing/routing.redirect";
import {RoutingMessage} from "../core/listener/routing/routing.message";
import {SettingsComponent} from "../settings/settings.component";
import {Transition, UIRouter} from "@uirouter/core/lib";
import {LoginComponent} from "../login/login.component";
import {Ng2StateDeclaration} from "@uirouter/angular";
import {Injector} from "@angular/core";
import {CartComponent} from "../cart/cart.component";
import {ProductComponent} from "../dashboard/product/product.component";
import {MoviesManager} from "../manager/movie.manager";
import {CartManager} from "../manager/cart.manager";
import {DashboardComponent} from "../dashboard/dashboard.component";

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

    router.transitionService.onBefore({to: state => state.name === 'registration' || state.name === 'login'},
      (transition: Transition) => routingRedirect.handle(transition)
    );

    router.transitionService.onBefore({to: 'settings'},
      (transition: Transition) => routingAccessDeniedRedirect.handle(transition)
    );

    router.transitionService.onBefore({}, () => preloader.start());

    router.transitionService.onSuccess({}, (transition: Transition) => {
      routingMessage.handle(transition);
      preloader.stop();
    });

    router.transitionService.onError({}, () => {
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
        component: LoginComponent,
        params: {
          message: null
        }
      }, {
        name: 'registration',
        url: '/registration',
        component: RegistrationComponent,
        params: {
          message: null
        }
      }, {
        name: 'settings',
        url: '/settings',
        component: SettingsComponent,
        params: {
          message: null
        }
      }, {
        name: 'cart',
        url: '/cart',
        component: CartComponent,
        resolve: [{
          token: 'movies',
          deps: [CartManager],
          resolveFn: ResolveCart
        }],
        params: {
          message: null
        }
      }, {
        name: 'dashboard',
        url: '/',
        component: DashboardComponent,
        resolve: [{
          token: 'movies',
          deps: [MoviesManager],
          resolveFn: ResolveMovie
        },
        ],
        params: {
          message: null
        }
      }, {
        name: 'dashboard.product',
        url: ':id',
        component: ProductComponent,
        resolve: [{
          token: 'product',
          deps: [MoviesManager, Transition],
          resolveFn: ResolveSingleMovie
        }
        ],
        resolvePolicy: {
          async: 'WAIT',
          when: 'EAGER'
        },
        params: {
          message: null
        },
      }
    ];
  }
}


export function ResolveMovie(moviesMng) {
  return moviesMng.getMovies();
}

export function ResolveSingleMovie(moviesMng, transition) {
  return moviesMng.getSingleMovie(transition.params().id);
}

export function ResolveCart(cartMng) {
  return cartMng.getMovies();
}
