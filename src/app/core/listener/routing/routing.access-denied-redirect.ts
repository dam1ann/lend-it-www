import {RoutingHookInterface} from "./routing.hook.interface";
import {AccessManager} from "../../../manager/access.manager";
import {Transition} from "@uirouter/core/lib";
import {Injectable} from "@angular/core";

@Injectable()
export class RoutingAccessDeniedRedirect implements RoutingHookInterface {
    /**
     * @param {AccessManager} accessManager
     */
    constructor(private accessManager: AccessManager) {
    }

    /**
     * @param {Transition} transition
     */
    handle(transition: Transition) {
        let Logged: boolean = false;
        this.accessManager.isLoggedIn.subscribe(logged => {
            Logged = logged
        });

        if (!Logged) {
            return transition.router.stateService.target('dashboard');
        }
    }
}