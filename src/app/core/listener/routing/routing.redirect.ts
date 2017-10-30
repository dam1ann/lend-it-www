import {RoutingHookInterface} from "./routing.hook.interface";
import {AccessManager} from "../../../manager/access.manager";
import {TargetState, Transition} from "@uirouter/core/lib";
import {Injectable} from "@angular/core";

@Injectable()
export class RoutingRedirect implements RoutingHookInterface {
    /**
     * @param {AccessManager} accessManager
     */
    constructor(private accessManager: AccessManager) {
    }

    /**
     * @param {Transition} transition
     * @returns {TargetState}
     */
    handle(transition: Transition) {
        let Logged: boolean = false;

        this.accessManager.isLoggedIn.subscribe(logged => {
            Logged = logged
        });

        if (Logged) {
            return transition.router.stateService.target('dashboard');
        }
    }

}