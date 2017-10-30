import {RoutingHookInterface} from "./routing.hook.interface";
import {Transition} from "@uirouter/core/lib";
import {MatSnackBar} from "@angular/material";
import {Injectable} from "@angular/core";

@Injectable()
export class RoutingMessage implements RoutingHookInterface {
    /**
     * @param {MatSnackBar} snackBar
     */
    constructor(private snackBar: MatSnackBar) {
    }

    /**
     * @param {Transition} transition
     */
    handle(transition: Transition) {
        const message = transition.params().message;
        if (null != message) {
            this.snackBar.open(String(message), "", {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "top",
                extraClasses: ['custom-snack-bar']
            });
        }
    }
}