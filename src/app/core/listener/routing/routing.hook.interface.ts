import {Transition} from "@uirouter/core/lib";

export interface RoutingHookInterface {
    handle(transition: Transition);
}