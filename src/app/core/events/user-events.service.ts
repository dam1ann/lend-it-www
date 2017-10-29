import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AsyncSubject} from "rxjs/AsyncSubject";


export class UserEvents {
    /**
     * @type {AsyncSubject<String>}
     */
    private successLoggedObservable = new AsyncSubject<String>();

    /**
     * @type {AsyncSubject<String>}
     */
    private successRegisteredObservable = new AsyncSubject<String>();

    /**
     * @type {BehaviorSubject<UserInterface>}
     */
    private observableUser = new BehaviorSubject<UserInterface>({
        'username': '',
        'email': '',
        'roles': []
    });

    /**
     * @returns {AsyncSubject<String>}
     */
    get successLogged(): AsyncSubject<String> {
        return this.successLoggedObservable;
    }

    /**
     * @returns {AsyncSubject<String>}
     */
    get successRegistered(): AsyncSubject<String> {
        return this.successRegisteredObservable;
    }

    /**
     * @returns {BehaviorSubject<UserInterface>}
     */
    get getUser(): BehaviorSubject<UserInterface> {
        return this.observableUser;
    }
}
