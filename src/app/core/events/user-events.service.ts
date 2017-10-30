import {BehaviorSubject} from "rxjs/BehaviorSubject";

export class UserEvents {

    /**
     * @type {BehaviorSubject<UserInterface>}
     */
    private observableUser = new BehaviorSubject<UserInterface>({
        'username': '',
        'email': '',
        'roles': []
    });

    /**
     * @returns {BehaviorSubject<UserInterface>}
     */
    get getUser(): BehaviorSubject<UserInterface> {
        return this.observableUser;
    }
}
