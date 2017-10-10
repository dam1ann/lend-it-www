import {Injectable} from "@angular/core";
import {Auth} from "../model/auth.model";

@Injectable()
export class AccessManager {
    private auth;

    constructor() {
        this.auth = new Auth();
    }

    authenticate(authDetail) {

        this.auth.accessToken = authDetail.access_token;
        this.auth.expiredIn = authDetail.expires_in;
        this.auth.refreshToken = authDetail.refresh_token;
        this.auth.authenticated = true;
    }

    isAuthenticated(): boolean {
        return this.auth.authenticated;
    }

    getAccessToken() {
        return this.auth.accessToken;
    }
}