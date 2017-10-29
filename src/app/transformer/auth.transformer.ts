import { Auth } from "../model/auth.model";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthTransformer implements AuthTransformerInterface {

    transform(object): AuthInterface {
        const auth = new Auth();

        auth.accessToken = object._accessToken;
        auth.authenticated = object._authenticated;
        auth.expiredIn = object._expiredIn;
        auth.refreshToken = object._refreshToken;

        return auth;
    }
}