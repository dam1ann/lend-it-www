import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from "@angular/core";
import { MyLocalStorageService } from "../core/local-storage/localStorage.service";
import { Auth } from "../model/auth.model";


@Injectable()
export class AccessManager {
    private auth;
    private loggedIn = new BehaviorSubject<boolean>(false);

    get isLoggedIn() {
        if(this.loggedIn.getValue()){
            this.localStorage.clean();
        }

        return this.loggedIn;
    }

    constructor(private localStorage: MyLocalStorageService) {
        this.auth = new Auth();

        if (this.localStorage.getAuthDetails() !== undefined &&
            this.localStorage.getAuthDetails() !== null &&
            this.localStorage.getAuthDetails().authenticated &&
            this.localStorage.getAuthDetails() instanceof Auth) {

            this.auth = this.localStorage.getAuthDetails();
            this.loggedIn.next(true);
        }
    }

    authenticate(authDetail) {
        this.auth.accessToken = authDetail.access_token;
        this.auth.expiredIn = authDetail.expires_in;
        this.auth.refreshToken = authDetail.refresh_token;
        this.auth.authenticated = true;

        this.localStorage.saveAuthDetails(this.auth);
        this.loggedIn.next(true);
    }

    isAuthenticated(): boolean {
        return this.auth.authenticated;
    }

    getAccessToken() {
        return this.auth.accessToken;
    }
}